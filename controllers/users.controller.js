const User = require("../models/User.model");

module.exports.userController = {
    getUsers: async (req, res) => {
        try {
            const users = await User.find();
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
    getUserId: async (req, res) => {
        try{
            const user = await User.findById(req.params.id);
            res.json(user);
        }catch (error) {
            res.json(`${error.message}: Ошибка при получении пользователя`);
        }
    },
    patchUser: async (req, res) => {
        const { name } = req.body;
        try {
            await User.findByIdAndUpdate(req.params.id, {
                $set: { name },
            });
            res.json("Пользователь изменен");
        } catch (error) {
            res.json(`${error.message}: Ошибка при изменении пользователя`);
        }
    },
    deleteUser: async (req, res) => {
        try {
            await User.findByIdAndRemove(req.params.id);
            res.json('Пользователь удален');
        } catch (error) {
            res.json(`${error.message}: Ошибка при удалении пользователя`);
        }
    },
    patchSaves: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {$push: {saved: req.body.saved}});
            res.json(user);
        } catch (error) {
            res.json({message: `Ошибка при добавлении сохраненного: ${error.message}`});
        }
    }
}