var calc = (function(){

	var num1 = Math.floor((Math.random() * 20) + 1);
	var num2 = Math.floor((Math.random() * 20) + 1);

	console.log(num1);
	console.log("---------");
	console.log(num2);
	console.log("---------");


	function sumar(){

		var total = num1 + num2;
		console.log(total);

	};

	function restar(){

		var total = num1 - num2;
		console.log(total);

	};

	function operacionRandom(){

		console.log("Funcion Random");
		var op = Math.floor((Math.random() * 2) + 1);
		var texto;

		if(op == 1)
		{
			text = "SUMA";
			sumar();
		}else
		{
			text = "RESTA";
			restar();
		}

	}

	return{

		operacion_random : operacionRandom

		}
}());