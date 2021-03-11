$(function(){
  var url = "https://rafaelescalfoni.github.io/desenv_web/filmes.json";
  $.get(url, function(data){
    //console.log(data);
    $.each(data, function(index, filme) {
      //console.log(filme);
      //console.log(filme.generos);
      let $divFilme = criarFilme(filme.id, filme.titulo, filme.resumo, filme.generos, filme.titulosSemelhantes, filme.classificacao, filme.figura, filme.elenco, filme.opinioes);
      $('#content').append($divFilme);
    })
  });

  function criarFilme(id, titulo, resumo, genero, titulosSemelhantes, classificacao, figura, elenco, opinioes) {
    //div principal
    let $filme = $("<div>").addClass("filme");
    //imagem
    let $figura = $("<figure>").append($("<img>")
                              .attr("src", figura)
                              .attr("alt", titulo)
                  );
    //titulo
    let $titulo = $("<h3>").text(titulo);
    //resumo
    let $resumo = $("<div>").append($("<p>").addClass("resumo").text(resumo)).addClass("resumo");
    //genero
    //console.log(genero);
    let generoAux = genero.join(", ");
    let $genero = $("<div>").append($("<p>").append($("<spam>").addClass("negrito")).text(generoAux)).addClass("genero");
    //titulos semelhantes
    let $titulosSemelhantes = $("<div>").addClass("titulosSemelhantes");
    $.each(titulosSemelhantes, function(index, item){
      $.get(url, function(data){
        $.each(data, function(index, filme) {
          if (filme.id == item) {
            //console.log(filme.); Meio estranho não aparecer as imagens no console
            $titulosSemelhantes.append($("<img>")
                                      .attr("src", filme.figura)
                                      .attr("alt", filme.titulo)
                                    )
          }
        })
      })
    });
    //classificacao
    if (classificacao <= 14) {
      classificacao = "L";
    }
    let $classificacao = $("<div>").append($("<p>").text(classificacao)).addClass("classificacao");
    if (classificacao == "L") {
      $classificacao.addClass("livre");
      $filme.addClass("filme_livre");
    } else if (classificacao > 14 && classificacao < 18) {
      $classificacao.addClass("restrito");
      $filme.addClass("filme_restrito");
    } else {
      $classificacao.addClass("proibido");
      $filme.addClass("filme_proibido");
    }
    //elenco
    elenco_negrito = $("<spam>").addClass("negrito").text("Elenco: ");
    let elencoAux = elenco.join(", ");
    //console.log(elencoAux);
    //let elencoAux = + elenco.join(", ");
    //console.log(elencoAux);
    let $elenco = $("<div>").append(elenco_negrito).append(elencoAux).addClass("elenco");
    //console.log($elenco);
    //rating
    let media_opinioes = 0;
    let qtd_opinioes = 0;
    $.each(opinioes, function(index, item){
      media_opinioes += item.rating;
      qtd_opinioes ++;
    });
    media_opinioes = Math.round(media_opinioes/qtd_opinioes);
    //console.log(media_opinioes);
    let $opinioes = $("<div>").addClass("opinioes");
    switch (media_opinioes) {
      case 0:
      $opinioes.append($("<i>").addClass("fas fa-star star_gray"));
      $opinioes.append($("<i>").addClass("fas fa-star star_gray"));
      $opinioes.append($("<i>").addClass("fas fa-star star_gray"));
      $opinioes.append($("<i>").addClass("fas fa-star star_gray"));
      $opinioes.append($("<i>").addClass("fas fa-star star_gray"));
        break;

      case 1:
      $opinioes.append($("<i>").addClass("fas fa-star star_yellow"));
      $opinioes.append($("<i>").addClass("fas fa-star star_gray"));
      $opinioes.append($("<i>").addClass("fas fa-star star_gray"));
      $opinioes.append($("<i>").addClass("fas fa-star star_gray"));
      $opinioes.append($("<i>").addClass("fas fa-star star_gray"));
        break;

      case 2:
      $opinioes.append($("<i>").addClass("fas fa-star star_yellow"));
      $opinioes.append($("<i>").addClass("fas fa-star star_yellow"));
      $opinioes.append($("<i>").addClass("fas fa-star star_gray"));
      $opinioes.append($("<i>").addClass("fas fa-star star_gray"));
      $opinioes.append($("<i>").addClass("fas fa-star star_gray"));
        break;

      case 3:
      $opinioes.append($("<i>").addClass("fas fa-star star_yellow"));
      $opinioes.append($("<i>").addClass("fas fa-star star_yellow"));
      $opinioes.append($("<i>").addClass("fas fa-star star_yellow"));
      $opinioes.append($("<i>").addClass("fas fa-star star_gray"));
      $opinioes.append($("<i>").addClass("fas fa-star star_gray"));
        break;

      case 4:
      $opinioes.append($("<i>").addClass("fas fa-star star_yellow"));
      $opinioes.append($("<i>").addClass("fas fa-star star_yellow"));
      $opinioes.append($("<i>").addClass("fas fa-star star_yellow"));
      $opinioes.append($("<i>").addClass("fas fa-star star_yellow"));
      $opinioes.append($("<i>").addClass("fas fa-star star_gray"));
        break;

      case 5:
      $opinioes.append($("<i>").addClass("fas fa-star star_yellow"));
      $opinioes.append($("<i>").addClass("fas fa-star star_yellow"));
      $opinioes.append($("<i>").addClass("fas fa-star star_yellow"));
      $opinioes.append($("<i>").addClass("fas fa-star star_yellow"));
      $opinioes.append($("<i>").addClass("fas fa-star star_yellow"));
        break;
    }
    $filme.append($classificacao);
    $filme.append($figura);
    $filme.append($titulo);
    $filme.append($resumo);
    $filme.append($elenco);
    $filme.append($genero);
    let $footer = $("<div>").append($opinioes).append($titulosSemelhantes).addClass("footer");
    $filme.append($footer);
    return $filme;
  }
});
