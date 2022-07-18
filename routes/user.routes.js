const { Router } = require('express');

const { getUsers, putUser, postUser, deleteUser } = require('../controllers/users.controller');

const router = Router();

// Metodo get que optine todos los usuarios
router.get('/', getUsers);
// Metodo put que
router.put('/:id', putUser);

router.post('/', postUser);

router.delete('/', deleteUser);


module.exports = router;