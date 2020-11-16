function rocket1() {

  var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
  };

  var resultado = "O usuário mora em " + endereco.cidade + " / " + endereco.uf + ", no bairro " + endereco.bairro + ", na rua " + endereco.rua + " com o no: " + endereco.numero + ".";
  document.getElementById('rocket1').innerHTML = resultado;

}

function rocket2(x, y) {
    var resultado = "";
  for (var i = x;i <= y; i++) {
    if ((i % 2) == 0) {
      resultado += " " + i;
    }
  }
  document.getElementById('rocket2').innerHTML = resultado;

}

function rocket3(skills) {
    var tem = 0;
    if (skills.indexOf("Javascript")!= -1) {
      var resultado = "true";
    }
  document.getElementById('rocket3').innerHTML = resultado;

}

function rocket4(anos) {
    if (anos <=1 ) {
      resultado = "Iniciante";
    } else if (anos <=3 ) {
      resultado = "Intermediário";
    } else if (anos <= 6) {
      resultado = "Avancádo";
    } else if (anos >= 7) {
      resultado = "Jedi Master";
    }
  document.getElementById('rocket4').innerHTML = resultado;

}

function rocket5(anos) {
  var usuarios = [
{
nome: "Diego",
habilidades: ["Javascript", "ReactJS", "Redux"]
},
{
nome: "Gabriel",
habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
}
];
  var resultado = "";
 for (var i = 0; i < 2; i++) {
   resultado = usuarios[i].nome;
   habilidades = usuarios[i].habilidades.join(", ");
   resultado += " possui as seguntes habilidades: " + habilidades;
   document.getElementById('rocket5').innerHTML = resultado;
 }





}
