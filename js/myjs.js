//======================VARIABLE======================================
var number1="";
var number2="";
var operator="";
var display="";
var temp="";
var memory=[];
//======================START===========================================

$(document).ready(function(){
	
	/**
====================== event click in span number =====================**/
	$(".number").click(function(){
		/**
		if operator==""
			number1=this.text
		else 
			number2=this.text
		**/
		if(operator==""){
			number1=number1+$(this).text();
			display=number1;
			$(".screen").text(display);
			console.log(display);
		}else{
			number2=number2+$(this).text();
			display=display+$(this).text();
			$(".screen").text(display);
			console.log(display);
		}
		
	});
//====================== event click another span=========================
	/**
		CASE1: OPERATOR
		**/
	$(".operator").click(function(){
		
		if(operator.length>=1){
			temp=$(this).text();
			console.log("number1"+number1);
			console.log("temp"+temp);
			if(number1==0){
				myOperator();
			}else 
			if(number1==""){
				number1="0";
				display=number1+operator;
				$(".screen").text(display);
			}else if(number1!=""&&number2!=""){
				myOperator();
			}else if(number1!=""&&number2==""){
				operator=temp;
				display=number1+temp;
				$(".screen").text(display);
			}
		}else{
			operator=$(this).text();
			display=display+operator;
			$(".screen").text(display);
			console.log(display);
		}
		

		
	});




	/**
		CASE2:SQUARE ROOT
	**/
	$(".sqrt").click(function(){
		if(number1!=""&&operator==""){
			number1=Math.sqrt(number1);
			console.log("sqrt");
			display=number1;
			$(".screen").text(display);
		}else if(number1!=""&&operator!=""&&number2==""){
			number2=Math.sqrt(number1);
			display=display+number2;
			$(".screen").text(display);
		}else if(number1!=""&&operator!=""&&number2!=""){
			number2=Math.sqrt(number2);
			display=number1+operator+number2;
			$(".screen").text(display);
		}
	});


	/**
		CASE3:PERCENT
	**/
	$(".percent").click(function(){
		if(number1!=""&&operator==""){
			number1=0;
			display=number1;
			$(".screen").text(display);
		}else if(number1!=""&&operator!=""&&number2==""){
			number2=(number1*number1)/100;
			display=display+number2;
			$(".screen").text(display);
		}else if(number1!=""&&operator!=""&&number2!=""){
			number2=(number1*number2)/100;
			console.log("day la number2 o percent"+number2);
			display=number1+operator+number2;

			$(".screen").text(display);
			console.log("co chay qua day1");
		}
	});
	/**
		CASE4:1/x
	**/
	$(".x").click(function(){
		if(number1!=""&&operator==""){
			number1=1/number1;
			display=number1;
			$(".screen").text(display);
		}else if(number1!=""&&operator!=""&&number2==""){
			number2=1/number1;
			display=display+number2;
			$(".screen").text(display);
		}else if(number1!=""&&number2!=""&&operator!=""){
			number2=1/number2;
			display=number1+operator+number2;
			$(".screen").text(display);
		}
	});


	//Case5: EQUAL

	$(".equal").click(function(){
		
		if(operator==""){
			if(number1==""){
				display="";
				$(".screen").text(display);
			}else{
				display=number1;
				number2="";
				$(".screen").text(display);
				
			}
			
		}if(operator!=""&&number1!=""&&number2!=""){
			myEqual();
		}else if(number1!=""&&number2==""&&operator!=""){
			number2="0";
			myEqual();
		}
		
	});
	//CASE6: CLEAR
	$(".clear").click(function(){
		number1="";
		number2="";
		operator="";
		display="";
		$(".screen").text(display);
	});
	//CASE7: MEMORY
	$(".memory").click(function(){
		var value=$(this).text();
		//----------------MS--------------------//
		if(value=="MS"){
			if(number1==""){
				$(".subScreen").text("");
			}else if(number2!=""){
				if(memory.length==1){
					memory.pop();
				}
				memory.push(number2);
				console.log(memory);
				$(".subScreen").text("M");
			}else if(number1!=""&&number2==""){
				if(memory.length==1){
					memory.pop();
				}
				memory.push(number1);
				console.log(memory);
				$(".subScreen").text("M");
			}	
		//--------------------MR-----------------------//
		}else if(value=="MR"){
			if(memory.length==0){
				$(".screen").text("");
			}else{
				var variable=$(".screen").text();
				if(variable.length>0){
					$(".screen").text(variable);
				}else{
					number1=memory[0];
					display=display+number1;
					$(".screen").text(display);
				}
				
			}
		//--------------------MC------------------------//
		}else if(value=="MC"){
			if(memory.length==0){
				$(".screen").text("");
			}else{
				memory.pop();
				console.log(memory);
				$(".subScreen").text("");
			}
		}
		//-------------------M+-----------------------------
		else if(value=="M+"){
			if(memory.length==0){
				if(number1!=""&&number2==""){
					memory.push(number1);
					$(".subScreen").text("M");
					
				}else if(number1!=""&&number2!=""){
					memory.push(number2);
					$(".subScreen").text("M");
				}
			}else{
				if(number1!=""&&number2==""){
					number1=parseFloat(number1);
					memory[0]=parseFloat(memory[0]);
					memory[0]=memory[0]+number1;
					console.log(memory);
				}else if(number1!=""&&number2!=""){
					number2=parseFloat(number2);
					memory[0]=parseFloat(memory[0]);
					memory[0]=memory[0]+number2;
					console.log(memory);
				}
			}
		}
		//==========================M- =============================
		else if(value=="M-"){
			if(memory.length==0){
				if(number1!=""&&number2==""){
					number1=parseFloat(number1);
					number1=0-number1;
					memory.push(number1);
					$(".subScreen").text("M");
					
				}else if(number1!=""&&number2!=""){
					number2=parseFloat(number2);
					number2=0-number2;
					memory.push(number2);
					$(".subScreen").text("M");
				}
			}else{
				if(number1!=""&&number2==""){
					number1=parseFloat(number1);
					memory[0]=parseFloat(memory[0]);
					memory[0]=memory[0]-number1;
					console.log(memory);
				}else if(number1!=""&&number2!=""){
					number2=parseFloat(number2);
					memory[0]=parseFloat(memory[0]);
					memory[0]=memory[0]-number2;
					console.log(memory);
				}
			}
		}
	});
});
/**
=======================================MY EQUAL=======================================================
**/
function myEqual(){
		number1=parseFloat(number1);
		number2=parseFloat(number2);
		if(operator=="+"){
			number1=number1+number2;
			display="";
			display=display+number1;
			console.log(display);
			$(".screen").text(display);
			number2="";
			operator="";
			
		}else if(operator=="-"){
			number1=number1-number2;

			display="";
			display=number1;
			$(".screen").text(display);
			number2="";
			operator="";
		}else if(operator=="*"){
			number1=number1*number2;
			display=""
			display=display+number1;
			$(".screen").text(display);
			console.log(display);
			number2="";
			operator="";
		}else if(operator=="/"){
			number1=number1/number2;
			display="";
			console.log(display);
			display=display+number1;
			$(".screen").text(display);
			console.log(display);
			number2="";
			operator="";
		}

}
/**
=======================================MY OPERATOR========================================================
**/
function myOperator(){
			number1=parseFloat(number1);
			console.log("number1"+number1);
			number2=parseFloat(number2);
			if(operator=="+"){
				number1=number1+number2;
				display="";
				operator=temp;
				display=display+number1+operator;
				$(".screen").text(display);
				console.log(display);
				number2="";

			}else if(operator=="-"){
				number1=number1-number2;
				display=""
				operator=temp;
				display=display+number1+operator;
				$(".screen").text(display);
				console.log(display);
				number2="";
				
			}else if(operator=="*"){
				number1=number1*number2;
				display=""
				operator=temp;
				display=display+number1+operator;
				$(".screen").text(display);
				console.log(display);
				number2="";
				
			}else if(operator=="/"){
				number1=number1/number2;
				display="";
				console.log(display);
				operator=temp;
				display=display+number1+operator;
				$(".screen").text(display);
				console.log(display);
				number2="";
				
			}
}