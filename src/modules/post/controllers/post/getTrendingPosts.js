import catchAsyncError from "../../../../helpers/catchAsyncError.js";
import models from "../../../../models/index.js";
import utility from "../../../../utils/utility.js";

/// GET TRENDING POSTS ///

const getTrendingPosts = catchAsyncError(async (req, res, next) => {
    const currentTimestamp = new Date().getTime();
    const posts = await models.Post.find({
        visibility: "public",
        isArchived: false,
        owner: { $ne: req.user._id },
        createdAt: {
            $gte: currentTimestamp - 30 * 24 * 60 * 60 * 1000,
        },
    }).select("_id").sort({ createdAt: -1 });

    let currentPage = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 20;

    let totalPosts = posts.length;
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

    const baseUrl = `${req.protocol}://${req.get("host")}${req.originalUrl
        }`.split("?")[0];

    if (hasPrevPage) {
        prevPage = `${baseUrl}?page=${prevPageIndex}&limit=${limit}`;
    }

    if (hasNextPage) {
        nextPage = `${baseUrl}?page=${nextPageIndex}&limit=${limit}`;
    }

    const slicedPosts = posts.slice(skip, skip + limit);

    const results = [];

    for (let post of slicedPosts) {
        const postData = await utility.getPostData(post._id, req.user);

        if (postData) {
            results.push(postData);
        }
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

export default getTrendingPosts;
