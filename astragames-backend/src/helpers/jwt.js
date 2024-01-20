const jwt = require("jsonwebtoken");

const generateJWT = (_idUser, email) => {
  const secret_jwt = "AsTrA GaMeS";

  const payload = {
    _idUser,
    email,
  };

  return new Promise((resolve, reject) => {
    return jwt.sign(
      payload,
      secret_jwt,
      {
        expiresIn: "12h",
      },
      (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = { generateJWT };
