var userModel = require('../app/models/user.model');

exports.registerService = (req , callback) => {
  userModel.register(req , (err , result) => {
    if(err){
      callback(err);
    }else{
      callback(null,result);
    }
  })
  
}

exports.loginService=(req,callback)=>{
  userModel.login(req,(err,result)=>{
    if(err){
      callback(err);
    }else{
      callback(null,result);
    }
  })
}

exports.forgotPassService=(req,callback)=>{
  userModel.forgotPassword(req,(err,result)=>{
    if(err){
      callback(err);
    }else{
      callback(null,result);
    }
  })
}

exports.resetPassService=(req,callback)=>{
  // console.log("services",req);
  
  userModel.resetPassword(req,(err,result)=>{
    if(err){
      callback(err);
    }else{
      callback(null,result);
    }
  })
}
 
exports.getAllUserService=(req,callback)=>{

  userModel.getAllUser(req,(err,result)=>{
    if(err){
      callback(err);
    }else{
      callback(null,result);
    }
  })
}