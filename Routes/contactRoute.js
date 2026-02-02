const express = require('express');
const router = express.Router();
const validateHandler = require('../Middleware/validateHandler')

const {getAllContacts,createContact,user,updateContact,deleteContact} = require('../Controllers/contactController')

router.use(validateHandler);
router.route('/').get(getAllContacts).post(createContact)
router.route('/:id').get(user).put(updateContact).delete(deleteContact)


module.exports = router;