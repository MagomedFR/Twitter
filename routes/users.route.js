const { Router } = require("express");
const { userController } = require("../controllers/users.controller");
const router = Router();

router.post("/users", userController.addUser);
router.patch("/users/:id", userController.patchSaves);
router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUserId)
router.patch("/users/name/:id", userController.patchUser);
router.delete("/users/:id", userController.deleteUser);

module.exports = router;