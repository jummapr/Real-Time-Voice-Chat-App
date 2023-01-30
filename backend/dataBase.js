const { default: mongoose } = require("mongoose")

const dataBaseConnection = () => {
    const MONGO_URL = process.env.MONGO_URL

    mongoose.connect(MONGO_URL)

    const db = mongoose.connection;

    db.on("error", err => console.log(err));

    db.once("open", () => {
        console.log("connection successful ")
    })
}

module.exports = dataBaseConnection;