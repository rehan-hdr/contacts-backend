const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")

//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async (req,res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc Create new contact
//@route POST /api/contacts
//@access public

const createContact = asyncHandler(async (req,res) => {
    console.log("the request body is ", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("ALL FIELDS ARE NECESSARY");
    }

    const contact = await Contact.create({
        name,
        email,
        phone
    });
    res.status(201).json(contact)
});

//@desc Delete a contact
//@route DELETE /api/contacts:id
//@access public

const deleteContact = asyncHandler(async (req,res) => {
    res.status(202).json({message:"DELETE THIS CONTACT"})
});

//@desc UPDATE contact
//@route PUT /api/contacts:id
//@access public

const updateContact = asyncHandler(async(req,res) => {
    res.status(200).json({message:`UPDATE CONTACT for ${req.params.id}`});
});

//@desc GET this one contact
//@route GET /api/contacts:id
//@access public

const getContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("CONTACT NOT FOUND");
    }
    res.status(200).json(contact);
});

module.exports = {getContact, createContact, updateContact, deleteContact, getContacts};