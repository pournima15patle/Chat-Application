var mongoose = require('mongoose');

const chatSchema = mongoose.Schema({

    senderUserId: {
        type: String

    },
    senderName: {
        type: String

    },

    reciverUserId: {

        type: String

    },
    reciverName: {
        type: String

    },
    message: {

        type: String

    }

}, {
        timestamps: true
    });

var chat = mongoose.model('chat', chatSchema);

class chatModel {
    addMessage(body, callback) {
          console.log("dfsesd",body);
        
          const newMsg = new chat({
            'senderUserId': body.senderUserId,
            'senderName':body.senderName,
            'reciverUserId':body.reciverUserId,
            'reciverName':body.reciverName,
            'message':body.message
        })
        console.log("sdrfs",newMsg);
        
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

    
}module.exports = new chatModel();