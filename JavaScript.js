
function funcao() {
	var opt1 = document.getElementById('v1').value;
	
	opt1 = parseInt(opt1);
	
	var resultado = conta(opt1);
	alert("o custo total da compra será de: R$" + resultado);

}

function conta(opt1) {
	var resultado = 0;
	if (opt1 < 12) {
		resultado = opt1*1.30;
	} else {
		resultado = opt1*1;
	} 
	return resultado;
}