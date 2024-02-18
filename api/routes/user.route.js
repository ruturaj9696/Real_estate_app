import express from "express";
import { test, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyuser.js";

const router = express.Router();

router.get("/test", test);
// Here first verifytoken will authenticate the user and then user will be able to update the unformation
router.put('/update/:userId',verifyToken, updateUser);

export default router;
