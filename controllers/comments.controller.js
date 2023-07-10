const { default: mongoose } = require("mongoose");
const Comment = require("../models/Comment.model");

module.exports.commentsController = {
    addComments: async (req, res) => {
        try {
            const { text, _userId, _postId } = req.body;
            await Comment.create({ text, _userId, _postId });
            res.json('комментарий добавлен');
        } catch (error) {
            res.json(`${error.message}: Ошибка при добавлении комментария`);
        }
    },

    getComments: async (req, res) => {
        try {
            const comments = await Comment.find();
            res.json(comments);
        } catch (error) {
            res.json(`${error.message}: Ошибка при выводе всех комментариев`);
        }
    },

    deleteComments: async (req, res) => {
        try {
            await Comment.findByIdAndRemove(req.params.id);
            res.json('комментарий удален');
        } catch (error) {
            res.json(`${error.message}: Ошибка при удалении комментария`);
        }
    },
    patchComments: async (req, res) => {
        const { text } = req.body;
        try {
            await Comment.findByIdAndUptade(req.params.id, {
                $set: { text }
            });
            res.json('комментарий удален');
        } catch (error) {
            res.json(`${error.message}: Ошибка при удалении комментария`);
        }
    }
};