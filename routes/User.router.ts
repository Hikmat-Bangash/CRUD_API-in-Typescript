import express from "express";
import { CreateUser, deleteUser, GetSingleUser, GettingUsers, UpdateUser } from "../controller/User.controller";

const UserRouter = express.Router();

UserRouter.post("/",CreateUser )
UserRouter.get("/", GettingUsers)
UserRouter.get("/:id", GetSingleUser)
UserRouter.put("/:id", UpdateUser)
UserRouter.delete("/:id", deleteUser)


export default UserRouter

// find 