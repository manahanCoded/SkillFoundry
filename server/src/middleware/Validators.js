import { checkSchema } from "express-validator";


const Validator_userRegister = checkSchema({
    email:{
        isEmail: {errorMessage: "Must be an email."},
        notEmpty: {errorMessage: "Must not be empty"}
    },
    password: {
        isLength:{
            options: {min: 6},
            errorMessage: "Password must not be lower than 6"
        }
    }
})


const Validator_userLogin = checkSchema({
    email:{
        isEmail: {errorMessage: "Must be an email."},
        notEmpty: {errorMessage: "Must not be empty"}
    },
    password:{
        isLength:{
            options: {min: 6},
            errorMessage: "Password must not be lower than 6"
        }
    }
})

export {Validator_userRegister, Validator_userLogin}
