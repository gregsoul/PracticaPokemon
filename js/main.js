$(document).ready(function(){

  // Slider
  if(window.location.href.indexOf('index') > -1){
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1000
        
      });
  }

  //Post
  if(window.location.href.indexOf('index') > -1){
    var posts = [
      {
        title: 'Prueba de titulo 1',
        date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies egestas egestas. Aenean ut mi ut dolor placerat varius sed eget velit. Nam feugiat elit ut luctus maximus. Donec mollis nisi nisl, vitae semper lectus volutpat vitae. Nam commodo in augue nec auctor. Curabitur efficitur bibendum elit, at elementum mi imperdiet eu. Pellentesque nunc eros, porttitor id odio sed, hendrerit blandit sem. Nulla tincidunt, ex vitae lobortis auctor, est urna dignissim odio, ac viverra ante nulla sed felis. Etiam suscipit arcu lectus, vitae ullamcorper dui maximus vel. Phasellus at augue sapien. Donec risus dui, laoreet vitae laoreet ac, venenatis non libero. Cras finibus aliquam tincidunt. Donec vel dui augue.'
      },
      {
        title: 'Prueba de titulo 2',
        date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies egestas egestas. Aenean ut mi ut dolor placerat varius sed eget velit. Nam feugiat elit ut luctus maximus. Donec mollis nisi nisl, vitae semper lectus volutpat vitae. Nam commodo in augue nec auctor. Curabitur efficitur bibendum elit, at elementum mi imperdiet eu. Pellentesque nunc eros, porttitor id odio sed, hendrerit blandit sem. Nulla tincidunt, ex vitae lobortis auctor, est urna dignissim odio, ac viverra ante nulla sed felis. Etiam suscipit arcu lectus, vitae ullamcorper dui maximus vel. Phasellus at augue sapien. Donec risus dui, laoreet vitae laoreet ac, venenatis non libero. Cras finibus aliquam tincidunt. Donec vel dui augue.',
      },
      {
        title: 'Prueba de titulo 3',
        date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies egestas egestas. Aenean ut mi ut dolor placerat varius sed eget velit. Nam feugiat elit ut luctus maximus. Donec mollis nisi nisl, vitae semper lectus volutpat vitae. Nam commodo in augue nec auctor. Curabitur efficitur bibendum elit, at elementum mi imperdiet eu. Pellentesque nunc eros, porttitor id odio sed, hendrerit blandit sem. Nulla tincidunt, ex vitae lobortis auctor, est urna dignissim odio, ac viverra ante nulla sed felis. Etiam suscipit arcu lectus, vitae ullamcorper dui maximus vel. Phasellus at augue sapien. Donec risus dui, laoreet vitae laoreet ac, venenatis non libero. Cras finibus aliquam tincidunt. Donec vel dui augue.'
      },
      {
        title: 'Prueba de titulo 4',
        date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies egestas egestas. Aenean ut mi ut dolor placerat varius sed eget velit. Nam feugiat elit ut luctus maximus. Donec mollis nisi nisl, vitae semper lectus volutpat vitae. Nam commodo in augue nec auctor. Curabitur efficitur bibendum elit, at elementum mi imperdiet eu. Pellentesque nunc eros, porttitor id odio sed, hendrerit blandit sem. Nulla tincidunt, ex vitae lobortis auctor, est urna dignissim odio, ac viverra ante nulla sed felis. Etiam suscipit arcu lectus, vitae ullamcorper dui maximus vel. Phasellus at augue sapien. Donec risus dui, laoreet vitae laoreet ac, venenatis non libero. Cras finibus aliquam tincidunt. Donec vel dui augue.'
      },
      {
        title: 'Prueba de titulo 5',
        date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies egestas egestas. Aenean ut mi ut dolor placerat varius sed eget velit. Nam feugiat elit ut luctus maximus. Donec mollis nisi nisl, vitae semper lectus volutpat vitae. Nam commodo in augue nec auctor. Curabitur efficitur bibendum elit, at elementum mi imperdiet eu. Pellentesque nunc eros, porttitor id odio sed, hendrerit blandit sem. Nulla tincidunt, ex vitae lobortis auctor, est urna dignissim odio, ac viverra ante nulla sed felis. Etiam suscipit arcu lectus, vitae ullamcorper dui maximus vel. Phasellus at augue sapien. Donec risus dui, laoreet vitae laoreet ac, venenatis non libero. Cras finibus aliquam tincidunt. Donec vel dui augue.'
      }
    ];
       
    posts.forEach((item, index) => {
      var post = `
        <article class="post">
          <h2>${item.title}</h2>
          <span class="date">${item.date}</span>
            <p>
              ${item.content}
            </p>
            <a href="#" class="boton-more">Leer mas</a>
        </article>
      `;
      $("#posts").append(post);

      });
    }  
    // Selector de tema
    var theme = $("#theme");
      $("#to-purple").click(function(){
        theme.attr("href", "css/purple.css");
      });
      $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
      });
      $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
      });
      $("#to-orange").click(function(){
        theme.attr("href", "css/orange.css");
      });

    //Scroll arriba de la web
    $('.subir').click(function(e){
      e.preventDefault();

      $('html, body').animate({
        scrollTop: 0
      }, 500);

      return false;
    });

    //Login falso
    $("#login form").submit(function(){
      var form_name = $("#form_name").val();

      localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
      var about_parrafo = $("#about p");
          
      about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
      about_parrafo.append("<a href='#' id=logout>Cerrar Sesion</a>");

      $("#login").hide();

      $("#logout").click(function(){
        localStorage.clear();
        location.reload();
      });
    }
    // Acordeon
    if(window.location.href.indexOf('about') > -1){
      $("#acordeon").accordion();
    }

    // Reloj

    if(window.location.href.indexOf('reloj') > -1){

      setInterval(function(){
        var reloj = moment().format("hh:mm:ss");
        $('#reloj').html(reloj);
      },1000);

    }

    // Validaciones 
    if(window.location.href.indexOf('contacto') > -1){

      $("form input[name='date']").datepicker({
        dateFormat: 'dd/mm/yy'
      });

      $.validate({
        lang: 'es'
      });
    }


});