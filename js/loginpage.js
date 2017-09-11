var app=angular.module("loginApp",[]);
		app.controller("loginCtrl",loginCtrl);
		function loginCtrl($scope){
               $scope.login={
               	"username":"",
               	"password":""
               }
            $scope.loginObj=[
  {
    "usrname": "sravanthi@test.com",
    "pwd": "password1",
    "tags":{
    	"html":true,
    	"css":true,
    	"javascript":true
    }
  },
  {
    "usrname": "pratyusha@test.com",
    "pwd": "password2",
    "tags":{
    	"html":true,
    	"css":true,
    	"javascript":true
    }
  },
  {
    "usrname": "sravanthi1@test.com",
    "pwd": "password3",
    "tags":{
    	"html":true,
    	"css":true,
    	"javascript":true
    }
  }
];
              $scope.login=function(usr,pwd){
              	$scope.showmsg=false;
              	if(usr && pwd){
              		angular.forEach($scope.loginObj,function(value,index){
              			if(value.usrname == usr && value.pwd == pwd){
                           sessionStorage.setItem('loginId', JSON.stringify(value));
                           window.location.href="./pages/mainpage.html";
                           $scope.showmsg=false;
              			} 
              		});
              	}else{
              		$scope.showmsg=true;
              	}
              	console.log("in login");
              } 

           
		}
