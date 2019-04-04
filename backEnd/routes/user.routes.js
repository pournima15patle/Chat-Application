/*****************************************************************************************************
*  @Purpose  :Each route will determine which method to execute when they are invoked by a client.
*              
*  @file     :user.routes.js             
*  @author   :pournima15patle
*  @version  :1.0
*  @since    :19-03-2019
*****************************************************************************************************/
module.exports = (app) => {

    //require the controller file and middleware.
    const user = require('../controllers/user.controller.js');
    const token=require('../middleware/decodeToken');
    // Create a new user
    app.post('/register', user.registerController);
    // login the user
    app.post('/login',user.userLogin);
    // forgot the password
    app.post('/forgotPassword',user.forgotPassword);
    // For reseting the password
    app.post('/resetPassword',token.checkToken, user.resetPassController);
    
}