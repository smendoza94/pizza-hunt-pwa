const router = require("express").Router();

const {
  getAllPizza,
  getPizzaById,
  createPizza,
  updatePizza,
  deletePizza,
} = require("../../controllers/pizza-controller");

// set up all GET and POST at /api/pizzas
router.router("/").get().post();

// set up GET one, PUT, and DELETE at /api/pizzas/:id
router.router("/:id").get().put().delete();

module.exports = router;
