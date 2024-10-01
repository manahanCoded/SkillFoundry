import { Strategy } from "passport-local";
import passport from "passport";
import db from "../Database/PGdatabse.js";
import bcrypt from "bcrypt"

passport.use(
  "local",
  new Strategy(
    { usernameField: "email", passwordField: "password" },
    async (username, password, done) => {
        try{

        const checkUser = await db.query("SELECT * FROM users WHERE email = $1", [username])

        if (checkUser.rowCount === 0) {
            return done(null, false, { message: 'Incorrect Email.' });
          }
        
        const user = checkUser.rows[0]
        const userPassword = user.password
        
        bcrypt.compare(password, userPassword, (err, hashed)=>{
            if(err){
                return done(null, false, {message: "Incorrect Password"})
            }
            return done(null, user)
        })

    }catch(err){
        console.error( err);
        return done(err, false)
    }

    }
  )
);


passport.serializeUser((user, done)=>{
    done(null, user.id)
})

passport.deserializeUser( async (userId, done)=>{
    try{
        const user = await db.query("SELECT * FROM users WHERE id = $1", [userId])
        if(user.rows.length < 1){
            throw new Error ("User Id does not exist")
        } 
        return done(null, user.rows[0])
    }catch(err){
        return done(err, null)
    }
})