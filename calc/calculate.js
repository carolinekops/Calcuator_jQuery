$ (document).ready(function(){

	$(".inputElements").on("click", function(){
		var y = $(this).text();
		$("#calculatorInput").append(y);
	});

$(".clear").on("click", function(){
		$("#calculatorInput").empty();
	});

	$(".evaluate").on("click", function(){

		var x = $("#calculatorInput").text();
		
		try {
			$("#calculatorInput").text(eval(x));
		}
		catch(err){
			$("#calculatorInput").text('Calculator input invalid')
		}
	});
}); 
