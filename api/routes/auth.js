import { Router } from "express";
import { AuthController } from "../controllers/auth.js";

export const authRouter = Router()

authRouter.patch('/register', AuthController.register)
