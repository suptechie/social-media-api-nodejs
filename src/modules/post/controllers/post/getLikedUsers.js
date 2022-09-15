import ResponseMessages from "../../../../contants/responseMessages.js";
import catchAsyncError from "../../../../helpers/catchAsyncError.js";
import ErrorHandler from "../../../../helpers/errorHandler.js";
import models from "../../../../models/index.js";
import utility from "../../../../utils/utility.js";

const getLikedUsers = catchAsyncError(async (req, res, next) => {
    if (!req.query.id) {
        return next(new ErrorHandler(ResponseMessages.INVALID_QUERY_PARAMETERS, 400));
    }

    const postLikes = await models.PostLike.find({ post: req.query.id })
        .sort({ createdAt: -1 });

    let currentPage = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 10;

    let totalLikes = postLikes.length;
    let totalPages = Math.ceil(totalLikes / limit);

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

    const baseUrl = `${req.protocol}://${req.get("host")}${req.originalUrl
        }`.split("?")[0];

    if (hasPrevPage) {
        prevPage = `${baseUrl}?page=${prevPageIndex}&limit=${limit}`;
    }

    if (hasNextPage) {
        nextPage = `${baseUrl}?page=${nextPageIndex}&limit=${limit}`;
    }

    const slicedPostLikes = postLikes.slice(skip, skip + limit);

    const results = [];

    for (let like of slicedPostLikes) {
        const postLikeData = await utility.getPostLikeData(like._id, req.user);

        results.push(postLikeData);
    }

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

export default getLikedUsers;
