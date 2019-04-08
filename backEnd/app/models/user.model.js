/*****************************************************************************************************
 *  @Purpose  :To create the user model to tell the server what information our chat
 *             objects are going to contain. and set up a database schema.
 *  
 *  @file     :user.model.js
 *  @author   :pournima15patle
 *  @version  :1.0
 *  @since    :28-03-2019
 *****************************************************************************************************/
const mongoose = require('mongoose');
bcrypt = require('bcrypt'),
    saltFactor = 10;

/**
 * Create database schema for chat app
 */
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'email is required']
    },
    password: {
        type: String,
        required: true
    }
}, {
        timestamps: true
    });

var user = mongoose.model('user', UserSchema);

//Creating usermodel for register the user.
class Usermodel {

    register(body, callback) {

        var newUser = new user({
            'name': body.name,
            'email': body.email,
            'password': body.password = bcrypt.hashSync(body.password, saltFactor)
        })
        //Save the new user data into the database 
        newUser.save((err, data) => {
            if (err) {
                return callback(err);
            } else {
                return callback(null, data);
            }
        })
    }

    //Creating usermodel for login method.
    login(body, callback) {
        //find one document from database
        user.findOne({ email: body.email }, (err, result) => {
            if (err) {
                console.log("error: ", err);
                callback(err);
            } else
                //compare the requested password and database password 
                bcrypt.compare(body.password, result.password, function (err, isMatch) {
                    if (err) {
                        return callback(err)
                    } else {
                        if (isMatch) {
                            console.log(isMatch);

                            return callback(null, result);
                        } else {
                            return callback("password invalid");
                        }
                    }
                });
        });
    }

    //Creating user model for forgot password
    forgotPassword(body, callback) {
        console.log("body",body);
        
        user.findOne({ 'email': body.email }, (err, result) => {
            if (err) {
                console.log("error", err);
                callback(err);
            } else {

                //check if email is not null and if it is match
                if (result.email != null && body.email == result.email) {
                    console.log("result name", result.email);
                    console.log("body.name", body.email);


                    console.log("no error in model");

                    return callback(null, result);
                } else {
                    return callback("does not recognised user");
                }
            }
        })
    }

    //Creating the user model for reset password
    resetPassword(body, callback) {

        var pass = bcrypt.hashSync(body.password, saltFactor);

        user.updateOne({ password: pass }, (err, result) => {
            if (err) {
                callback(err);
            } else {
                console.log("result", result)
                console.log("Password Reseted Successfully....");
                return callback(null, result);
            }
        })
    }

    getAllUser(body, callback) {

        user.find({}, (err, result) => {
            if (err) {
                callback(err);
            } else {
                console.log("result", result)
                return callback(null, result);
            }
        })
    }
}
module.exports = new Usermodel();
