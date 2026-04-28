const router = require('express').Router();
const verify = require('../middlewares/verifyToken');
const ctrl = require('../controllers/taskController');

router.post('/', verify, ctrl.createTask);
router.get('/', verify, ctrl.getTasks);
router.put('/:id', verify, ctrl.updateTask);
router.delete('/:id', verify, ctrl.deleteTask);

module.exports = router;