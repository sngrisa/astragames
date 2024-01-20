const { response } = require("express");

const getRoutePrivate = (req, res = response) => {
  try {
  } catch (err) {
    return res.status(404).json({
      ok: false,
      message: "Ruta privada",
    });
  }
};

module.exports = { getRoutePrivate };
