import express from "express";
const router = express.Router();
import rateLimit from 'express-rate-limit';
import { signupValidation, loginValidation } from "../Middlewares/AuthValidation.js";
import { login, signup } from "../Controllers/AuthController.js";

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: 'Too many login attempts, please try again later'
});

router.post("/login", authLimiter, loginValidation, login);
router.post("/signup", signupValidation, signup);

export default router;