var chatModel=require('../app/models/chatModel');

exports.chatService = (req , callback) => {
    chatModel.addMessage(req , (err , result) => {
      if(err){
        callback(err);
      }else{
          console.log("service result",result);
          
        callback(null,result);
      }
    })
    
  }

  exports.getUserMsgService=(req,callback)=>{
    chatModel.getUserMsg(req,(err,result)=>{
      if(err){
        callback(err);
      }else{
        console.log("service result",result);
        callback(null,result)
      }
    })
  }