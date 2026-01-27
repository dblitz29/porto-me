// Redirect semua request ke homepage
module.exports = (req, res) => {
  res.statusCode = 301;
  res.setHeader("Location", "/");
  res.end();
};
