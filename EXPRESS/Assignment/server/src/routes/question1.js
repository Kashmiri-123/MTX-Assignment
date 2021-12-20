const { logInController } = require('../controller/question1');

const router = require('express').Router();

router.get('/login', logInController);

module.exports = router;