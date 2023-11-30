import express from 'express';
import {updateUser, deleteUser, getUser, followUser, unFollowUser,getFriends} from '../controllers/userControllers.js'


const userRouter = express.Router()


 // update user

userRouter.put("/:id", updateUser)

// delete 

userRouter.delete("/:id", deleteUser)

// get a user

userRouter.get("/", getUser)

// getFriends


userRouter.get("/friends/:userId" , getFriends)

// follow user

userRouter.put("/:id/follow", followUser)


// unfollow

userRouter.put("/:id/unfollow", unFollowUser)

// get all user

export { userRouter }