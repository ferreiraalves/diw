var news = {
  "news": [
    {
      "id": 1,
      "titulo": "Presidentes dos 3 poderes vão firmar pacto por reformas em 10 de junho",
      "short_text": "Em encontro nesta terça-feira (28) no Palácio da Alvorada, os presidentes dos três poderes resolveram assinar um pacto a favor das reformas em 10 de junho. O texto foi apresentado durante encontro entre o presidente Jair Bolsonaro e os presidentes da Câmara, Rodrigo Maia, do Senado, Davi Alcolumbre, e do STF, Dias Toffoli.",
      "image_url": "imgs/lixo.jpg",
      "full_text": `
      Em encontro nesta terça-feira (28) no Palácio da Alvorada, os presidentes dos três poderes resolveram assinar um pacto a favor das reformas em 10 de junho. O texto foi apresentado durante encontro entre o presidente Jair Bolsonaro e os presidentes da Câmara, Rodrigo Maia, do Senado, Davi Alcolumbre, e do STF, Dias Toffoli. <br><br>
      Durante a reunião, Bolsonaro destacou a importância de trabalhar junto com Legislativo e Judiciário, defendeu as instituições e condenou os ataques sofridos pelo Congresso e pelo Supremo nas manifestações do domingo passado, promovidas pelos seus apoiadores.
      `


    },
    {
      "id": 2,
      "titulo": "Justiça em SP bloqueia R$ 128 milhões de Aécio Neves",
      "short_text": "Inquérito apura se deputado do PSDB recebeu pagamentos de Joesley Batista.",
      "image_url": "imgs/lixo2.jpg",
      "full_text": `
      O juiz João Batista Gonçalves, da 6ª Vara Federal Criminal de São Paulo, determinou o bloqueio imediato de R$ 128 milhões do deputado federal Aécio Neves (PSDB-MG). Defesa entrou com recurso.<br><br>
      A decisão atende pedido do Ministério Público Federal e foi tomada no âmbito do inquérito policial que apura pagamento de vantagens indevidas a Aécio Neves pelo empresário Joesley Batista e pelo Grupo J&F em um futuro governo presidencial, além de influência no governo de Minas Gerais para a restituição de créditos de ICMS em favor do Grupo J&F. A medida ainda atinge outras 13 pessoas e empresas.
      `


    },
    {
      "id": 3,
      "titulo": "Doria anuncia monotrilho para ligar CPTM ao Aeroporto de Guarulhos",
      "short_text": "Obra custará R$ 175 milhões e deve ficar pronta em maio de 2021..",
      "image_url": "imgs/ag05.jpg",
      "full_text": `
      O juiz João Batista Gonçalves, da 6ª Vara Federal Criminal de São Paulo, determinou o bloqueio imediato de R$ 128 milhões do deputado federal Aécio Neves (PSDB-MG). Defesa entrou com recurso.<br><br>
      A decisão atende pedido do Ministério Público Federal e foi tomada no âmbito do inquérito policial que apura pagamento de vantagens indevidas a Aécio Neves pelo empresário Joesley Batista e pelo Grupo J&F em um futuro governo presidencial, além de influência no governo de Minas Gerais para a restituição de créditos de ICMS em favor do Grupo J&F. A medida ainda atinge outras 13 pessoas e empresas.
      `


    },
  ]
}


// Caso exista no Local Storage, recupera os dados salvos
function get_db(){
  // var current_db = JSON.parse(localStorage.getItem('db'));
  // if (!current_db) {
  //   current_db = news;
  // };
  current_db = news;
  return current_db;
}


function build_news_page(){
  urlParams = new URLSearchParams(window.location.search);
  id = urlParams.get('id');
  current_db = get_db();
  noticia = current_db.news[id-1];
  $("#single-news-main-block").html("");
  $("#single-news-main-block").append(`
    <h1 class="single-news-title">${noticia.titulo}</h1>
    <img class="media-object main-picture" src="${noticia.image_url}" alt="...">
    <p class="media-description main-text">
    ${noticia.full_text}
    </p>
    `);

  }


  function listarNoticias() {
    // Remove todas as linhas do corpo da tabela
    current_db = get_db();
    console.log(current_db);
    $("#news-main-block").html("");
    // Popula a tabela com os registros do banco de dados
    var i;
    for (i = 0; i < current_db.news.length; i++) {

      noticia = current_db.news[i];
      //parsiona instrumentos
      $("#news-main-block").append(`
        <div class="media">
        <div class="media-left">
        <a href="news.html?id=${noticia.id}">
        <img class="media-object" src="${noticia.image_url}" alt="...">
        </a>
        </div>
        <div class="media-body">
        <h2 class="media-heading">${noticia.titulo}</h2>
        <p class="media-description">${noticia.short_text}</p>
        </div>
        </div>
        `);
        if (i< current_db.news.length-1) {
          $("#news-main-block").append(`<hr>`)
        }
      }
    }
