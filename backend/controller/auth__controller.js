const UserDto = require("../dtos/user__dtos");
const hash_Services = require("../services/hash_Services");
const Otp_Services = require("../services/Otp_Services");
const Token_services = require("../services/Token_services");
const User_Services = require("../services/User_Services");

class AuthController {
  async sendOtp(req, res) {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({ message: "please enter a phone number" });
    }

    const otp = await Otp_Services.generateOtp();

    const ttl = 1000 * 60 * 2;
    const expires = Date.now() + ttl;
    const data = `${phone}.${otp}.${expires}`;
    const hash = hash_Services.hashOtp(data);

    try {
      // await Otp_Services.sendBySms(phone, otp);

      return res.json({
        hash: `${hash}.${expires}`,
        phone,
        otp,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "message sending failed" });
    }
    return res.status(200).send({ hash });
  }

  async verifyOtp(req, res) {
    const { otp, hash, phone } = req.body;
    if (!otp || !hash || !phone) {
    return res.status(400).json({ message: "All fields are required" });
    }

    const [hashedotp, expires] = hash.split(".");
    if (Date.now() > +expires) {
    return res.status(400).json({ message: "otp expired" });
    }

    const data = `${phone}.${otp}.${expires}`;

    const isValid = Otp_Services.verifyOtp(hashedotp, data);

    if (!isValid) {
    return res.status(400).json({ message: "otp is not valid" });
    }

    let user;
    try {
      user = await User_Services.FindUser({ phone: phone });

      if (!user) {
        user = await User_Services.CreateUser({ phone: phone });
      }
    } catch (error) {
      console.log(error);

      res.status(500).json({ message: "database error", error: error });
    }
    // Token

    const { AccessToken, RefreshToken } = Token_services.generateToken({
      _id: user._id,
      activated: false,
    });

    await Token_services.StoreRefreshTOken(RefreshToken, user._id);

    res.cookie("refreshToken", RefreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    res.cookie("accessToken", AccessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    const userDto = new UserDto(user);
    res.status(200).send({ user: userDto, auth: true });
  }

  async refresh(req, res) {
    // get refresh token from cookie
    const { refreshToken: refreshTokenFromCookie } = req.cookies;

    // check if token is valid

    let userData;
    try {
      userData = await Token_services.VerifyRefreshToken(
        refreshTokenFromCookie
      );
    } catch (error) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // check if token is database
    try {
      const token = await Token_services.findRefreshToken(
        userData._id,
        refreshTokenFromCookie
      );
      if (!token) {
        return res.status(401).json({ message: "invalid token" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Internal error" });
    }

    // check if valid user
    const user = await User_Services.FindUser({ _id: userData._id });
    if (!user) {
      return res.status(404).json({ message: "No user found" });
    }
    // generate new token
    const { RefreshToken, AccessToken } = Token_services.generateToken({
      _id: userData._id,
    });

    //  update refresh token
    try {
     await Token_services.updateRefreshToken(userData._id,RefreshToken);
    } catch (error) {
      return res.status(500).json({ message: "Internal error" });
    }
    // put in cookie
    res.cookie("refreshToken", RefreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    res.cookie("accessToken", AccessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });
    
    // response
    const userDto = new UserDto(user);
    res.status(200).send({ user: userDto, auth: true });

  }

  async logout(req,res) {
    const {refreshToken} = req.cookies;
    // delete refresh token from db
   await Token_services.removeToken(refreshToken)
    // delete cookies

    res.clearCookie('refreshToken')
    res.clearCookie('accessToken');
    res.json({user : null,auth: false});
  }
}

module.exports = new AuthController();
