$(document).ready(function(){
	var x=[];
	$(".number").click(function(){
		x.push($(this).text());
		console.log(x);
	});
	$(".operator").click(function(){
		x.push($(this).text());
		console.log(x);
	});
	$(".equal").click(function(){
		var y="9+7";
		console.log(parseInt("9+7"));
		for(var i=0;i<x.length;i++){
			
			//y=y+x[i];
			
		}
		
	});
});