//this is jQuery for the first list div that is open
$(document).ready(function(){

$("#flip").click(function(){
    $("#panel").slideToggle("slow");
});

$("#flip1").click(function(){
    $("#panel1").slideToggle("slow");
});
$("#flip2").click(function(){
    $("#panel2").slideToggle("slow");
});
$("#open").click(function(){
    $("#close").slideToggle("slow");
});
$("#open1").click(function(){
    $("#close1").slideToggle("slow");
});
$("#open2").click(function(){
    $("#close2").slideToggle("slow");
});
$("#open3").click(function(){
    $("#close3").slideToggle("slow");
});
$("#open4").click(function(){
    $("#close4").slideToggle("slow");
});
$("#open5").click(function(){
    $("#close5").slideToggle("slow");
});
$("#open6").click(function(){
    $("#close6").slideToggle("slow");
});
$("#open7").click(function(){
    $("#close7").slideToggle("slow");
});
$("#open8").click(function(){
    $("#close8").slideToggle("slow");
});

$("#open9").click(function(){
    $("#close9").slideToggle("slow");
});
$("#open10").click(function(){
    $("#close10").slideToggle("slow");
});
$("#open11").click(function(){
    $("#close11").slideToggle("slow");
});
$("#open12").click(function(){
    $("#close12").slideToggle("slow");
});
$("#open13").click(function(){
    $("#close13").slideToggle("slow");
});
$("#open14").click(function(){
    $("#close14").slideToggle("slow");
});
$("#open15").click(function(){
    $("#close15").slideToggle("slow");
});
$("#open16").click(function(){
    $("#close16").slideToggle("slow");
});
$("#open17").click(function(){
    $("#close17").slideToggle("slow");
});
$("#open18").click(function(){
    $("#close18").slideToggle("slow");
});
$("#open19").click(function(){
    $("#close19").slideToggle("slow");
});
$("#open20").click(function(){
    $("#close20").slideToggle("slow");
});
$("#open21").click(function(){
    $("#close21").slideToggle("slow");
});
$("#open22").click(function(){
    $("#close22").slideToggle("slow");
});
});

//this is javascript for the div that is on display none
var obi = document.getElementById('flip1');

obi.onclick = function(){
	var list = document.getElementsById('panel1');
	if (list.style.display==='none') {
	list.style.display=('block');
}else{
	list.style.display=('none');
}
}

//Javacript for responsive navigation menu
    const menuBtn = document.querySelector(".menu-btn");
    const navigation = document.querySelector(".navigation");

    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navigation.classList.toggle("active");
    });

    //Javacript for video slider navigation
    const btns = document.querySelectorAll(".nav-btn");
    const slides = document.querySelectorAll(".video-slide");
    const contents = document.querySelectorAll(".content");

    var sliderNav = function(manual){
      btns.forEach((btn) => {
        btn.classList.remove("active");
      });

      slides.forEach((slide) => {
        slide.classList.remove("active");
      });

      contents.forEach((content) => {
        content.classList.remove("active");
      });

      btns[manual].classList.add("active");
      slides[manual].classList.add("active");
      contents[manual].classList.add("active");
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        sliderNav(i);
      });
    });