
  var slides = document.querySelectorAll('.slide');
  var btns = document.querySelectorAll('.btn');
  let currentSlide = 1;

  // Javascript for image slider manual navigation
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

  // Javascript for image slider autoplay navigation
  var repeat = function(activeClass){
	let active = document.getElementsByClassName('active');
	let i = 1;

	var repeater = () => {
	  setTimeout(function(){
		[...active].forEach((activeSlide) => {
		  activeSlide.classList.remove('active');
		});

	  slides[i].classList.add('active');
	  btns[i].classList.add('active');
	  i++;

	  if(slides.length == i){
		i = 0;
	  }
	  if(i >= slides.length){
		return;
	  }
	  repeater();
	}, 5000);
	}
	repeater();
  }
  repeat();

 const galleryItems=document.querySelector(".gallery-items").children;
 const prev=document.querySelector(".prev");
 const next=document.querySelector(".next");
 const page=document.querySelector(".page-num");
 const maxItem=16;
 let index=1;
  
  const pagination=Math.ceil(galleryItems.length/maxItem);
  console.log(pagination)

  prev.addEventListener("click",function(){
    index--;
    check();
    showItems();
  })
  next.addEventListener("click",function(){
  	index++;
  	check();
    showItems();  
  })

  function check(){
  	 if(index==pagination){
  	 	next.classList.add("disabled");
  	 }
  	 else{
  	   next.classList.remove("disabled");	
  	 }

  	 if(index==1){
  	 	prev.classList.add("disabled");
  	 }
  	 else{
  	   prev.classList.remove("disabled");	
  	 }
  }

  function showItems() {
  	 for(let i=0;i<galleryItems.length; i++){
  	 	galleryItems[i].classList.remove("show");
  	 	galleryItems[i].classList.add("hide");


  	    if(i>=(index*maxItem)-maxItem && i<index*maxItem){
  	 	  // if i greater than and equal to (index*maxItem)-maxItem;
  		  // means  (1*8)-8=0 if index=2 then (2*8)-8=8
          galleryItems[i].classList.remove("hide");
          galleryItems[i].classList.add("show");
  	    }
  	    page.innerHTML=index;
  	 }

  	 	
  }

  window.onload=function(){
  	showItems();
  	check();
  }








