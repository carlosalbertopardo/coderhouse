function calculadora () {
	var num1=parseInt(prompt("Ingrese un numero"));
	var num2=parseInt(prompt("Ingrese un numero"));
	var operacion=prompt("Ingrese una de las operaciones: sumar, restar, multiplicar o dividir ")
	var repetir=true;
	var res;
	while(repetir){
		repetir=false;	
		if(operacion==="sumar"){
			res=num1+num2;
		}
		else if(operacion==="restar"){
			res=num1-num2;
		}
		else if(operacion==="multiplicar"){
			res=num1*num2;
		}
		else if(operacion==="dividir"){
			res=num1/num2;
		}
		else{
			alert("operacion invalida");
			operacion=prompt("Ingrese una de las operaciones: sumar, restar, multiplicar o dividir ")
			repetir=true;
		}
	}
	return res;
}

console.log(calculadora());