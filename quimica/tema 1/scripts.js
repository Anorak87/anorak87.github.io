function simulador_1_1() {
  var valor_digitado = document.getElementById('valor_digitado_1').value;
  var massa_elemento = 121.76;
  var mol_elemento = 1;

  var resultado = calcula(massa_elemento, mol_elemento, valor_digitado);
  resultado += 'O resultado da converção de ' + valor_digitado + ' gramas de massa em mol é: ' + resultado;
  document.getElementById('resultados_1').appendChild(resultado);
}

function simulador_1_2() {
  var valor_digitado = document.getElementById('valor_digitado_2').value;
  var massa_elemento = 121.76;
  var mol_elemento = 1;

  var resultado = calcula(mol_elemento, massa_elemento, valor_digitado);
  resultado += 'O resultado da converção de ' + valor_digitado + ' mol em massa é: ' + resultado;
  document.getElementById('resultados_2').appendChild(resultado);

}

function calcula(a, b, c) {
 x = (c*b)/a;
 var text = document.createElement("P");
 text.innerHTML = x + "= (" + c + "*" + b + ")/" + a + "<br>";
 
 return text;
}
