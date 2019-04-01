/*****************************************************************************************************
 *  @Purpose  : Write a method to send the password reset email to the user.
 *  @author   :pournima15patle
 *  @version  :1.0
 *  @since    :19-03-2019
 *****************************************************************************************************/

var nodemailer = require('nodemailer');
/* The mailer argument is a helper object that the Controller will use to
   send the password reset email to the user.*/
exports.sendMailer =(url) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ppp021995@gmail.com',
            pass: 'pournima123'
        }
    });

    var mailOptions = {
        from: 'ppp021995@gmail.com',
        to:   'ppp021995@gmail.com',
        subject: 'Sending Email using Node.js',
        text: url
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
