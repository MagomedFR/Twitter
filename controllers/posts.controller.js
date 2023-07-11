const Post = require("../models/Post.model");

module.exports.postsController = {
    addPosts: async (req, res) => {
        try {
            const { title, text, _userId } = req.body;
            await Post.create({ title, text, _userId });
            res.json('пост добавлен');
        } catch (error) {
            res.json(`${error.message}: Ошибка при добавлении поста`);
        }
    },
    getPosts: async (req, res) => {
        try {
            const posts = await Post.find();
            res.json(posts);
        } catch (error) {
            res.json(`${error.message}: Ошибка при выводе всех постов`);
        }
    },
    deletePosts: async (req, res) => {
        try {
            await Post.findByIdAndRemove(req.params.id);
            res.json('пост удален');
        } catch (error) {
            res.json(`${error.message}: Ошибка при удалении поста`);
        }
    },
    patchPosts: async (req, res) => {
        const { title, text, _userId } = req.body;
        try {
            await Post.findByIdAndUpdate(req.params.id, {
                $set: { title, text },
            });
            res.json('пост изменен');
        } catch (error) {
            res.json(`${error.message}: Ошибка при изменении поста`);
        }
    },
    likeAndDislikePost: async (req, res) => {
        try {
            const post = await Post.findById(req.params.id);
            if (post.likes.includes(req.body.userId)) {
                await post.updateOne({ $pull: { _likes: req.body.userId } });
                res.json("the post has been disliked");
            } else {
                await post.updateOne({ $push: { _likes: req.body.userId } });
                res.json("the post has been liked!");
            }
        } catch (error) {
            res.json(error);
        }
    },
};