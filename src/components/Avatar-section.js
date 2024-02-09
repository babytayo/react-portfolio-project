import omotayopic from "./images/omotayopic.jpg";
import linkedinicon from "./icons/icons8linkedin30.png";
import emailicon from "./icons/icons8email30.png";

export default function Avatar() {
	return (
		<div className=" w-full md:w-2/3 grid grid-cols-1 i justify-center mx-auto md:h-full bg-veryLightcream">
			<div>
				<div>
					<div className=" bg-profilePicBgImg w-full h-44 bg-cover">
						<div className=" w-fit h-fit relative top-24 left-5">
							<img src={omotayopic} alt="omo" className=" rounded-full  " />
						</div>
					</div>
				</div>
				<Mainavatarsection
					name="Oguneko Omotayo John"
					stack="Front-End Developer"
				/>
			</div>
		</div>
	);
}

function Mainavatarsection(props) {
	console.log(props);

	const emailClickHandler = () =>
		(window.location.href = "mailto: ogunekoomotayo@gmail.com");

	const linkedinClickHandler = () =>
		(window.location.href =
			"https://www.linkedin.com/in/oguneko-omotayo-122884260");

	return (
		<div className=" pt-20 pl-2">
			<h1>{props.name}</h1>
			<p>{props.stack}</p>
			<div className="flex py-5 ">
				<button onClick={emailClickHandler} className="profile_btn mr-3">
					<img className="w-5" src={emailicon} alt="icon" /> Email
				</button>
				<button onClick={linkedinClickHandler} className="profile_btn mr-3">
					<img className=" w-5" src={linkedinicon} alt="icon" /> Linkedin
				</button>
				<div className="p-1">...</div>
			</div>
		</div>
	);
}
