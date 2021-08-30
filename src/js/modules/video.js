import { gsap, ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function () {
	const video = document.querySelector(".video");

	let timeline = gsap.timeline();

	setTimeout(function(){
		video.play();
	}, 1500)

	let currentStep = 'start';
	console.log(currentStep);
	let steps = {
		start: {
			time: 9,
			nextStep: 'first'
		},
		first: {
			time: 22.222,
			nextStep: 'second'
		},
		second: {
			time: 29.222,
			nextStep: 'third'
		},
		third: {
			time: 41.71,
			nextStep: 'fourth'
		},
		fourth: {
			time: 100,
			nextStep: 'end'
		},
	};
	video.addEventListener("timeupdate", function(){
		let curTime = this.currentTime;

		if (currentStep) {
			if (curTime > steps[currentStep].time) {
				currentStep = steps[currentStep].nextStep;
				let section = document.querySelector(`.section[data-step="${currentStep}"]`);

				section.classList.add("_active");

				showNextSlide(currentStep);

				console.log(currentStep);

			  	this.pause();
			}
		} else {
			video.stop();
		}
	});

	video.addEventListener("ended", function(){
		// setTimeout(function(){
		// 	againButton.classList.add("_active");
		// }, 200);
	});

	function showNextSlide(step) {
		console.log(step);
		const parent = document.querySelector(`.section[data-step="${step}"]`);
		const currentButton = parent.querySelector(".showNext-button");

		currentButton.addEventListener("click", function(){
			parent.classList.remove("_active");

			setTimeout(function(){
				video.play();
			}, 400)
		});
	}
}
