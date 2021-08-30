export default function () {
	const video = document.querySelector(".video");

	setTimeout(function(){
		video.play();
	}, 1500)

	let currentStep = 'start';
	console.log(currentStep);
	let steps = {
		start: {
			time: 8.224,
			nextStep: 'first'
		},
		first: {
			time: 23.222,
			nextStep: 'second'
		},
		second: {
			time: 28.222,
			nextStep: 'third'
		},
		third: {
			time: 36.71,
			nextStep: 'fourth'
		},
		fourth: {
			time: 100,
			nextStep: 'end'
		}
	};
	video.addEventListener("timeupdate", function(){
		let curTime = this.currentTime;

		if (currentStep) {
			if (curTime > steps[currentStep].time) {
			  currentStep = steps[currentStep].nextStep;

			  setTimeout(function(){
				document.querySelector(`.section[data-step="${currentStep}"]`).classList.add("_active");
			  }, 300)

				showNextSlide(currentStep);

				console.log(currentStep);

			  this.pause();
			}
		} else {
			video.stop();
		}
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
