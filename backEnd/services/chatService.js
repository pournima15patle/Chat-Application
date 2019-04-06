var chatModel=require('../app/models/chatModel');

exports.chatService = (req , callback) => {
    chatModel.addMessage(req , (err , result) => {
      if(err){
        callback(err);
      }else{
          console.log("in service",result);
          
        callback(null,result);
      }
    })
    
  }