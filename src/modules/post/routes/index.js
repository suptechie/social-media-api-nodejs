import { Router } from "express";
import multerMiddleware from "../../../middlewares/multer.js";
import authMiddleware from "../../../middlewares/auth.js";
import postController from "../controllers/index.js";

const postRouter = Router();

const isAuthenticatedUser = authMiddleware.isAuthenticatedUser;

// Authenticated Routes -------------------------------------------------------

postRouter
  .route("/create-post")
  .post(
    multerMiddleware.array("mediaFiles"),
    isAuthenticatedUser,
    postController.createNewPost
  );

postRouter
  .route("/get-posts")
  .get(isAuthenticatedUser, postController.getPosts);

postRouter
  .route("/like-post")
  .get(isAuthenticatedUser, postController.likeUnlikePost);

postRouter
  .route("/post")
  .get(isAuthenticatedUser, postController.getPostDetails)
  .delete(isAuthenticatedUser, postController.deletePost);
// .put(isAuthenticatedUser, updatePost)

/// COMMENTS ///

postRouter
  .route("/add-comment")
  .post(isAuthenticatedUser, postController.addComment);

postRouter
  .route("/get-comments")
  .get(isAuthenticatedUser, postController.getComments);

postRouter
  .route("/like-comment")
  .get(isAuthenticatedUser, postController.likeUnlikeComment);

postRouter
  .route("/delete-comment")
  .delete(isAuthenticatedUser, postController.deleteComment);

export default postRouter;
