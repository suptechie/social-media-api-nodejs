import catchAsyncError from "../../../helpers/catchAsyncError.js";
import ErrorHandler from "../../../helpers/errorHandler.js";
import models from "../../../models/index.js";

const getNotifications = catchAsyncError(async (req, res, next) => {
  const userId = req.user._id;

  if (!userId) {
    return next(new ErrorHandler("user not found", 404));
  }

  let currentPage = parseInt(req.query.page) || 1;
  let limit = parseInt(req.query.limit) || 3;

  const notifications = await models.Notification.find({ owner: userId })
    .select("-__v")
    .populate([
      {
        path: "owner",
        model: "User",
        select: [
          "_id",
          "fname",
          "lname",
          "email",
          "uname",
          "avatar",
          "profession",
          "accountType",
          "accountStatus",
          "isVerified",
        ],
      },
      {
        path: "user",
        model: "User",
        select: [
          "_id",
          "fname",
          "lname",
          "email",
          "uname",
          "avatar",
          "profession",
          "accountType",
          "accountStatus",
          "isVerified",
        ],
      },
    ])
    .sort({ createdAt: -1 });

  let totalPosts = notifications.length;
  let totalPages = Math.ceil(totalPosts / limit);

  if (currentPage < 1) {
    currentPage = 1;
  }

  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  let skip = (currentPage - 1) * limit;

  let prevPageIndex = null;
  let hasPrevPage = false;
  let prevPage = null;
  let nextPageIndex = null;
  let hasNextPage = false;
  let nextPage = null;

  if (currentPage < totalPages) {
    nextPageIndex = currentPage + 1;
    hasNextPage = true;
  }

  if (currentPage > 1) {
    prevPageIndex = currentPage - 1;
    hasPrevPage = true;
  }

  const baseUrl = `${req.protocol}://${req.get("host")}${
    req.originalUrl
  }`.split("?")[0];

  if (hasPrevPage) {
    prevPage = `${baseUrl}?page=${prevPageIndex}&limit=${limit}`;
  }

  if (hasNextPage) {
    nextPage = `${baseUrl}?page=${nextPageIndex}&limit=${limit}`;
  }

  const results = notifications.slice(skip, skip + limit);

  res.status(200).json({
    success: true,
    currentPage,
    totalPages,
    limit,
    hasPrevPage,
    prevPage,
    hasNextPage,
    nextPage,
    results,
  });
});

export default getNotifications;
