const RoomDto = require("../dtos/Room__dtos");
const Room_Services = require("../services/Room_Services");

class Room__controllers { 
  async create(req, res) {
    const { topic, roomType } = req.body;
    if (!topic || !roomType) {
      return res.status(400).json({ message: "all fields are required.. " });
    }

    const room = await Room_Services.create({
      topic,
      roomType,
      ownerId: req.user._id,
    });

    return res.json(new RoomDto(room));
  }

 async index(req,res) {
    const rooms = await Room_Services.getAllRooms(['open']);
    const allRooms = rooms.map(room => new RoomDto(room ))
    return res.json(allRooms)
  }
}

module.exports = new Room__controllers();
