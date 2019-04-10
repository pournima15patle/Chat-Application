/*****************************************************************************************************
 *  @Purpose  :To create the chat model to tell the server what information our chat
 *             objects are going to contain. and set up a database schema.
 *  
 *  @file     :chatModel.js
 *  @author   :pournima15patle
 *  @version  :1.0
 *  @since    :28-03-2019
 *****************************************************************************************************/
//require moongoose to creating the schema
var mongoose = require('mongoose');

const chatSchema = mongoose.Schema({

    senderUserId: {
        type: String,
        required:[true,'sender user id required']

    },
    senderName: {
        type: String,
        required:[true,'sender name required']
    },

    recieverUserId: {

        type: String,
        required:[true,'receiver user id required']

    },
    recieverName: {
        type: String,
        required:[true,'receiver name required']

    },
    message: {

        type: String,
        required:[true,'message required']

    }

}, {
        timestamps: true
    });

var chat = mongoose.model('chat', chatSchema);
//controller for addMessage methode
class chatModel {
    addMessage(data, callback) {
           console.log("dfsesd",data);
        
          const newMsg = new chat({
            'senderUserId': data.senderUserId,
            'senderName':data.senderName,
            'recieverUserId':data.recieverUserId,
            'recieverName':data.recieverName,
            'message':data.message
        })
        // console.log("sdrfs",newMsg);
        
        //Save the new user data into the database 
        newMsg.save((err, data) => {
            if (err) {
                return callback(err);
            } else {
                console.log("added successfully",data);
                
                return callback(null, data);
            }
        })
    }
    
    getUserMsg(body,callback){
        chat.find({}, (err,data)=>{
            if(err){
                return callback(err);
            }else{
                // console.log('user msg',data);
                
                return callback(null,data);
            }
        })

        
    }

    
}module.exports = new chatModel();