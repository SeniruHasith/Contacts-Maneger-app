const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req,res) =>{
    const contacts = await Contact.find();
    res.status(200).json(contacts)
});

//@desc Create new contact
//@route POST /api/contacts
//@access public
const CreateContact = asyncHandler(async (req,res)=>{
    console.log("The requets body is : ",req.body);
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandotory");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,

    });
    res.status(201).json(contact)
});

//@desc get new contact
//@route GET /api/contacts
//@access public
const getContact = asyncHandler(async (req,res)=>{
    res.status(200).json({massage:`GET contacts for ${req.params.id}`})
});
//@desc update new contact
//@route UPDATE /api/contacts
//@access public
const updateContact = asyncHandler(async (req,res)=>{
    res.status(200).json({massage:`UPDATE contacts for ${req.params.id}`})
});

//@desc delete new contact
//@route DELETE /api/contacts
//@access public
const deleteContact = asyncHandler(async (req,res)=>{
    res.status(200).json({massage:`DELETE contacts for ${req.params.id}`})
});

module.exports = {getContacts,CreateContact,getContact,deleteContact,updateContact}