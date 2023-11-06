import express from 'express';
import { createPost, updatePost, deletePost ,likePost ,getPost, timelinePost,getUsersAllPost} from '../controllers/postControllers.js';

const postsRouter = express.Router()



// Create a post

postsRouter.post("/", createPost)

// update a post

postsRouter.put("/:id", updatePost)

// delete a post

postsRouter.delete("/:id", deletePost)

// like a post

postsRouter.put("/:id/like", likePost)

// get a post

postsRouter.get("/:id", getPost)

// get timeline posts

postsRouter.get("/timeline/:userId", timelinePost)

// get User's All Post

postsRouter.get("/profile/:username", getUsersAllPost)

export { postsRouter }