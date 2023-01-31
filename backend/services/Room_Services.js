const Room_Model = require("../model/Room_Model");

class RoomServices {
  async create(payload) {
    const { topic, roomType, ownerId } = payload;
    const room = await Room_Model.create({
      topic,
      roomType,
      ownerId,
      speakers: [ownerId],
    });

    return room;
  }

  async getAllRooms(types) {
    const rooms = await Room_Model.find({roomType: {$in: types} }).populate('speakers').populate('ownerId').exec();
    return rooms
  }
}

module.exports = new RoomServices();
