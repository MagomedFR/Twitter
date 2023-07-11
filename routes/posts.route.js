const { Router } = require("express");
const { postsController } = require("../controllers/posts.controller");
const router = Router();

router.post("/posts", postsController.addPosts);
router.patch("/posts/:id", postsController.likeAndDislikePost);
router.delete("/posts/:id", postsController.deletePosts);
router.patch("/posts/text/:id", postsController.patchPosts);

module.exports = router;