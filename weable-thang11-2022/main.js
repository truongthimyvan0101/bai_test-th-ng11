( function ( $ ) {
    $(".w-header .navbar .nav-right .navbar-nav .nav-link").each(function (index, elem) {
    $(elem).click(function (e) {
        console.log("abcd")
        $(".w-header .navbar .nav-right .navbar-nav .nav-link.show ").removeClass("show");
        $(elem).addClass("show");
  });
  });
  }( jQuery ) );
// fancyapp
Fancybox.bind('[data-fancybox="gallery"]', {
    dragToClose: false,
  
    Toolbar: false,
    closeButton: "top",
  
    Image: {
      zoom: false,
    },
  
    on: {
      initCarousel: (fancybox) => {
        const slide = fancybox.Carousel.slides[fancybox.Carousel.page];
  
        fancybox.$container.style.setProperty(
          "--bg-image",
          `url("${slide.$thumb.src}")`
        );
      },
      "Carousel.change": (fancybox, carousel, to, from) => {
        const slide = carousel.slides[to];
  
        fancybox.$container.style.setProperty(
          "--bg-image",
          `url("${slide.$thumb.src}")`
        );
      },
    },
  });
  //menu
  $(document).ready(function(){

    $('#toggleOpen').on('click', function() {
        $('.w-header .m-menu .m-navlist').addClass('show');
        $('.w-header .m-menu .overlay').addClass('show');
        })
    $('#toggleClose').on('click', function() {
        $('.w-header .m-menu .m-navlist').removeClass('show');
        $('.w-header .m-menu .overlay').removeClass('show');
    })
    $('.w-header .m-menu .overlay').on('click', function() {
        $('.w-header .m-menu .m-navlist').removeClass('show');
        $('.w-header .m-menu .overlay').removeClass('show');
    })
 });
