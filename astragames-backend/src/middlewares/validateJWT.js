const { response } = require("express");
const jwt = require("jsonwebtoken");

const validateJWT = (req, res = response, next) => {
  const token = req.header("x-token");
  const secret_jwt = "AsTrA GaMeS";

  if (!token) {
    return res.status(403).json({
      ok: false,
      msg: "Token no valido",
    });
  }

  try {
    const { email, _idUser } = jwt.verify(token, secret_jwt);

    req._idUser = _idUser;
    req.email = email;

    return res.status(201).json({
      ok: true,
      msg: "Token validado correctamente",
      _idUser: _idUser,
      email: email,
      token,
    });
  } catch (err) {
    return res.status(401).json({
      ok: false,
      msg: "Token no valido, vuelvalo a intentar",
    });
  }
  
  next();
};

module.exports = { validateJWT };
