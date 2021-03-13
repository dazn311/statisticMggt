const Router = require('express');
const UsersController = require('../controllers/users.controller');

const router = new Router()

router.post('/user', UsersController.creatUser);
router.post('/users', UsersController.getAllUsers);
router.post('/user_obj', UsersController.getUserObj);
router.post('/new_events', UsersController.getNewEvents);
router.get('/user/:id', UsersController.getUser);
router.put('/user', UsersController.updateUser);
router.delete('/user/:id', UsersController.deleteUser);

module.exports = router;