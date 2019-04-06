app.controller('chatController',function($scope,SocketService,chatService){
    
   $scope.message=[];
    

    $scope.userName=localStorage.getItem('name');
    $scope.userId = localStorage.getItem('userid');
    $scope.receiver=localStorage.getItem('receiverId');

    SocketService.on('chatMessage',message)={
       
        $scope.message.push(message)
    }
    
    

    
    
})