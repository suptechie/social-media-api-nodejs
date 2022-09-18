import DeviceInfo from "./device-info/deviceInfo.js";
import User from "./user/user.js";
import Notification from "./notification/notification.js";
import Post from "./post/post.js";
import Comment from "./comment/comment.js";
import CommentLike from "./comment/commentLike.js";
import CommentReply from "./comment/commentReply.js";
import OTP from "./otp/otp.js";
import Tag from "./hashtag/tag.js";
import PostLike from "./post/postLike.js";
import Follower from "./user/follower.js";
import FollowRequest from "./notification/followRequest.js";
import ChatMessage from "./chat/chatMessage.js";

const models = {};

models.DeviceInfo = DeviceInfo;
models.User = User;
models.Comment = Comment;
models.CommentLike = CommentLike;
models.CommentReply = CommentReply;
models.OTP = OTP;
models.Tag = Tag;
models.Post = Post;
models.PostLike = PostLike;
models.Follower = Follower;
models.Notification = Notification;
models.FollowRequest = FollowRequest;
models.ChatMessage = ChatMessage;

export default models;
