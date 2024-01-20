const express = require("express");
const { check } = require("express-validator");

const { getCategories, getCategoryById, getCategoryByName, postCategory, updateCategory, deleteCategory } = require("../controllers/categoriesController");

const { validateFields } = require("../middlewares/validateFields");

const router = express.Router();

//Getters de Categorias

router.get("/", validateFields, getCategories);

router.get("/:id", validateFields, getCategoryById);

router.get("/name/:name", validateFields, getCategoryByName);

//Dar de alta a Categoria

router.post(
  "/",
  [
    check(
      "name",
      "El nombre de la categoria es obligatorio y no puede tener menos de 3 caracteres"
    ).isLength(3),
  ],
  postCategory
);

//Actualizar Categoria

router.put(
  "/:id",
  [
    check(
      "name",
      "El nombre de la categoria es obligatorio y no puede tener menos de 3 caracteres"
    ).isLength(3),
    check("id", "El id de la categoria es obligatorio").isLength(3),
  ],
  validateFields,
  updateCategory
);

//Eliminar Categoria
router.delete(
  "/:id",
  [check("id", "El id de la categoria es obligatorio").isLength(3)],
  validateFields,
  deleteCategory
);

module.exports = router;