const jwt = require("jsonwebtoken");
const Referesh_model = require("../model/Referesh_model");

const accessTokenSecret = process.env.JWT_ACCESS_TOKEN_SECRETE;
const RefreshTokenSecret = process.env.JWT_REFERS_TOKEN_SECRETE;

class TokenServices {
  generateToken(payload) {
    const AccessToken = jwt.sign(payload, accessTokenSecret, {
      expiresIn: "1m",
    });
    const RefreshToken = jwt.sign(payload, RefreshTokenSecret, {
      expiresIn: "1y",
    });

    return { AccessToken, RefreshToken };
  }
  async StoreRefreshTOken(token, userId) {
    try {
      await Referesh_model.create({
        token,
        userId,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  async VerifyAccessToken(token) {
    return jwt.verify(token, accessTokenSecret);
  }

  async VerifyRefreshToken(refreshToken) {
    return jwt.verify(refreshToken, RefreshTokenSecret);
  }

  async findRefreshToken(userId, refreshToken) {
    try {
      return await Referesh_model.findOne({
        userId: userId,
        token: refreshToken,
      });
    } catch (error) {}
  }

  async updateRefreshToken(userId, refreshToken) {
    return await Referesh_model.updateOne(
      { userId: userId },
      { token: refreshToken }
    );
  }

  async removeToken(refreshToken) {
   return await Referesh_model.deleteOne({token: refreshToken});
  }
}

module.exports = new TokenServices();
