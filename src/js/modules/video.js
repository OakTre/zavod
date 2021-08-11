export default function () {
	const video = document.querySelector(".video");

	// let currentStep = 'first';
	// let steps = {
	// 	first: {
	// 		time: 4.77,
	// 		nextStep: 'second'
	// 	},
	// 	second: {
	// 		time: 11.29,
	// 		nextStep: 'third'
	// 	},
	// 	third: {
	// 		time: 16.85,
	// 		nextStep: 'thourth'
	// 	},
	// 	thourth: {
	// 		time: 20.71,
	// 		nextStep: 'fifth'
	// 	},
	// 	fifth: {
	// 		time: 100,
	// 		nextStep: 'end'
	// 	}
	// };
	// video.addEventListener("timeupdate", function(){
	// 	let curTime = this.currentTime;

	// 	if (currentStep) {
	// 		if (curTime > steps[currentStep].time) {
	// 		  currentStep = steps[currentStep].nextStep;

	// 		  document.querySelector(`.morgan-title[data-text="${currentStep}"]`).classList.add("_active");

	// 		  hideText(currentStep);

	// 		  this.pause();
	// 		}
	// 	} else {
	// 		video.stop();
	// 	}
	// });

	// function hideText(step) {
	// 	const parent = document.querySelector(`.morgan-title[data-text="${step}"]`);
	// 	const currentButton = parent.querySelector(".main-button");

	// 	currentButton.addEventListener("click", function(){
	// 		parent.classList.remove("_active");
	// 		video.play();
	// 	});
	// }
}
