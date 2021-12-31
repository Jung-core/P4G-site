$(document).ready(function () {
  /* header 고정*/
  $(document).on("scroll", function () {
    if ($(document).scrollTop() > 0) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
    //if ($(document).scrollTop() > 0) {
    // $(".mobile").addClass("fixed");
    //} else {
    // $(".mobile").removeClass("fixed");
    // }
  });

  //언어변경
  var language = $(".language");
  language.on("click", function (event) {
    $(this).toggleClass("active");
    $(this).find(".language_panel").stop(false, true).slideToggle("250"); 
    $('body').click(function(e){
    if($('.language').hasClass('active')){
      if(!$('.language').has(e.target).length){
        $('.language').removeClass('active').find('.language_panel').hide();
      }
     }
    })  
  });
  

  // go_top
  var offset = 100;
  $(".go_top").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $(".go_top").fadeIn(500);
    } else {
      $(".go_top").fadeOut(500);
    }
  });

  $(".go_top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });  
  var ua = window.navigator.userAgent;
  $(document).on("click", ".allMenu", menuCtr); 
  function menuCtr(e) {
      console.log("");
      e.preventDefault();
      $(".allMenu").toggleClass("open");      
      if (ua.indexOf('MSIE 7') > -1 || ua.indexOf('MSIE 8') > -1) {
          $("body").toggleClass("scrollOff");
      } else {
          $("html, body").toggleClass("scrollOff");
      } 

      if (!$(this).hasClass("open")) {
          console.log("if");
          $(".allMenuwraper").stop().animate({ right: '-100%' }, 830);       
          $(".allmenu-container").stop().animate({right:'-960px',width:'0px',opacity:'0'}, 680);
          $(".aside_dim").fadeOut(1500);
          $(".alllist_menuframe").removeClass('active');
          $(".all_toputill").removeClass("active");  
          lm_open = false;

          if (ua.indexOf('MSIE 7') > -1 || ua.indexOf('MSIE 8') > -1) {
              $("html").css({ "height": "100%" });
              $("body").css({ "height": "100%", "overflow": "visible", "position": "static" });
          }
      } else {
          console.log("else");
          $(".allMenuwraper").stop().animate({ right: '0' }, 480);       
          $(".allmenu-container").stop().animate({right:'0',width:'960px',opacity:'1'}, 680);
          $(".aside_dim").fadeIn(1000);
          $(".alllist_menuframe").addClass("active");
          $(".all_toputill").addClass("active");      
        
        
          lm_open = true;
      }
  } 
  
});

//마이페이지 세션 펼치기
$(".slideHead").click(function () {
  $(this).next(".contentMore").stop().slideToggle(300);
  $(this).toggleClass("on").siblings("slideHead").removeClass("on"); 
});

//세션별 리스트 펼치기
  $(".listitle a").click(function () {
    $(this)
      .parent()
      .parent()
      .toggleClass("active")
      .siblings()
      .removeClass("active");
    $(this).addClass("active");
    $(this)
      .parent()
      .parent()
      .next(".content-more")
      .toggleClass("open")
      .siblings(".content-more")
      .removeClass("open");
    return false;
  });

//활동참가자 펼치기
$(".seconDiv").click(function () {
  $(this).parent().toggleClass("on").siblings().removeClass("on");
  //$(this).addClass("on");
  $(this)
    .parent()
    .next(".favoriteManlistmore")
    .toggleClass("open")
    .siblings()
    .removeClass("open");
  return false;
});

//세션연사소개 펼치기
$(".sessionconHead").click(function () {
  $(this).toggleClass("active").siblings().removeClass("active");
  //$(this).addClass("active");
  $(this) 
   
    .next(".sessionContmore")
    .toggleClass("open")
    .siblings()
    .removeClass("open");
  return false;
});

$(".flextdtype02").click(function () {
  $(this).parent().toggleClass("on").siblings().removeClass("on");
  //$(this).addClass("on");
  $(this)
    .parent()
    .next(".mobile-listframe-type02more")
    .toggleClass("open")
    .siblings()
    .removeClass("open");
  return false;
});

/* accordion*/
$(".faq_menu > ul > li").click(function () {
  $(".faq_menu > ul > li").removeClass();
  $(this).addClass("on");
  var mNavDepth = $(this)
    .closest(".faq_menu .faq_depth1 li")
    .children(".faq_menu .depth2");

  if (mNavDepth.filter(":visible").length == 0) {
    mNavDepth.slideDown("fast");
   
  } else {
    mNavDepth.slideUp("fast");
    $(this).removeClass("on");
  }
  $(".faq_menu .depth2").not(mNavDepth).slideUp("fast");
});

/* accordion eng*/
$(".faq_menueng > ul > li").click(function () {
  $(".faq_menueng > ul > li").removeClass();
  $(this).addClass("on");
  var mNavDepthe = $(this)
    .closest(".faq_menueng .faq_depth1 li")
    .children(".faq_menueng .depth2");

  if (mNavDepthe.filter(":visible").length == 0) {
    mNavDepthe.slideDown("fast");
  } else {
    mNavDepthe.slideUp("fast");
    $(this).removeClass("on");
  }
  $(".faq_menueng .depth2").not(mNavDepthe).slideUp("fast");
});



$(document).on("mouseenter", ".iconMenu", utilMenuOv);
$(document).on("mouseleave", ".iconMenu", utilMenuOut);

//main icon hover
function utilMenuOv(e) {
  $thispd = $(this);

  var chk1 = false;
  $(".iconMenu").removeClass("active");

  if ($(this).is(":hidden")) {
    $thispd.removeClass("active");
    chk1 = false;
  } else {
    $thispd.addClass("active");
    chk1 = true;
  }
  if (!chk1) {
    $(this)
      .parent()
      .find(".inner")
      .each(function (idx) {
        //alert('1123'); alert($(this).css("display"));
        if ($(this).css("display") == "block") {
          //alert('in');
          $(this).parent().removeClass("active");
          $(this).parent().find(".inner").hide();
        }
      });
  }
}

function utilMenuOut(e) {
  $thispd = $(this).parent();
  var chk1 = false;
  $(".iconMenu").removeClass("active");
}


// 레이어팝업
function callPop(classId) {
  $(classId).bPopup({});
  $(classId).draggable({ cancel: ".pop-con" }); //레이어 드래그
}
// 영상 레이어팝업
function callMovPop() {
  $("#popMov").bPopup({
    opacity: 1,
    modalColor: "#1f2332",
    //follow: [false, false], x, y position: [0, 0], x, y
    onOpen: function () {
      //$('body,html').animate({    scrollTop: 0 }, 0);
    },
    onClose: function () {
      /*$(".pop-con").empty();*/
      $(".temp_pop").empty();
      //$("html, body").removeClass("ovf_hdn");
    },
  });
}

// layer show
function showHide(layer) {
    if (document.getElementById(layer).style.display == "none") {
        document.getElementById(layer).style.display = "block";
    } else {
        document.getElementById(layer).style.display = "none";
    }
}

