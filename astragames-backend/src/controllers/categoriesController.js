const { response } = require("express");
const Category = require("../models/Category");

const postCategory = async (req, res = response) => {
  const { name } = req.body;
  try {
    const existingCategory = await Category.findOne({ name: name });
    if (existingCategory) {return res.status(400).json({ok: false,msg: "Categoria ya existente con ese nombre en la base de datos",});}
    const dbCategory = new Category(req.body);
    await dbCategory.save();
    return res.status(201).json({
      ok: true,
      msg: "Categoria guardada con éxito",
      dbCategory,
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      msg: "No se ha podido dar de alta a la categoria error en los datos",
    });
  }
};

//Consultar los juegos registrados en Astra Games
const getCategories = (req, res = response) => {
  Category.find({}).then((resp, err) => {
    return !err
      ? res.status(200).json({ msg: resp })
      : res.status(401).json({ ok: true, msg: err });
  });
};

//Consultar una categoria registrada en Astra Games por su nombre
const getCategoryByName = async (req, res = response) => {
  const name = req.params.name;
  await Category.find({ name: name }).then((resp, err) => {
    return !err
      ? res.status(201).json({ msg: resp })
      : res.status(401).json({ ok: true, msg: err });
  });
};

//Consultar categoria por el id
const getCategoryById = async (req, res = response) => {
  const { id } = req.params;
  Category.findById({ _id: id }).then((resp, err) => {
    return !err
      ? res.status(200).json({ msg: resp })
      : res.status(401).json({ ok: true, msg: err });
  });
};

//Eliminar una categoria en Astra Games
const deleteCategory = async (req, res = response) => {
  const { id } = req.params;
  try {
    await Category.findOneAndDelete({ _id: id }).then((resp, err) => {
      return !err
        ? res
            .status(200)
            .json({ msg: "Categoria eliminada exitosamente del sistema" })
        : res.status(401).json({ ok: false, msg: err });
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      msg: "Error eliminar la categoria especificada, vuelvalo a intentar otra vez",
    });
  }
};

//Actualizar un juego en Astra Games
const updateCategory = async (req, res = response) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const existingName = await Category.findOne({ name: name });
    if (existingName) {return res.status(401).json({ok: false,msg: "El nombre de la categoria ya se encuentra registrada en la base de datos de Astra Games",});
    }
    await Category.findByIdAndUpdate({ _id: id }, req.body).then(
      (resp, err) => {
        return !err
          ? res.status(200).json({
              ok: true,
              msg: "Categoria Actualizada en Astra Games con éxito",
            })
          : res.status(401).json({ ok: false, msg: err });
      }
    );
  } catch (err) {
    return res.status(500).json({
      ok: false,
      msg: "Error al actualizar la categoria especificada, vuelvalo a intentar",
    });
  }
};

module.exports = {
  deleteCategory,
  postCategory,
  getCategoryById,
  getCategoryByName,
  getCategories,
  updateCategory,
};
