var chatServ = require('../services/chatService');

exports.chatController = (req, res) => {
    console.log("request", req);
          var response={}
    chatServ.chatService(req.body, (err, data) => {
        if (err) {
            response.status = false;
            response.errors = err
            return res.status(400).send(response);
        } else {
            response.status = true;
            response.result = data;
            console.log("artfear",data);
            return res.status(200).send(response);
        }
    })
}