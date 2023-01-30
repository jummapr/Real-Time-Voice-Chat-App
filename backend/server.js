require('dotenv').config()
const express = require('express');
const dataBaseConnection = require('./dataBase');
const router = require('./router/routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const cloudinary = require('cloudinary');

const app = express();

app.use(cookieParser())
app.use(cors({
    credentials : true,
    origin : ['http://localhost:3000']
}))
const port = process.env.PORT;

cloudinary.config({
    cloud_name: "dbqkfleqb",
    api_key: "781913546815341",
    api_secret: "SQ1zcmBWeiPmq7AXKfEslo0ohBw"
  });

dataBaseConnection()

app.use(express.json({limit : '8mb'}));
app.use(router)

app.get('/', (req, res) => {
    res.send("this is a test")
})

app.listen(port,() => {
    console.log(`listening on port ${port}`);
});