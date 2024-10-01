import express from "express"
import bodyParser from "body-parser"
import session from "express-session"
import passport from "passport"
import env from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
// Component imports
import User_Routes from "./src/routes/User_Routes.mjs"

const app = express()
const port = 5000

env.config()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieParser())

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}))

app.use(session({
    name: "WEB3Education",
    secret: process.env.Session_secret,
    saveUninitialized: false,
    resave: false,
    cookie: {sercure: process.env.Secure_cookie , maxAge : 60000 * 60, signed: true}
}))

app.use(passport.initialize())
app.use(passport.session())



app.use("/api/user", User_Routes)



app.listen(port, ()=> {console.log(`Port ${port} is now runnning...`)})