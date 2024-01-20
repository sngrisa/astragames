const { response } = require("express");
const Users = require("./../models/Users");
const bcrypt = require("bcryptjs");
const { generateJWT } = require("../helpers/jwt");

//Crear un usuario en Astra Games
const createUsers = async (req, res = response) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    let existingUserByEmail = await Users.findOne({ email: email });

    let existingUserByUsername = await Users.findOne({ username: username });

    if (existingUserByUsername) {
      return res.status(400).json({
        ok: false,
        msg: "El username ya se encuentra registrado en Astra Games, pruebe con otro!!!!",
      });
    }

    if (existingUserByEmail) {
      return res.status(400).json({
        ok: false,
        msg: "El email ya se encuentra registrado en Astra Games, pruebe con otro!!!!",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        ok: false,
        msg: "La contraseñas no coinciden, verifique nuevamente!!!!",
      });
    }

    const dbUser = new Users(req.body);
    const bcryptSalts = bcrypt.genSaltSync(10);
    dbUser.status = true;
    dbUser.password = bcrypt.hashSync(password, bcryptSalts);
    const token = generateJWT(dbUser.id, dbUser.email);

    await dbUser.save();

    return res.status(200).json({
      ok: true,
      msg: "El usuario se ha registrado correctamente en la base de Astra Games",
      _idUser: dbUser.id,
      email: dbUser.email,
      token,
    });
  } catch (err) {
    return res.json(500).json({
      ok: false,
      msg: "Error al crear un usuario",
    });
  }
}

//Loguear un usuario en Astra Games
const loginUsers = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const dbUser = await Users.findOne({ email });
    const validPassword = bcrypt.compareSync(password, dbUser.password);

    if (!dbUser) {
      return res.status(400).json({
        ok: false,
        msg: "No se encuentra el usuario registrado en la base de datos de Astra Games",
      });
    }

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Contraseña incorrecta",
      });
    }

    const token = await generateJWT(dbUser.id, dbUser.email);

    return res.status(200).json({
      ok: true,
      msg: "Te has logueado correctamente en el sistema de Astra Games",
      _idUser: dbUser.id,
      email: dbUser.email,
      token,
    });
  } catch (err) {
    return res.json(500).json({
      ok: false,
      msg: "Error al loguearse, vuelvalo a intentar",
    });
  }
}

//Obtener un usuario por el Id
const getUsersById = async (req, res = response) => {
  const _id = req.params.id;
  await Users.findById({ _id }).then((resp, err) => {
    return !err
      ? res.status(200).json({ msg: resp })
      : res.status(401).json({ ok: true, msg: err });
  });
}

//Consultar usuarios por el email
const getUsersByEmail = async (req, res = response) => {
  const { email } = req.params;
  await Users.find({ email: email }).then((resp, err) => {
    return !err
      ? res.status(200).json({ msg: resp })
      : res.status(401).json({ ok: true, msg: err });
  });
};

//Obtener los usuarios por el estado
const getUsersByStatus = async (req, res = response) => {
  const { status } = req.params;
  await Users.find({ status: status }).then((resp, err) => {
    return !err
      ? res.status(200).json({ msg: resp })
      : res.status(401).json({ ok: true, msg: err });
  });
};

//Consultar usuarios por el username
const getUsersByUsername = async (req, res = response) => {
  const { publisher } = req.params;
  await Users.find({ publisher }).then((resp, err) => {
    return !err
      ? res.status(200).json({ msg: resp })
      : res.status(401).json({ ok: true, msg: err });
  });
};


//Obtener listado de usuarios registrados en el sistema
const getUsers = (req, res = response) => {
  Users.find({}).then((resp, err) => {
    return !err
      ? res.status(200).json({ msg: resp })
      : res.status(401).json({ ok: true, msg: err });
  });
};


//Validar un token de un inicio de sesion
const validateToken = async (req, res = response) => {
  const { _idUser, email } = req;

  const token = generateJWT(_idUser, email);

  return res.status(200).json({
    ok: true,
    msg: "Token revalidado correctamente",
    _idUser,
    email,
    token,
  });
}


//Actualizar usuarios registados en la base de datos
const updateUsers = async (req, res = response) => {
  const { email, username, password } = req.body;

  try {
    const dbUser = await Users.findById();

    let existingUserByEmail = Users.findOne({ email: email });
    let existingUserByUsername = Users.findOne({ username: username });

    if (existingUserByUsername) {
      return res.status(400).json({
        ok: false,
        msg: "El username ya se encuentra registrado en Astra Games, pruebe con otro!!!!",
      });
    }

    if (existingUserByEmail) {
      return res.status(400).json({
        ok: false,
        msg: "El email ya se encuentra registrado en Astra Games, pruebe con otro!!!!",
      });
    }

    const bcryptSalts = bcrypt.genSaltSync(10);
    dbUser.username = username;
    dbUser.email = email;
    dbUser.password = bcrypt.hashSync(password, bcryptSalts);

    const token = generateJWT(dbUser.id, dbUser.email);

    await dbUser.save();

    return res.status(200).json({
      ok: true,
      msg: "El usuario se actualizó con éxito",
      dbUser,
      token,
    });
  } catch (err) {
    return res.status(400).json({
      ok: false,
      msg: "Error al actualizar el usuario",
    });
  }
}


//Eliminar usuarios en la base de datos
const deleteUsers = async (req, res = response) => {
  const { idUser } = req.body;

  try {
    const dbUser = await Users.findById({ _idUser: idUser });
    dbUser.status = false;
    dbUser.save();

    return res.status(200).json({
      ok: true,
      msg: "Usuario dado de baja correctamente",
    });
  } catch (err) {
    return res.status(400).json({
      ok: false,
      msg: "Error al eliminar el usuario",
    });
  }
}

module.exports = {
  createUsers,
  loginUsers,
  getUsers,
  validateToken,
  updateUsers,
  deleteUsers,
  getUsersById,
  getUsersByEmail,
  getUsersByUsername,
  getUsersByStatus
};
