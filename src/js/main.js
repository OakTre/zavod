import documentReady from "./helpers/documentReady";
import lazyImages from "./modules/lazyImages";
import video from "./modules/video";
import Simplebar from "simplebar"
import { initPrlx } from "./modules/paralax";

documentReady(() => {
	lazyImages();
	video();
	initPrlx();

	const buttonPrimary = document.querySelectorAll(".button-primary");

	buttonPrimary.forEach(function(el){
		el.addEventListener("mouseenter", function(){
			el.querySelector(".button-primary__hover").style.width="100%";
			el.querySelector(".button-primary__hover").style.right="auto";
			el.querySelector(".button-primary__hover").style.left="0";
		})
		el.addEventListener("mouseleave", function(){
			el.querySelector(".button-primary__hover").style.width="0";
			el.querySelector(".button-primary__hover").style.right="0";
			el.querySelector(".button-primary__hover").style.left="auto";
		})
	});
});
