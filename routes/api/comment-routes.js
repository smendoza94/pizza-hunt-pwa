const router = require("express").Router();
const {
  addComment,
  removeComment,
  addReply,
  removeReply,
} = require("../../controllers/comment-controller");

// /api/comments/<pizzaId>
router.route("/:pizzaId").post(addComment);

// /api/comments/<pizzaId>/<commentId>
router.route("/:pizzaId/:commentId").delete(removeComment);

// replys are part of the comment schema, therefore updates, not delete
// PUT route for add reply /api/comments/
router.route("/:pizzaId/:commentId").put(addReply).delete(removeComment);

// DELETE route to removeReply
router.route("/:pizzaId/:commentId/:replyId").delete(removeReply);

module.exports = router;
