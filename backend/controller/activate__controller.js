const Jimp = require("jimp");
const path = require("path");
const UserDto = require("../dtos/user__dtos");
const User_Services = require("../services/User_Services");
const cloudinary = require("cloudinary");

class ActivateController {
  async activate(req, res) {
    const { name, avatar } = req.body;
    if (!name || !avatar) {
      return res.status(400).json({ message: "all fields are required" });
    }
    try {
      const My_Cloud = await cloudinary.v2.uploader.upload(avatar, {
        folder: "chat app",
      });
      const userId = req.user._id;
      // update user
      const user = await User_Services.FindUser({ _id: userId });

      if (!user) {
        return res.status(404).json({ message: "user not found" });
      }

      user.activated = true;
      user.name = name;
      user.avatar = { public_id: My_Cloud.public_id, url: My_Cloud.secure_url };
      user.save();
      res.json({ user: new UserDto(user), auth: true });
    } catch (error) {
      return res.status(400).json({ message: "something went wrong" });
    }
  }
}

module.exports = new ActivateController();
