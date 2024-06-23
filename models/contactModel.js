const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true, "Please add the contact name"],
    },
    email:{
        type:String,
        required: [true, "Add the email"],
    },
    phone:{
        type:String,
        required:[true, "Add the Number"],
    },

    
}, {    
    timestamps: true
});

module.exports = mongoose.model("Contact", contactSchema);