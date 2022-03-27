import mongoose from 'mongoose';


const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },

    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },

    post: {
        type: mongoose.Types.ObjectId,
        ref: "Post"
    },

    likes: [
        {
            type: mongoose.Types.ObjectId,
            ref: "User"
        }
    ],

    createdAt: {
        type: Date,
        default: Date.now
    }
})


commentSchema.index({ user: true })
const Comment = mongoose.model("Comment", commentSchema);

export default Comment;