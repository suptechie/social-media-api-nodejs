const express = require("express");
const {
    createPost,
    likeAndUnlikePost,
    deletePost,
    getFollowingPost,
    updatePost,
    getPostDetails
} = require("../controllers/PostController");
const { isAuthenticatedUser } = require("../middlewares/auth");

const router = express.Router();


// Routes
router.route("/post/create").post(isAuthenticatedUser, createPost);

router.route("/post/:id")
    .get(isAuthenticatedUser, getPostDetails)
    .put(isAuthenticatedUser, updatePost)
    .delete(isAuthenticatedUser, deletePost);

router.route("/post/like/:id")
    .get(isAuthenticatedUser, likeAndUnlikePost)

router.route("/posts").get(isAuthenticatedUser, getFollowingPost);


module.exports = router;