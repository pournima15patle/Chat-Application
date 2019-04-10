app.service('chatService', function ($http) {
    try {
        this.getAllUser = function ($scope) {
            $http({
                method: 'GET',//assigning value to http proprties 
                url: 'http://localhost:4000/getAllUser',
                headers: {
                    'token': $scope.token
                }
            }).then(
                function successCallback(response) { //call back function of http sevice
                    $scope.allUser = response.data.result;
                    console.log(response.data.result);

                },
                function errorCallback(response) {
                    console.log("register Unsuccessfull ");
                    console.log(response);
                }
            );
        }
    } catch (err) {
        console.log('err', err);
    }

    try {
        this.getUserMsg = function ($scope) {
            var arr = [];
            // var usertoken = localStorage.getItem('token');
            // console.log("token: ",usertoken);
            
            $http({
                method: 'GET',//assigning value to http proprties 
                url: 'http://localhost:4000/getUserMsg',//assigning value to http properties 
                // headers: {
                //     'token': usertoken,
                // }
            }).then(
                
                function successCallback(response) {
                    console.log("sucess");
                    console.log("backend response",response.data.message);

                    for (let i = 0; i < (response.data.message.length); i++) {  
                        a = response.data.message[i];

                        if (((localStorage.getItem('userId') == a.senderUserId) && (localStorage.getItem('receiverId') == a.recieverUserId)) || ((localStorage.getItem('userId') == a.recieverUserId && localStorage.getItem('receiverId') == a.senderUserId))) {
                            console.log("local user is ", localStorage.getItem('userId'), "a user is ", a.senderUserId, " local receiver id is ", localStorage.getItem('receiverId'), "  receiver is ", a.recieverUserId);
                            arr.push(a);//pushing all message to array
                        }

                    }
                    $scope.allUserMsg = arr;
                    console.log("Users msg successfull ", arr);

                },
                function errorCallback(response) { console.log("else part");
                    console.log("Unsuccessfull ", response);


                }
            );
        }
    } catch (err) {
        console.log('err', err);
    }

})