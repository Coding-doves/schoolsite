
//Javacript for responsive menu
const menuBtn = document.getElementById("obi");
const navigation = document.querySelector(".lost");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});



//this jquery code is for the automatic images slider
function slider(){$current = $('.slider img.active');
if($current.length==0){
	$('.slider img:first-child').addClass('active')
}else{
	$next = $current.removeClass('active').next();
	if($next.length==0){
		$('.slider img:first-child').addClass('active');
	}else{
		$next.addClass('active');
	}
	}
}
setInterval(slider,5000);