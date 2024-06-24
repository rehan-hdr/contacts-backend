const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true, "Please enter a username" ],
        unique: [true, "Email Address already taken"]
    },
    email:{
        type:String,
        required:[true, "Please enter an email"],
        unique: [true, "Email Address already taken"]
    },
    password:{
        type:String,
        required:[true, "Please enter a user password"]
    }},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);