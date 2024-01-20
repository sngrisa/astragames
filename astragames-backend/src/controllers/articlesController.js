const { response } = require("express");
const Articles = require("../models/Article");

//Dar de alta a un Producto en Astra Games Shop
const postArticle = async (req, res = response) => {
  const { name } = req.body;
  try {
    const existingGame = await Articles.findOne({ name: name });
    if (existingGame) {
      return res.status(400).json({
        ok: false,
        msg: "Articulo ya existente con ese nombre en la base de datos",
      });
    }
    const dbArticle = new Articles(req.body);
    await dbArticle.save();
    return res.status(201).json({
      ok: true,
      msg: "Articulo guardado con éxito",
      dbArticle,
    });
  } catch (err) {
    return res.status(400).json({
      ok: false,
      msg: "No se ha podido dar de alta al Articulo, error en los datos",
    });
  }
};

//Consultar los productos registrados en Astra Games
const getArticles = (req, res = response) => {
  Articles.find({}).then((resp, err) => {
    return !err
      ? res.status(200).json({ msg: resp })
      : res.status(401).json({ ok: true, msg: err });
  });
};

//Consultar un producto registrado en Astra Games por el nombre
const getArticlesByName = async (req, res = response) => {
  const nameArticle = req.params.name;
  await Articles.find({ nameArticle: nameArticle }).then((resp, err) => {
    return !err
      ? res.status(201).json({ msg: resp })
      : res.status(401).json({ ok: true, msg: err });
  });
};

//Consultar productos por el id
const getArticleById = async (req, res = response) => {
  const { id } = req.params;
  Articles.findById({ _id: id }).then((resp, err) => {
    return !err
      ? res.status(200).json({ msg: resp })
      : res.status(401).json({ ok: true, msg: err });
  });
};

//Consultar productos por categoria
const getArticlesByCategory = async (req, res = response) => {
  const { category } = req.params;
  await Articles.find({ category: category }).then((resp, err) => {
    return !err
      ? res.status(200).json({ msg: resp })
      : res.status(401).json({ ok: true, msg: err });
  });
};

//Consultar productos por la marca
const getArticlesByBrand = async (req, res = response) => {
  const { brand } = req.params;
  await Articles.find({ brand: brand }).then((resp, err) => {
    return !err
      ? res.status(200).json({ msg: resp })
      : res.status(401).json({ ok: true, msg: err });
  });
};


//Consultar productos por el modelo
const getArticlesByModel = async (req, res = response) => {
  const { model } = req.params;
  await Articles.find({ model }).then((resp, err) => {
    return !err
      ? res.status(200).json({ msg: resp })
      : res.status(401).json({ ok: true, msg: err });
  });
};

//Eliminar un producto en Astra Games
const deleteArticle = async (req, res = response) => {
  const { id } = req.params;
  try {
    await Articles.findOneAndDelete({ _id: id }).then((resp, err) => {
      return !err
        ? res
            .status(200)
            .json({ msg: "Articulo eliminado exitosamente del sistema" })
        : res.status(401).json({ ok: false, msg: err });
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      msg: "Error eliminar el producto especificado, vuelvalo a intentar",
    });
  }
};

//Actualizar un juego en Astra Games
const updateArticle = async (req, res = response) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const existingName = await Articles.findOne({ name: name });
    if (existingName) {
      return res.status(401).json({
        ok: false,
        msg: "El nombre del producto ya se encuentra registrado en la base de datos de Astra Games",
      });
    }
    await Games.findByIdAndUpdate({ _id: id }, req.body).then((resp, err) => {
      return !err
        ? res.status(200).json({
            ok: true,
            msg: "Producto Actualizado en Astra Games con éxito",
          })
        : res.status(401).json({ ok: false, msg: err });
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      msg: "Error al actualizar el producto especificado, vuelvalo a intentar",
    });
  }
};

module.exports = {
  postArticle,
  getArticles,
  getArticlesByName,
  getArticleById,
  getArticlesByCategory,
  getArticlesByBrand,
  getArticlesByModel,
  updateArticle,
  deleteArticle,
};
