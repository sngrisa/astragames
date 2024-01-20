const express = require("express");
const { check } = require("express-validator");

const {
  getArticles,
  getArticleById,
  getArticlesByName,
  postArticle,
  updateArticle,
  deleteArticle,
  getArticlesByCategory,
  getArticlesByBrand,
  getArticlesByModel,
} = require("../controllers/articlesController");

const { validateFields } = require("../middlewares/validateFields");

const router = express.Router();

//Getters de productos

router.get("/", validateFields, getArticles);

router.get("/:id", validateFields, getArticleById);

router.get("/name/:name", validateFields, getArticlesByName);

router.get("/category/:category", validateFields, getArticlesByCategory);

router.get("/brand/:brand", validateFields, getArticlesByBrand);

router.get("/model/:model", validateFields, getArticlesByModel);

//Dar de alta a producto

router.post(
  "/",
  [
    check(
      "name",
      "El nombre del producto es obligatorio y no puede tener menos de 3 caracteres"
    ).isLength(3),
  ],
  postArticle
);

//Actualizar producto

router.put(
  "/:id",
  [
    check(
      "name",
      "El nombre del producto es obligatorio y no puede tener menos de 3 caracteres"
    ).isLength(3),
    check("id", "El id del producto es obligatorio").isLength(3),
  ],
  validateFields,
  updateArticle
);

//Eliminar producto
router.delete(
  "/:id",
  [check("id", "El id del producto es obligatorio").isLength(3)],
  validateFields,
  deleteArticle
);

module.exports = router;
