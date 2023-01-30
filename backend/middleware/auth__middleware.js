const Token_services = require("../services/Token_services");

module.exports = async (req, res, next) => {
  try {
    const { accessToken } = req.cookies;
    if (!accessToken) {
      throw new Error();
    }
    
    const userData = await Token_services.VerifyAccessToken(accessToken);
    // console.log(userData);
    if (!userData) {
        throw new Error();
      }

      req.user = userData
    next();
  } catch (error) {
    res.status(401).json({ message: "invalid  token" });
  }
};
