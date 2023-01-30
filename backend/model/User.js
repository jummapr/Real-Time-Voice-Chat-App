const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    phone : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : false
    },
    avatar: {
            public_id: String,
            url: String,
    },
    activated : {
        type : Boolean,
        required : false,
        default : false
    }

},{
    timestamps : true
});


module.exports = mongoose.model("User",userSchema,'users')