const mongoose = require('mongoose');
bcrypt = require('bcrypt'),
    saltFactor = 10;
var nodemailer = require('nodemailer');
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
        timestamps: true
    });

var user = mongoose.model('user', UserSchema);


class Usermodel {

    register(body, callback) {

        var newUser = new user({
            'name': body.name,
            'email': body.email,
            'password': body.password = bcrypt.hashSync(body.password, saltFactor)
        })

        newUser.save((err, data) => {
            if (err) {
                return callback(err);
            } else {
                return callback(null, data);
            }
        })
    }


    login(body, callback) {
        user.findOne({ email: body.email }, (err, result) => {
            if (err) {
                console.log("error: ", err);
                callback(err);
            } else

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

    forgotPassword(body, callback) {
        user.findOne({ email: body.email }, (err, result) => {
            if (err) {
                console.log("error", err);
                callback(err);
            } else {
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

    resetPassword(body, callback) {

        var pass = bcrypt.hashSync(body.password, saltFactor)

        user.updateOne({ password: pass }, (err, result) => {
            if (err) {
                callback(err);
            } else {
                console.log("Password Reseted Successfully....");
                return callback(result);
            }
        })
    }
}
module.exports = new Usermodel();
