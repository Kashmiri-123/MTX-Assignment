const router = require('express').Router();

const { getAllEmployee } = require('../controller/question2');

router.get('/getAllEmployeeData', getAllEmployee);

module.exports = router;