const express = require("express");
const { check } = require("express-validator");

const {
  deleteGame,
  postGame,
  updateGame,
  getGames,
  getGameByName,
  getGameByGenre,
  getGameByYear,
  getGameByPublisher,
  getGameById,
} = require("../controllers/gamesController");

const { validateFields } = require("../middlewares/validateFields");

const router = express.Router();

//Getter de Games

router.get("/", validateFields, getGames);

router.get("/:id", validateFields, getGameById);

router.get("/name/:name", validateFields, getGameByName);

router.get("/genre/:genre", validateFields, getGameByGenre);

router.get("/year/:year", validateFields, getGameByYear);

router.get("/publisher/:publisher", validateFields, getGameByPublisher);

//Dar de alta a Games

router.post(
  "/",
  [
    check(
      "name",
      "El nombre del juego es obligatorio y no puede tener menos de 3 caracteres"
    ).isLength(3),
  ],
  postGame
);

//Actualizar Games

router.put(
  "/:id",
  [
    check(
      "name",
      "El nombre del juego es obligatorio y no puede tener menos de 3 caracteres"
    ).isLength(3),
    check("id", "El id del juego es obligatorio").isLength(3),
  ],
  validateFields,
  updateGame
);

//Eliminar Games
router.delete(
  "/:id",
  [check("id", "El id del juego es obligatorio").isLength(3)],
  validateFields,
  deleteGame
);

module.exports = router;
