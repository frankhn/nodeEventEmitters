var express = require('express');
const router = express.Router();
var user =  require('./controller');


router.post('/', user.create);

module.exports = router;
