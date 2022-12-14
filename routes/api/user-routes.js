const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/userss
router
.route('/')
.get(getAllUser)
.post(createUser);

// Set up GET one, PUT, and DELETE at /api/userss/:id
router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

module.exports = router;