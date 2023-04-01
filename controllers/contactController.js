const asyncHandler = require("express-async-handler");

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req,res) =>{
    res.status(200).json({message:"Get all contatcs"})
});


//@desc Create new contact
//@route POST /api/contacts
//@access public
const CreateContact = asyncHandler(async (req,res)=>{
    console.log("The requets body is : ",req.body);
    const {name,email,contact} = req.body;
    if(!name || !email || !contact){
        res.status(400)
        throw new Error("All fields are mandotory")
    }
    res.status(200).json({massage:"Create all contacts"})
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