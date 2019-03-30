module.exports = (app) => {
    const user = require('../controllers/user.controller.js');
    const token=require('../middleware/decodeToken');

    // Create a new user
    app.post('/register', user.registerController);

    app.post('/login',user.userLogin);

    app.post('/forgotPassword',user.forgotPassword);
    app.post('/resetPassword',token.checkToken, user.resetPassController);
    
}