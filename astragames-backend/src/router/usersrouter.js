const express = require("express");
const { check } = require("express-validator");
const {
  createUsers,
  updateUsers,
  deleteUsers,
  loginUsers,
  getUsers,
  validateToken,
  getUsersById,
  getUsersByEmail,
  getUsersByStatus,
  getUsersByUsername
} = require("../controllers/usersController");

const { validateFields } = require("../middlewares/validateFields");
const { validateJWT } = require("../middlewares/validateJWT");

const router = express.Router();

//Dar de alta a Usuarios

router.post(
  "/register",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña no puede ser menos de 6 digitos").isLength(
      6
    ),
    check(
      "username",
      "El username es obligatorio y debe contener mas de 3 digitos"
    ).isLength(3),
    validateFields,
  ],
  createUsers
);

//Loguear usuarios

router.post(
  "/login",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña no puede ser menos de 6 digitos").isLength(
      6
    ),
    validateFields,
  ],
  loginUsers
);

//Actualizar Usuarios

router.put(
  "/:id",
  [
    check("email", "El email es obligatorio").isEmail(),
    check(
      "El username es obligatorio y no puede tener menos de 3 digitos"
    ).isLength(3),
    check(
      "password",
      "La contraseña no puede tener menos de 6 digitos"
    ).isLength(6),
    validateFields,
  ],
  updateUsers
);

//Eliminar Usuarios

router.put(
  "/delete/:id",
  [check("id", "El id es obligatorio").isLength(3), validateFields],
  deleteUsers
);

//Getters de los usuarios

router.get("/", validateFields, getUsers);

router.get("/:id", validateFields, getUsersById);

router.get("/username", validateFields, getUsersByUsername);

router.get("/email", validateFields, getUsersByEmail);

router.get("/status", validateFields, getUsersByStatus);

//Validar tokens

router.get("/token", validateJWT, validateToken);

module.exports = router;
