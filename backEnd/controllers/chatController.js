/*****************************************************************************************************
*  @Purpose  :To write the chat controller for addMessage and get user messsage from the MondoDB database.
*  @author   :pournima15patle
*  @version  :1.0
*  @since    :19-03-2019
*****************************************************************************************************/

var chatServ = require('../services/chatService');

exports.chatController = (req, callback) => {
    // console.log("request", req);
          var response={}
    chatServ.chatService(req, (err, data) => {
        if (err) {
            
            callback(err);
        } else {
            
            console.log("data at controller: ",data);
            
            callback(null , data);
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
            // console.log('gklsofjewfs;lfwf',responce);
            return res.status(200).send(response);
            
        }
    })
}