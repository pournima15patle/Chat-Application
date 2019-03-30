const user = require('../app/models/user.model.js');
var userService = require('../services/userService');
var tokenGenerate = require('../utility/utility');
var sendMail = require('../middleware/sendMail')

exports.registerController = (req, res) => {
    // Validate request
    userService.registerService(req.body, (err, data) => {
        var response = {};
        if (err) {
            response.status = false;
            response.errors = err
            return res.status(400).send(response);
        } else {
            response.status = true;
            response.result = data;
            return res.status(200).send(response);
        }
    })
}
exports.userLogin = (req, res) => {

    userService.loginService(req.body, (err, data) => {
        var response = {};
        if (err) {
            response.status = false;
            response.errors = err;
            return res.status(400).send(response);
        } else {
            response.status = true;
            response.result = data;
            return res.status(200).send(response);
        }
    })
}

exports.forgotPassword = (req, res) => {

    userService.forgotPassService(req.body, (err, data) => {
        var response = {};
        if (err) {
            console.log(err)
            response.status = false;
            response.errors = err;
            return res.status(400).send(response);
        } else {
            response.status = true;
            response.result = data;
            var payload = {
                email: req.body.email
            }
            console.log("Payload", payload);

            var obj = tokenGenerate.generateToken(payload);
            var url = `http://localhost:4000/reset/${obj.token}`;
            console.log(' URL', url);

            sendMail.sendMailer(url);

            response.token = obj.token
            return res.status(200).send(url);
        }
    })
}
exports.resetPassController = (req, res) => {
    userService.resetPassService(req.body, (err, data) => {
        var response = {};
        if (err) {

            response.status = false;
            response.errors = err;
            return res.status(400).send(response);
        } else {
            response.status = true;
            response.result = data;
            return res.status(200).send(response);
        }
    })
}


