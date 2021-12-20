const { getSalary } = require('../controller/question3');

const router = require('express').Router();


router.post('/salary', getSalary);

module.exports = router;