// https://expressjs.com/en/guide/routing.html
const express = require('express');

const {login} = require('../controllers/auth')

const router = express.Router();

router.post('/login', login);

module.exports = router;