//simulador 1
function simulador_1_1() {
  var valor_digitado = document.getElementById('valor_digitado_1').value;
  var massa_elemento = 121.76;
  var mol_elemento = 1;

  var resultado = calcula(massa_elemento, mol_elemento, valor_digitado);
  var texto = 'O resultado da converção de <strong>' + valor_digitado + ' gramas</strong> de massa em mol é: <strong>' + resultado + "<br>";

  var element = document.getElementById('resultados_1');
  element.innerHTML = texto;

}

function simulador_1_2() {
  var valor_digitado = document.getElementById('valor_digitado_2').value;
  var massa_elemento = 121.76;
  var mol_elemento = 1;

  var resultado = calcula(mol_elemento, massa_elemento, valor_digitado);
  texto = 'O resultado da converção de <strong>' + valor_digitado + ' mol</strong> em massa é: <strong>' + resultado + "<br>";
  var element = document.getElementById('resultados_2');
  element.innerHTML = texto;

}

function calcula(a, b, c) {
 var x = (c*b)/a;
 var text = parseInt(x*100)/100 + "</strong><br>" + parseInt(x*1000)/1000 + "= (" + c + "*" + b + ")/" + a + "</p>";
 return text;
}
//fim do simulador 1

//simulador 2

function simulador_2() {
  var input_h2 = document.getElementById("entrada");
  var spanH2 = document.getElementById("H2");
  var spanO2 = document.getElementById("O2");
  var spanH2O = document.getElementById("H2O");
  var resultado_1 = document.getElementById("resultado_1");
  var resultado_2 = document.getElementById("resultado_2");

  var input_H2O = parseFloat(input_h2.value);
  var padraoO2 = 32;
  var padraoH2 = 2;

  var O2 = input_H2O*padraoO2;
  var H2 = input_H2O*padraoH2;


  spanH2.innerHTML = H2;
  spanO2.innerHTML = O2;
  spanH2O.innerHTML = input_H2O;

	resultado_1_sm2.innerHTML = O2 + " gramas de O2 = " + input_H2O + " mol(s) de H2O * " + padraoO2 + " gramas de O2";

  resultado_2_sm2.innerHTML = H2 + " gramas de H2 = " + input_H2O + " mol(s) de H2O * " + padraoH2 + " gramas de H2";
}
//fim do simulador 2
//sumulador 3
function excesso() {

	var inputh2 = document.getElementById('entrada1').value;
    var inputo2 = document.getElementById('entrada2').value;
    inputh2 = parseFloat(inputh2);
    inputo2 = parseFloat(inputo2);
   		var a = 16*inputh2;
        var b = a/2;
        var c = 2*inputo2;
        var d = c/16;
        var x = inputo2 - b;
        var y = inputh2 - d;
        var massa1 = inputo2 + d;
        var massa2 = inputh2 + b;

        if(b<inputo2)
        {
            var result = "2g H2 - 16g O2 <br>" + inputh2 + "g H2 - Xg O2 <br><br> 2 . X = " + x +"<br> X = " + b + "<br><br>Para " + inputh2 + "g H2 precisa-se de " + b + "g O2<br> " + inputo2 +" - " + b + " = " + x + "<br><br>O2 está " + x + " g em excesso<br> O agente limitante é o H2 <br> A massa de H2O formada é de " + massa1 + "g";

        }
        else if(b>inputo2)
        {
            var result = "2g H2 - 16g O2 <br> Xg O2 -" + inputo2 + "g O2 <br><br> 16 . X = " + c +"<br> X = " + d + "<br><br>Para " + inputo2 + "g O2 precisa de " + d + "g H2<br> " + inputh2 +" - " + x + " = " + y + "<br><br>H2 está " + y + " g em excesso<br> O agente limitante é o O2 <br> A massa de H2O formada é de " + massa2 + "g";
        }
        else if(b == inputo2)
        {
            result = "Nenhum elemento está em excesso.";
        }
        document.getElementById('resultado').innerHTML = result;
}
//fim do simulador 3
