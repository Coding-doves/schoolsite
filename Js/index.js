
//for menu, onscroll, change background
window.addEventListener('scroll', function () {
	let header = document.querySelector('header');
	let windowPosition = window.scrollY > 0;
	header.classList.toggle('scrolling-active', windowPosition);
});

//Javacript for responsive menu
const menuBtn = document.getElementById("obi");
const navigation = document.querySelector(".lost");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

// Javascript for image slider manual navigation

var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

var manualNav = function(manual){
  slides.forEach((slide) => {
	slide.classList.remove('active');

	btns.forEach((btn) => {
	  btn.classList.remove('active');
	});
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
	manualNav(i);
	currentSlide = i;
  });
});

  //this jquery code is for the automatic images slider
function slider(){$current = $('.slider div.active');
if($current.length==0){
	$('.slider div:first-child').addClass('active')
}else{
	$next = $current.removeClass('active').next();
	if($next.length==0){
		$('.slider div:first-child').addClass('active');
	}else{
		$next.addClass('active');
	}
	}
}setInterval(slider,5000);


//REVEAL ELEMENTS ON SCROLL
window.addEventListener('scroll', reveal);

function reveal(){
	var reveals = document.querySelectorAll('.reveal');

	for (let i = 0; i < reveals.length; i++) {

	var windowheight = window.innerHeight;
	var revealtop = reveals[i].getBoundingClientRect().top;
	var revealpoint = 100;

	if(revealtop < windowheight - revealpoint){
		reveals[i].classList.add('mine')
	}else{
		reveals[i].classList.remove('mine');
	}
	
	}
}
//this jquery code is for the images to rotate
$(document).ready(function(){
	$('.slide').hiSlide();
	$('#mySlide').hiSlide();
	
});
$(document).ready(function(){
	
	$('.slide-1').hiSlide();
	$('#mySlide-1').hiSlide();
	$('.slide-2').hiSlide();
	$('#mySlide-2').hiSlide();
	
});
$(document).ready(function(){
	$('.slide-3').hiSlide();
	$('#mySlide-3').hiSlide();
	$('.slide-4').hiSlide();
	$('#mySlide-4').hiSlide();
});




