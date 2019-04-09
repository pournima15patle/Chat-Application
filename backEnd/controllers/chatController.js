/*****************************************************************************************************
*  @Purpose  :To write the chat controller for addMessage and get user messsage from the MondoDB database.
*  @author   :pournima15patle
*  @version  :1.0
*  @since    :19-03-2019
*****************************************************************************************************/

var chatServ = require('../services/chatService');

exports.chatController = (req, res) => {
    console.log("request", req);
          var response={}
    chatServ.chatService(req.body, (err, data) => {
        if (err) {
            console.log('asgdsggsgdsff',req.body)
            response.status = false;
            response.errors = err;
            return res.status(400).send(response);
        } else {
            response.status = true;
            response.result = data;
            console.log("artfear",data);
            return res.status(200).send(response);
        }
    })
}

exports.getUserMsg=(req,res)=>{
    var response={};
    chatServ.getUserMsgService(req.body,(err,data)=>{
        if(err){
            response.status=false;
            response.errors = err;
            return res.status(400).send(response);
        }else{
            response.status = true;
            response.result = data;
            console.log('gklsofjewfs;lfwf',responce);
            return res.status(200).send(response);
            
        }
    })
}