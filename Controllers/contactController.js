const asyncHandler = require("express-async-handler");
const Contact = require('../Models/contactModel');
//@desc Get all contacts
//@route GET /api/contacts
//@access private


const getAllContacts = asyncHandler(async (req,res)=>{
    const user = await Contact.find({ user_id: req.user.id });
    res.status(200).json(user);
});  

//@desc POST newcontacts
//@route POST /api/contacts
//@access private

const createContact =asyncHandler(async(req,res)=>{
    console.log(req.body);
    const {name,phone_no,email}=req.body;
    if(!name || !phone_no || !email){
        res.status(400);
        throw new Error("all fields are mandatory")
    }
    const contact = await Contact.create({
        name,email,phone_no,user_id: req.user.id
    })

    res.status(201).json(contact);
})

//@desc GET one user using id

const user =asyncHandler(async(req,res)=>{
   const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404)
        throw new Error("Contacts not found");
    }
    res.status(200).json(contact);
})

//@desc PUT contact 

const updateContact =asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404)
        throw new Error("NOT FOUND")
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(403)
        throw new Error("user not authorized to update other user contacts");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updatedContact);
    
})

//@desc DELETE a conatact

const deleteContact =asyncHandler(async(req,res)=>{
     const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404)
        throw new Error("NOT FOUND")
    }

      if(contact.user_id.toString() !== req.user.id){
        res.status(403)
        throw new Error("user not authorized to delete other user contacts");
    }

    await Contact.deleteOne(contact);

    res.status(200).json(contact);
})

module.exports={getAllContacts,createContact,user,updateContact,deleteContact}