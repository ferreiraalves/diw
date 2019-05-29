


  function listarNoticias() {
      $(document).ready(function() {
      $.ajax({
          url: "https://newsapi.org/v2/top-headlines?country=br&apiKey=7fa479d04a5548d98ada1e6a9d5201f7&pageSize=5"
      }).then(function(data) {
          console.log(data);
          $("#news-main-block-ajax").html("")
          artigos = data.articles;
          for (var i = 0; i < artigos.length; i++) {

            artigo = artigos[i];
            if (artigo.content == null) {
              conteudo = "Conteudo não disponível"
            }else {
              conteudo = artigo.content
            }


            //parsiona instrumentos
            $("#news-main-block-ajax").append(`
              <div class="media">
              <div class="media-left">
              <a href="${artigo.url}">
              <img class="media-object fixed-size-image" src="${artigo.urlToImage}" alt="...">
              </a>
              </div>
              <div class="media-body">
              <h2 class="media-heading">${artigo.title}</h2>
              <p class="media-description">${conteudo}</p>
              </div>
              </div>
              `);
              if (i < artigos.length-1) {
                $("#news-main-block-ajax").append(`<hr>`)
              }


          }
      });
  });
  }
