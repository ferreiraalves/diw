// Caso exista no Local Storage, recupera os dados salvos
function get_db(){
  var current_db = JSON.parse(localStorage.getItem('news'));
  if (!current_db) {
    current_db = news;
  };
  return current_db;
}


function getNoticias(){
  $(document).ready(function() {
    $.ajax({
      url: "https://newsapi.org/v2/top-headlines?country=br&apiKey=7fa479d04a5548d98ada1e6a9d5201f7&pageSize=10"
    }).then(function(data) {
      artigos = data.articles;
      var news = []
      for (var i = 0; i < artigos.length; i++) {

        artigo = artigos[i];
        if (artigo.content == null) {
          conteudo = "Conteudo não disponível"
        }else {
          conteudo = artigo.content
        }
        nova_news  = {
          "id": i,
          "titulo": artigo.title,
          "short_text": artigo.description,
          "image_url": artigo.urlToImage,
          "full_text": conteudo,
          "url": artigo.url
        }
        news.push(nova_news)

      }
      // Atualiza os dados no Local Storage
      localStorage.setItem('news', JSON.stringify(news));
      listarNoticiasAjax();

    });
  });
}

function goToNoticia(id){
  location.href = `news-ajax.html?id=${id}`;
}


function listarNoticiasAjax() {
  current_db = get_db();
  console.log(current_db);
  $("#news-main-block-ajax").html("");
  // Popula a tabela com os registros do banco de dados
  var i;
  for (i = 0; i < current_db.length; i++) {
    noticia = current_db[i];
    $("#news-main-block-ajax").append(`
      <div class="media">
      <div class="media-left">
      <a href="news-ajax.html?id=${noticia.id}">
      <img class="media-object fixed-size-image" src="${noticia.image_url}" alt="...">
      </a>
      </div>
      <div class="media-body">
      <a href="news-ajax.html?id=${noticia.id}" style="text-decoration: none;">
      <h2 class="media-heading">${noticia.titulo}</h2>
      </a>
      <p class="media-description">${noticia.short_text}</p>
      </div>
      </div>
      `);
      if (i < current_db.length-1) {
        $("#news-main-block-ajax").append(`<hr>`)
      }
    }

}



function build_news_page_ajax(){
  urlParams = new URLSearchParams(window.location.search);
  id = urlParams.get('id');
  current_db = get_db();
  noticia = current_db[id];
  $("#single-news-main-block-ajax").html("");
  $("#single-news-main-block-ajax").append(`
    <h1 class="single-news-title">${noticia.titulo}</h1>
    <a href="${noticia.url}">
    <img class="media-object main-picture" src="${noticia.image_url}" alt="...">
    </a>
    <p class="media-description main-text">
    ${noticia.full_text}
    </p>
    `);

}
