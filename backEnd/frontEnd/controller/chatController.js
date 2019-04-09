/*****************************************************************************************************
 *  @Purpose  :To create the chat controller to tell the server what information our chat
 *             objects are going to contain. and methods declare for getting all user and 
 *              to showing the list and chat .
 *  
 *  @file     :user.model.js
 *  @author   :pournima15patle
 *  @version  :1.0
 *  @since    :28-03-2019
 *****************************************************************************************************/

app.controller('chatController', function ($scope, $location, SocketService, chatService) {

    $scope.message = '';
    // taking the array to stored the messages
    $scope.allUserMsg = [];

    $scope.userName = localStorage.getItem('name');
    $scope.userId = localStorage.getItem('userid');
    $scope.receiver = localStorage.getItem('receiverId');

    SocketService.on('chatMessage', (message) => {
        if (localStorage.getItem('userId') == message.senderUserId || (localStorage.getItem('userId') == message.recieverUserID) && localStorage.getItem('receiverId') == message.senderUserId) {
            if ($scope.allUserMsg === undefined) {
                $scope.allUserMsg = message;
            } else {
                $scope.allUserMsg.push(message);
            }
        }

    });


    $scope.getAllUser = function () {
        chatService.getAllUser($scope);
    }
    $scope.getAllUser();

    $scope.person = function (Data) {//select person from list
        console.log('data', Data)
        $scope.allUserMsg = '';

        localStorage.setItem('receiverName', Data.name);//getting data from localstorage
        localStorage.setItem('receiverId', Data._id);
        $scope.recieverUserName = localStorage.getItem('receivername'); //get the receiver name to show in user list
        $scope.getUserMsg();
    }
    //get all message
    $scope.getUserMsg = function () {
        console.log(" hello ");
        chatService.getUserMsg($scope);
    }
    $scope.getUserMsg();

    $scope.sendmessage = function () { //send message function
        var msg = {
            'senderUserId': localStorage.getItem('userId'),
            'senderName': localStorage.getItem('name'),
            'recieverUserId': localStorage.getItem('receiverId'),
            'recieverName': localStorage.getItem('receivername'),
            'message': $scope.message
        };
        $scope.message = '';
        SocketService.emit('createMessage', msg);//emitting the message to the browser
    }

    $scope.logout = function () {
        localStorage.clear();
        $location.path('/login')//return back to login page
    }


});
