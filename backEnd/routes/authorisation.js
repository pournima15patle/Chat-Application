var express = require('express');
var router = express.Router();
var user = require('../controllers/user.controller');
var chatCtrl = require('../controllers/chatController');
var auth = require('../authentication/authenticate');

try {
    router.get('/getAllUser', auth, user.getAllUserController);
    router.get('/getUserMsg', auth, chatCtrl.getUserMsg);

}
catch (err) {
    console.log("err found while receving token - authorization.js");
}

module.exports = router