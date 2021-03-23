const Router = require('express');
const orgsController = require('../controllers/organisations.controller');

const router = new Router()

router.post('/org', orgsController.creatOrg);
router.get('/orgs', orgsController.getAllOrgs);
router.get('/org/:id', orgsController.getOrg);
router.put('/org', orgsController.updateOrg);
router.delete('/org/:id', orgsController.deleteOrg);

module.exports = router;