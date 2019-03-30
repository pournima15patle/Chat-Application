var nodemailer = require('nodemailer');

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
        to: 'ppp021995@gmail.com',
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
