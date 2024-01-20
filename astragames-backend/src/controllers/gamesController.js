const { response } = require("express");
const Games = require("../models/Games");

//Dar de alta a un Juego en Astra Games
const postGame = async (req, res = response) => {
  const { name } = req.body;
  try {
    const existingGame = await Games.findOne({ name: name });
    if (existingGame) {
      return res.status(400).json({
        ok: false,
        msg: "Juego ya existente con ese nombre en la base de datos",
      });
    }
    const dbGame = new Games(req.body);
    await dbGame.save();
    return res.status(201).json({
      ok: true,
      msg: "Juego guardado con éxito",
      dbGame,
    });
  } catch (err) {
    return res.status(400).json({
      ok: false,
      msg: "No se ha podido dar de alta al juego, error en los datos",
    });
  }
};

//Consultar los juegos registrados en Astra Games
const getGames = (req, res = response) => {
  Games.find({}).then((resp, err) => {
    return !err
      ? res.status(200).json({ msg: resp })
      : res.status(401).json({ ok: true, msg: err });
  });
};

//Consultar un juego registrado en Astra Games
const getGameByName = async (req, res = response) => {
  const name = req.params.name;
  await Games.find({ name: name }).then((resp, err) => {
    return !err
      ? res.status(201).json({ msg: resp })
      : res.status(401).json({ ok: true, msg: err });
  });
};

//Consultar juegos por el id
const getGameById = async (req, res = response) => {
  const { id } = req.params;
  Games.findById({ _id: id }).then((resp, err) => {
    return !err
      ? res.status(200).json({ msg: resp })
      : res.status(401).json({ ok: true, msg: err });
  });
};

//Consultar juegos por el genero
const getGameByGenre = async (req, res = response) => {
  const { genre } = req.params;
  await Games.find({ genre: genre }).then((resp, err) => {
    return !err
      ? res.status(200).json({ msg: resp })
      : res.status(401).json({ ok: true, msg: err });
  });
};

//Consultar juegos por el año
const getGameByYear = async (req, res = response) => {
  const { year } = req.params;
  await Games.find({ year: year }).then((resp, err) => {
    return !err
      ? res.status(200).json({ msg: resp })
      : res.status(401).json({ ok: true, msg: err });
  });
};

//Consultar juegos por el desarrollador
const getGameByPublisher = async (req, res = response) => {
  const { publisher } = req.params;
  await Games.find({ publisher }).then((resp, err) => {
    return !err
      ? res.status(200).json({ msg: resp })
      : res.status(401).json({ ok: true, msg: err });
  });
};

//Eliminar un juego en Astra Games
const deleteGame = async (req, res = response) => {
  const { id } = req.params;
  try {
    await Games.findOneAndDelete({ _id: id }).then((resp, err) => {
      return !err
        ? res
            .status(200)
            .json({ msg: "Juego eliminado exitosamente del sistema" })
        : res.status(401).json({ ok: false, msg: err });
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      msg: "Error eliminar el videojuego especificado, vuelvalo a intentar",
    });
  }
};

//Actualizar un juego en Astra Games
const updateGame = async (req, res = response) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const existingName = await Games.findOne({ name: name });
    if (existingName) {
      return res.status(401).json({
        ok: false,
        msg: "El nombre del juego ya se encuentra registrado en la base de datos de Astra Games",
      });
    }
    await Games.findByIdAndUpdate({ _id: id }, req.body).then((resp, err) => {
      return !err
        ? res
            .status(200)
            .json({
              ok: true,
              msg: "Juego Actualizado en Astra Games con éxito",
            })
        : res.status(401).json({ ok: false, msg: err });
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      msg: "Error al actualizar el videojuego especificado, vuelvalo a intentar",
    });
  }
};

module.exports = {
  postGame,
  getGameByName,
  deleteGame,
  updateGame,
  getGames,
  getGameByGenre,
  getGameByPublisher,
  getGameByYear,
  getGameById,
};
