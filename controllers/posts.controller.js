const { default: mongoose } = require("mongoose");
const Post = require("../models/Post.model");

module.exports.postsController = mongoose.Schema = {
    addPosts: async (req, res) => {
        try {
            const { title, text, _userId } = req.body;
            await Post.create({ title, text, _userId })
            res.json('пост добавлен')
        } catch (error) {
            res.json(`${error.message}: Ошибка при добавлении поста`);
        }
    },
    getPosts: async (req, res) => {
        try {
            const posts = await Post.find();
            res.json(posts);
        } catch (error) {
            res.json(`${error.meessage}: Ошибка при выводе всех постов`);
        }
    },
    deletePosts: async (req, res) => {
        try {
            await Post.findByIdAndRemove(req.params.id);
            res.json('пост удален')
        } catch (error) {
            res.json(`${error.meessage}: Ошибка при удаления поста`);
        }
    },
    patchPosts: async (req, res) => {
        const { title, text, _userId } = req.body;
        try {
            await Post.findByIdAndUptade(req.params.id, {
                $set: { title, text },
            });
            res.json('пост изменен')
        } catch (error) {
            res.json(`${error.meessage}: Ошибка при изменения поста`);
        }
    },
    likeAndDislikePost: async (req, res) => {
        try {
          const post = await Post.findById(req.params.id);
          if (post.likes.includes(req.body.userId)) {
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.json("the post has been disliked");
          } else {
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.json("the post has been liked!");
          }
        } catch (err) {
          res.json(err);
        }
      },
}