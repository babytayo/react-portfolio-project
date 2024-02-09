import twittericon from "./icons/icons8twittersquared64.png";
import facebookicon from "./icons/icons8facebook50.png";
import githubicon from "./icons/icons8github64.png";
import instagramicon from "./icons/icons8instagram50.png";

export default function Footer() {
	const twitterLink = () =>
		(window.location.href = "https://www.twitter.com/@babytayo3");
	const facebookLink = () =>
		(window.location.href = "https://www.facebook.com/oguneko-omotayo");
	const githubLink = () =>
		(window.location.href = "https://github.com/babytayo?tab=repositories");

	const instagramLink = () =>
		(window.location.href = "https://www.instagram.com/cmr_babytayo/");

	return (
		<footer className="flex">
			<img
				className="twittericon"
				src={twittericon}
				alt="footerIcon"
				onClick={twitterLink}
			/>
			<img
				className="icon"
				src={facebookicon}
				alt="footerIcon"
				onClick={facebookLink}
			/>
			<img
				className="icon"
				src={githubicon}
				alt="footerIcon"
				onClick={githubLink}
			/>
			<img
				className="icon"
				src={instagramicon}
				alt="footerIcon"
				onClick={instagramLink}
			/>
		</footer>
	);
}
