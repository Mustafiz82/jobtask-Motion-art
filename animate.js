// Lenis is used for smooth scrolling

const lenis = new Lenis();

lenis.on("scroll", (e) => {
	console.log(e);
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
	lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);



// Animating All The header Text 

const splitType = document.querySelectorAll(".animateHeadline");

console.log(splitType);

splitType.forEach((char, i) => {
	const text = new SplitType(char, { types: " chars" });
	console.log(text.chars);

	gsap.from(text.chars, {
		scrollTrigger: {
			trigger: text.chars,
			scrub: true,
			start: "top 90%",
			end: "top 40%",
		},
		y: 20,
		opacity: 0.1,
		scale: 0.5,
		stagger: 0.1,
	});

});


//  Animating Apply on any section or any page ----------


// Animating Apply on any section 

const animateOnApplySectionImage = document.getElementById(
	"animate-apply-on-section-image"
);


gsap.from(animateOnApplySectionImage, {
	scrollTrigger: {
		trigger: animateOnApplySectionImage,
		scrub: true,
		start: "top 80%",
		end: "top 50%",
	},
	opacity: 0.1,
	scale: 0.25,
	stagger: 0.1,
});


// Animating Apply on any Page 


const animateOnApplyPageImage = document.getElementById(
	"animate-apply-on-page-image"
);

gsap.to(animateOnApplyPageImage, {
	scrollTrigger: {
		trigger: animateOnApplyPageImage,
		scrub: true,
		start: "top 10%",
		end: "top 0%",
	},
	opacity: 0.1,
	scale: 0.25,
	stagger: 0.1,
});



const imageOfRatings = document.querySelectorAll(".image-of-rating");

console.log(imageOfRatings);

imageOfRatings.forEach((imageOfRating, i) => {
	const imageOfRatingsTimeline = gsap.timeline({
		scrollTrigger: {
			trigger: imageOfRating,
			start: "top 90%",
			end: "top 70%",
			scrub: true,
		},
	});

	imageOfRatingsTimeline
		.fromTo(
			imageOfRating,
			{ scale: 0.25, opacity: 0.3  , zIndex : "99"},
			{ scale: 1, opacity: 1, duration: 0.5 }
		)
		.fromTo(
			".rating",
			{ x: -200 ,opacity : 0 , zIndex : -99 },
			{ x : 0,opacity :1 , duration: 1 }
		);
});


// Animating Cursor image 

gsap.from("#cursorImage", {
  y: 50,
  repeat: -1, 
  yoyo: true, 
  duration: 2, 
  ease: "power1.inOut" 
});


// Animating Supported by All popular Browser Section 

const animateSupport = document.getElementById("animate-support");

const tl = gsap.timeline({
	scrollTrigger: {
		trigger: animateSupport,
		start: "top 70%",
		end: "top 40%",
		scrub: true,
	},
});

tl.fromTo(animateSupport, { margin: "auto" }, { duration: 0.5 })
	.fromTo(animateSupport, { height: 0 }, { height: "300px", duration: 1 })
	.fromTo(
		animateSupport,
		{ width: 0, color: "transparent" },
		{ width: "100%", color: "white", duration: 1 }
	);



// Animating all  round Plugin with powerful Feature Section

const animateDivs = document.querySelectorAll(".animate-div");
const animateDivParent = document.getElementById("parent-animate-div");


animateDivs.forEach((animateDiv, i) => {
	gsap.from(animateDiv, {
		scrollTrigger: {
			trigger: animateDiv,
			scrub: true,
			start: "top 90%",
			end: "top 50%",
		},
		y: 20,
		opacity: 0.1,
		scale: 0.5,
		stagger: 0.1,
	});
});