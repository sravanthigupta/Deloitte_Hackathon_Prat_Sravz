var app=angular.module("regApp",[]);
	app.controller("regCtrl",regCtrl);
	function regCtrl($scope){
		$scope.regObj={
			"usrname":"",
			"pwd":"",
			"tags":{
				"html":false,
				"css":false,
				"javascript":false
			}
		}

	$scope.register=function(user,pwd,html,css,js){
			$scope.mandatoryError=false;
           if(user && pwd && (html || css || js)){
           	//var test=angular.element("[ng-controller='loginCtrl']").scope().loginObj;
           	 window.location.href="../index.html";       
           }else{
           	$scope.mandatoryError=true;
           } 
 
	}	
}