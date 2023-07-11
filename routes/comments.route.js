const { Router } = require("express");
const { commentsController } = require("../controllers/comments.controller");
const router = Router();

router.post("/comments", commentsController.addComments);
router.delete("/comments/:id", commentsController.deleteComments);
router.get("/comments/", commentsController.getComments);
router.patch("/comments/post/:id", commentsController.patchComments);

module.exports = router;