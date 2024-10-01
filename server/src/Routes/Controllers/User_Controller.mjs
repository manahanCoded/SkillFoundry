import db from "../../Database/PGdatabse.js";
import { validationResult, matchedData } from "express-validator";
import bcrypt from "bcrypt";
import "../../Middleware/localPassport.js";
import passport from "passport";

const userRegister = async (req, res) => {
  const saltRounds = 10;
  const errors = validationResult(req);
  const { email, password } = matchedData(req);

  try {
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const getData = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (getData.rowCount > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

    bcrypt.hash(password, saltRounds, async (err, done) => {
      if (err) {
        return res.status(400).json({ error: "Error for password" });
      } else {
        const newUser = await db.query(
          "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
          [email, done]
        );

        const userInfo = newUser.rows[0];
        req.login(userInfo, (err) => {
          if (err) {
            return res.status(500).json({ error: "Login failed after signup" });
          }
          return res.status(201).json({
            message: "Successfully  logged in",
          });
        });
      }
    });
  } catch (err) {
    console.error("Register error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const userLogin = (req, res) => {
  if (req.isAuthenticated()) {
    return res
      .status(200)
      .json({
        loggedIn: true,
        user: req.user,
        message: "User already logged in.",
      });
  }
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
    if (!user) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }

    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({ error: "Internal server error" });
      }
      return res.status(200).json({
        message: "Successfully  logged in",
      });
    });
  })(req, res);
};

const userLogout = (req, res) => {
  if (req.isAuthenticated()) {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ message: "Logout failed" });
      }
      return res.status(200).json({ message: "Logged out successfully" });
    });
  }
  return res.status(401).json({ message: "No user found. Unauthorized!" });
};

const userInfo = (req, res) => {
  if(!req.isAuthenticated()){
    return res.status(401).json({message: "No user found. Unauthorized!"})
  }

  return res.status(200).json({
    id: req.user.id,
    email: req.user.email,
  })
};

export { userRegister, userLogin, userLogout, userInfo };
