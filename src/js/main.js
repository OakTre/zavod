import documentReady from "./helpers/documentReady";
import lazyImages from "./modules/lazyImages";
import video from "./modules/video";
import Simplebar from "simplebar"

documentReady(() => {
	lazyImages();
	video();
});
