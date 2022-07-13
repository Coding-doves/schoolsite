	const track = document.querySelector('.carousel-list');
	const slides = Array.from(track.children);
	const nextButton = document.querySelector('.right');
	const prevButton = document.querySelector('.left');
	const dotsNav = document.querySelector('.carousel-nav');
	const dots = Array.from(dotsNav.children);


	const slideWidth = slides[0].getBoundingClientRect().width;



	// this is also a short code to the above. this is set in a function
	const setSlidePosition = (slide, index) => {
		slide.style.left = slideWidth * index + 'px';
	}
	slides.forEach(setSlidePosition);



	const moveToSlide = (track, currentSlide, targetSlide) => {
		track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
		currentSlide.classList.remove('current');
		targetSlide.classList.add('current');
	}

	const updateDots = () => {
		currentDot.classList.remove('current');
		targetDot.classList.add('current');

	}

	//when i click left move slide to the left
	prevButton.addEventListener('click', e =>{
		const currentSlide = track.querySelector('.current');
		const prevSlide = currentSlide.previousElementSibling;
		moveToSlide(track, currentSlide, prevSlide);

	});




	//when i click right move slide to the right
	nextButton.addEventListener('click', e => {
		const currentSlide = track.querySelector('.current');
		const nextSlide = currentSlide.nextElementSibling;
		// const amountToMove = nextSlide.style.left;

 
		moveToSlide(track, currentSlide, nextSlide);
	});




	// when i click the nav indicators,move to that slide

	dotsNav.addEventListener('click', e => {
		const targetDot = e.target.closest('button');

		if (!targetDot) return;

		const currentSlide = track.querySelector('current');
		const currentDot = dotsNav.querySelector('current');
		const targetIndex = dots.findIndex(dot => dot === targetDot);
		const targetSlide = slides[targetIndex];

		moveToSlide(track, currentSlide, targetSlide);

		
	});

	$(document).ready(function(){
		$("#open").click(function(){
			$("#close").slideToggle("slow");
		});
		$("#open1").click(function(){
			$("#close1").slideToggle("slow");
		});
	});

