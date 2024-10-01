import { Router } from "express";

// Component imports
import { userRegister, userLogin, userLogout, userInfo } from "./controllers/User_Controller.mjs";

// Middleware Validators 
import { Validator_userLogin, Validator_userRegister } from "../Middleware/Validators.js";
const router = Router()


router.post("/register",  Validator_userRegister, userRegister)
router.post("/login", Validator_userLogin, userLogin)
router.get("/logout", userLogout)
router.get("/profile", userInfo )

export default router