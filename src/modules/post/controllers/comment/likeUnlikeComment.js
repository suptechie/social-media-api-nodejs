import ResponseMessages from "../../../../contants/responseMessages.js";
import catchAsyncError from "../../../../helpers/catchAsyncError.js";
import ErrorHandler from "../../../../helpers/errorHandler.js";
import models from "../../../../models/index.js";
import utility from "../../../../utils/utility.js";

/// LIKE/UNLIKE COMMENT ///

const likeUnlikeComment = catchAsyncError(async (req, res, next) => {
  if (!req.query.id) {
    return next(
      new ErrorHandler(ResponseMessages.INVALID_QUERY_PARAMETERS, 400)
    );
  }

  const comment = await models.Comment.findById(req.query.id);

  if (!comment) {
    return next(new ErrorHandler(ResponseMessages.COMMENT_NOT_FOUND, 404));
  }

  const isLiked = await utility.checkIfCommentLiked(comment._id, req.user);

  if (isLiked) {
    await models.CommentLike.findOneAndDelete({ comment: comment._id, user: req.user._id });
    comment.likesCount--;

    await comment.save();

    res.status(200).json({
      success: true,
      message: ResponseMessages.COMMENT_UNLIKED,
    });
  } else {
    await models.CommentLike.create({ comment: comment._id, user: req.user._id });
    comment.likesCount++;

    const notification = await models.Notification.findOne({
      to: comment.owner,
      from: req.user._id,
      refId: comment._id,
    });

    const isCommentOwner = await utility.checkIfCommentOwner(comment._id, req.user);

    if (!notification && !isCommentOwner) {
      await models.Notification.create({
        to: comment.owner,
        from: req.user._id,
        body: "liked your comment",
        refId: comment._id,
        type: "commentLike",
      });

      await comment.save();

      res.status(200).json({
        success: true,
        message: ResponseMessages.COMMENT_LIKED,
      });

    }
  }
});

export default likeUnlikeComment;
