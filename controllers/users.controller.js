const { default: mongoose } = require("mongoose");
const User = require("../models/User.model");

module.exports.userController = mongoose.Schema = {
    getUsers: async (req, res) => {
        try {
            const users = await User.find()
            res.json(users);
        } catch (error) {
            res.json(`${error.message}: Ошибка при выводе пользователя`);
        }
    },
    addUser: async (req, res) => {
        try {
            const { name } = req.body;
            await User.create({ name });
            res.json("Пользователь создан");
        } catch (error) {
            res.json(`${error.message}: Ошибка при добавлении пользователя`);
        }
    },

    getUserId: (req, res) => {
        try{
            User.findById(req.params.id).then((data) => {
                res.json(data)
            })
        }catch (error) {
            res.json(`${error.message}: Ошибка при добавлении пользователя`);
        }
    },

    patchUser: async (req, res) => {
        const { name } = req.body;
        try {
            await User.findByAndUpdate(req.params.id, {
                $set: { name },
            });
        } catch (error) {
            res.json(`${error.message}: Ошибка при изменения пользователя`);
        }
    },
    deleteUser: async (req, res) => {
        try {
            await User.findByIdAndRemove(req.params.id)
            res.json('пользователь удален')
        } catch (error) {
            res.json(`${error.message}: Ошибка при удаления пользователя`);
        }
    },
    patchSaves: async (req, res) => {
        const data = await User.findByIdAndUpdate(req.params.id, {$push: {saved: req.body.saved}}).then((data) => {
            res.json(data)
        })
    }
}
