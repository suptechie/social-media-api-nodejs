import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import cron from "node-cron";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import utility from "./utils/utility.js";
// import models from "./models/index.js";

export const runApp = () => {
  const app = express();

  // Middlewares
  app.use(
    cors({
      origin: "*",
      methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
      credentials: true,
      exposedHeaders: ["x-auth-token"],
    })
  );
  app.use(helmet());
  app.use(compression());
  app.use(express.json({ limit: "100mb" }));
  app.use(express.urlencoded({ extended: true }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // Schedule a task
  cron.schedule("59 23 * * *", () => {
    console.log("[cron]: task running every day at 11:59 PM");
    utility.deleteExpiredOTPs();
  });

  // (async () => {
  //   const users = await models.User.find();
  //   console.log(users.length);
  //   for (let user of users) {
  //     // await models.Post.updateOne({ _id: post._id }, { $unset: { newLikes: 0 } });
  //     // console.log("done");

  //     // user.accountPrivacy = user.accountType;
  //     // await user.save();

  //     // await models.User.updateOne({ _id: user._id }, {
  //     //   $unset: {
  //     //     newFollowers: 0, newFollowings: 0
  //     //   }
  //     // });

  //     //let postLikes = post.newLikes;
  //     // console.log(postLikes);
  //     // let postComments = post.comments;
  //     // let postLikesCount = postLikes.length;
  //     // let postCommentsCount = postComments.length;

  //     // let newFollowers = user.followers;
  //     // let newFollowing = user.following;

  //     // if (newFollowers.length > 0) {
  //     //   for (let newFollower of newFollowers) {
  //     //     user.newFollowers.push({
  //     //       user: newFollower,
  //     //     });
  //     //   }
  //     // }

  //     // if (newFollowing.length > 0) {
  //     //   for (let item of newFollowing) {
  //     //     user.newFollowings.push({
  //     //       user: item,
  //     //     });
  //     //   }
  //     // }

  //     // user.followers = user.newFollowers;
  //     // user.following = user.newFollowings;

  //     // let postsCount = user.posts.length;
  //     // user.postsCount = postsCount;

  //     //await user.save();

  //     //console.log(newFollowers)


  //     // user.followersCount = followersCount;
  //     // user.newF = followingCount;

  //     // await user.save();

  //     // for (let like of postLikes) {
  //     //   console.log(like);
  //     //   post.newLikes1.push({
  //     //     likedBy: like.likedBy,
  //     //     likedAt: like.likedAt,
  //     //   });
  //     // }
  //     // let user = await models.User.findById(like.likedBy);
  //     // user.likes.push(post._id);
  //     // let postNewLikes = post.newLikes1;
  //     // post.likes = postNewLikes;
  //     // await post.save();

  //     // post.likesCount = postLikesCount;
  //     // post.commentsCount = postCommentsCount;
  //     // await post.save();
  //   }
  //   console.log("operation done");
  // })();

  // Index Route
  app.route("/").get(function (req, res) {
    res.status(200).json({
      success: true,
      message: "server is up and running",
    });
  });

  return app;
};

export const closeApp = (app) => {
  // Middleware for Errors
  app.use(errorMiddleware);
  app.use("*", (req, res, next) => {
    res.status(404).json({
      success: false,
      message: "api endpoint not found",
    });
  });
};
