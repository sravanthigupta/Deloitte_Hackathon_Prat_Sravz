$(document).ready(function(){
	$("ul li").on("click",function(e){
		$("ul li").removeClass("active");
		$(e.target).parent().addClass("active");
		$("div.main-section>div").addClass("hide");
		if(e.target.text == "Questions"){
			$("div#questions").removeClass("hide");
		}else if(e.target.text == "My Questions"){
			$("div#myquestions").removeClass("hide");
		}else if(e.target.text == "Ask A Question"){
			$("div#askquestion").removeClass("hide");
		}
	})
})