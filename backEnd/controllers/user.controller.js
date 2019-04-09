/*****************************************************************************************************
*  @Purpose  :To write the controller for login,register, forgot Password and reset password and
              save and retrieve user data from the MondoDB database.

*  @file     :user.controller.js                 
*  @author   :pournima15patle
*  @version  :1.0
*  @since    :19-03-2019
*****************************************************************************************************/


const user = require('../app/models/user.model.js');
var userService = require('../services/userService');
var tokenGenerate = require('../utility/utility');
var sendMail = require('../middleware/sendMail')

//controller for registration
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

//controller for login 
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
//controller for forgotPassword
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
            //send payload to the generate token function 
            var obj = tokenGenerate.generateToken(payload);
            var url = `http://localhost:4000/#!/resetPassword/${obj.token}`;
            console.log(' URL', url);
            //send the token url to the send mailer function
            sendMail.sendMailer(url);

            response.token = obj.token
            return res.status(200).send(response);
        }
    })
}

//controller for Reset Password
exports.resetPassController = (req, res) => {
    // console.log("control",req);
    
    userService.resetPassService(req.body, (err, data) => {
        var response = {};
        if (err) {
            //   console.log("dgsdefdes");
              
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

// controller for user list
exports.getAllUserController=(req,res)=>{
      
    userService.getAllUserService(req.body,(err,data)=>{
        var response={};
        if(err){
            response.status=false;
            response.error=err;
            return res.status(400).send(response);
        }else{
            response.status=true;
            response.result=data;
            return res.status(200).send(response);
        }
    })
}


