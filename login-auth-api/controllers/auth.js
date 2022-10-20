const login = (req, res) => {
  res.send("Login Post");
};

const register = (req, res) => {
  res.send("Register Post");
};

module.exports = {
  login,
  register,
};
