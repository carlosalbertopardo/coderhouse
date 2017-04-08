

	function hacerSuma(A, B){
		console.log(A + B);
	}

	function hacerResta(A, B){
		console.log(A - B);
	}

	function hacerMultiplicacion(A, B){
		console.log(A * B);
	}

	function hacerDivision(A, B){
		console.log(A / B);
	}


for (i = 0; i < 4; i++){ 
	var StringA = prompt('Ingresar un numero');
	var StringB = prompt('Ingresar otro numero');
	var Accion = prompt('Que operacion quiere realizar?')

	var NumberA = Number(StringA);
	var NumberB = Number(StringB);


	if (Accion == 'Suma'){ /*Consultar como hacer para tirar opciones en el prompt o que me tome cualquier manera de escribirlo*/
		hacerSuma(NumberA, NumberB);
	}
	if(Accion == 'Resta'){
		hacerResta(NumberA, NumberB);
	}
	if(Accion == 'Multiplicacion'){
		hacerMultiplicacion(NumberA, NumberB);
	}
	if(Accion == 'Division'){
		hacerDivision(NumberA, NumberB);
	}
}



