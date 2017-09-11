var app = angular.module("mainApp",[]);
app.controller("mainCtrl",mainCtrl);
function mainCtrl($scope){
$scope.loggedinObj=JSON.parse(sessionStorage.getItem("loginId"));
$scope.questionsObj=[
  {
  	"username":"sravanthi@test.com",
    "title": "border overlapping in IE",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
    "answer": "answer Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
    "tags": {
      "html": true,
      "css": true,
      "javascript": true
    }
  },
  {
  	"username":"sravanthi2@test.com",
    "title": "Share image to a Facebook page in ionic",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
    "answer": "answer Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
    "tags": {
      "html": true,
      "css": true,
      "javascript": true
    }
  }
]

$scope.askObj={
	"question":"",
	"description":"",
	"tags":{
		"html":false,
		"css":false,
		"javascript":false
	}
}

$scope.submitq=function(askObj){
	$scope.showmsg=false;
	if(askObj.question && askObj.description && (askObj.tags.html || askObj.tags.css || askObj.tags.javascript) ){
		$scope.questionsObj.push({
			"username":$scope.loggedinObj.usrname,
			"title":askObj.question,
			"description":askObj.description,
			"tags":{
				"html":askObj.tags.html,
				"css":askObj.tags.css,
				"javascript":askObj.tags.javascript
			},
			"answer":""
		});
		$("ul li a#myquestslink").trigger("click");


	}else{
		$scope.showmsg=true;
	}
}


}