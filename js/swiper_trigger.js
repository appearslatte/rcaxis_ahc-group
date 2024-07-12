var mySwiper = new Swiper ('.mv_slider1', {
    loop:true,
    speed:1500,
    slidesPerView:1,
    spaceBetween:0,
    direction:'horizontal',
    effect:'slide',
    centeredSlides:true,
    loopAdditionalSlides:1,
    allowTouchMove:false,
    autoplay: {
      delay: 3000, 
      stopOnLast:false,
      disableOnInteraction:true
    },
    
    breakpoints: {
        1000: {
        slidesPerView: 1,
        direction: 'horizontal'
        },
    },
  });

  var mySwiper = new Swiper ('.mv_slider2', {
    loop:true,
    speed:1500,
    slidesPerView:1,
    spaceBetween:0,
    direction:'horizontal',
    effect:'slide',
    centeredSlides:true,
    loopAdditionalSlides:1,
    allowTouchMove:false,
    autoplay: {
      delay: 3000, 
      stopOnLast:false,
      reverseDirection:true,
      disableOnInteraction:true
    },
    
    breakpoints: {
        1000: {
        slidesPerView: 1,
        direction: 'horizontal'
        },
    },
  });

  var mySwiper = new Swiper ('.mv_slider3', {
    loop:true,
    speed:1500,
    slidesPerView:1,
    spaceBetween:0,
    direction:'horizontal',
    effect:'slide',
    centeredSlides:true,
    loopAdditionalSlides:1,
    allowTouchMove:false,
    autoplay: {
      delay: 3000, 
      stopOnLast:false,
      disableOnInteraction:true
    },
    
    breakpoints: {
        1000: {
        slidesPerView: 1,
        direction: 'horizontal'
        },
    },
  });
  
  


  var mySwiper = new Swiper ('.scene_slider', {
    loop:true,
    speed:600,
    slidesPerView:4,
    spaceBetween:0,
    direction:'horizontal',
    effect:'slide',
    centeredSlides:true,
    loopAdditionalSlides:1,
    autoplay: {
      delay: 3000, 
      stopOnLast:false,
      disableOnInteraction:true
    },
    

    breakpoints: {
        1000: {
        slidesPerView: 1.4,
        direction: 'horizontal'
        },
    },

    pagination: {
      el: '.swiper-pagination',　 // ページネーションを表示するセレクタ
    },

    navigation: {
      nextEl: '.swiper-button-next', // 次のスライドボタンのセレクタ
      prevEl: '.swiper-button-prev', // 前のスライドボタンのセレクタ
    },

    scrollbar: {
      el: '.swiper-scrollbar', // スクロールバーを表示するセレクタ
    }
  });
  
  