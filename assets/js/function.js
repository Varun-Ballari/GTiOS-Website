var elem = document.querySelector('.js-switch');
var switchery = new Switchery(elem, { size: 'small', color: '#ff5857', secondaryColor: '#7f27cd', jackColor: '#f3f3f3', jackSecondaryColor: '#f3f3f3' });
var changeCheckbox = document.querySelector('.js-check-change')
  , changeField = document.querySelector('.js-check-change-field');

changeCheckbox.onchange = function() {
      if (changeCheckbox.checked) {
          $('.main').css('background-color', 'rgba(255, 69, 59, 0.8)');
          $('.background').css('-webkit-filter', 'blur(0px)');
          $('.background').css('-moz-filter', 'blur(0px)');
          $('.background').css('-ms-filter', 'blur(0px)');
          $('.background').css('filter', 'blur(0px)');

          $('.siri').css('opacity', '0');
          $('.siri').offset({ top: 0, left: 10});

          setTimeout(function(){
              $('.title').css('opacity', '1');
              $('.title').offset({ top: 0, left: 10});
          }, 750);

          $('#SS1').animate({opacity: '0', marginTop: '+=15px'});
          $('#SS2').animate({opacity: '0', marginTop: '+=15px'});
          $('#SS3').animate({opacity: '0', marginTop: '+=15px'});
          $('#SS4').animate({opacity: '0', marginTop: '+=15px'});
          $('#SS5').animate({opacity: '0', marginTop: '+=15px'});
          $('#SS6').animate({opacity: '0', marginTop: '+=15px'});

      } else {
          $('.main').css('background-color', 'rgba(66, 58, 79, 0.7)');
          $('.background').css('-webkit-filter', 'blur(5px)');
          $('.background').css('-moz-filter', 'blur(5px)');
          $('.background').css('-ms-filter', 'blur(5px)');
          $('.background').css('filter', 'blur(5px)');

          $('.title').css('opacity', '0');
          $('.title').offset({ top: 0, left: -10});

          setTimeout(function(){
              $('.siri').css('opacity', '1');
              $('.siri').offset({ top: 0, left: -10});
          }, 750);

          setTimeout(function() {
              $('#SS1').animate({opacity: '1', marginTop: '-=15px'});
              $('#SS2').animate({opacity: '1', marginTop: '-=15px'});
          }, 1750);

          setTimeout(function() {
              $('#SS3').animate({opacity: '1', marginTop: '-=15px'});
          }, 3750);

          setTimeout(function() {
              $('#SS4').animate({opacity: '1', marginTop: '-=15px'});
              $('#SS5').animate({opacity: '1', marginTop: '-=15px'});
              $('#SS6').animate({opacity: '1', marginTop: '-=15px'});
          }, 5000);
      }
};

getDataFromOfficers(officers);
function getDataFromOfficers(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<li><div class="circlebox"><p id="circle" style="background-image: url(' + arr[i].pic + ')"></p></div>' +
                '<div class="name">' + arr[i].firstName + " " + arr[i].lastName + '</div>' +
                '<div class="job">' + arr[i].job + '</div></li>';
    }
    document.getElementById("officer-data").innerHTML = out;
}

getDataFromSchedule(schedule);
function getDataFromSchedule(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += `<div class="scBoxWrapper">
            <div class = "scBox">
                <div class = "scSide1">
                    <div class = "scDate">
                        <div class ="date">` + arr[i].date + `</div>
                        <div class ="month">` + arr[i].month + `</div>
                    </div>
                    <div class = "scClassInfo">
                        <div class="className">` + arr[i].topic + `</div>
                        <div class="classInfo">` + arr[i].subtopic + `</div>
                    </div>
                </div>
                <div class = "scSide2" style ="background-image: url(` + arr[i].pic + `)"></div>
            </div>
        </div>`;
    }
    document.getElementById("scheduleList").innerHTML = out;
}

window.addEventListener('resize', function(event){
    var elmnt = document.getElementById("long-page");
    var maxX = elmnt.offsetWidth;
    console.log(maxX);

});

$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('header');
   var offset = startchange.offset();

   $('#SS1').animate({opacity: '0', marginTop: '+=15px'});
   $('#SS2').animate({opacity: '0', marginTop: '+=15px'});
   $('#SS3').animate({opacity: '0', marginTop: '+=15px'});
   $('#SS4').animate({opacity: '0', marginTop: '+=15px'});
   $('#SS5').animate({opacity: '0', marginTop: '+=15px'});
   $('#SS6').animate({opacity: '0', marginTop: '+=15px'});

   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
         $('.nav').css('background-color', 'rgba(242,242,242,1)');
         $('.nav').css('box-shadow', '0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.2)');
         $('header ul li a').css('color', 'rgba(255, 56, 40, 0.8)');

         $('.main').css('background-color', 'rgba(255, 69, 59, 0)');

         $("#email").attr("src","assets/images/emailRed.png");
         $("#facebook").attr("src","assets/images/facebookRed.png");
         $("#github").attr("src","assets/images/githubRed.png");
         $("#headerLogo").attr("src","assets/images/headerlogoRed.png");

         switchery.disable();

       } else {
         $('.nav').css('background-color', 'rgba(242,242,242,0)');
         $('.nav').css('box-shadow', '0 0px 0px 0 rgba(0, 0, 0, 0), 0 0px 0px 0 rgba(0, 0, 0, 0)');
         $('header ul li a').css('color', 'rgba(255, 255, 255, 0.8)');

         $("#email").attr("src","assets/images/emailWhite.png");
         $("#facebook").attr("src","assets/images/facebookWhite.png");
         $("#github").attr("src","assets/images/githubWhite.png");
         $("#headerLogo").attr("src","assets/images/headerlogo.png");

         $('.main').css('background-color', 'rgba(255, 69, 59, 0.8)');

        //  if($('.background').css('filter') == 'blur(5px)') {
        //      console.log("hi");
        //      $('.main').css('background-color', 'rgba(255, 69, 59, 0.8)');
        //  } else {
        //      console.log("hi");
        //      $('.main').css('background-color', 'rgba(66, 58, 79, 0.7)');
        //  }
         switchery.enable();
       }
   });
});
