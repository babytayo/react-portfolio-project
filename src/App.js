import Avatar from "./components/Avatar-section";
import Main from "./components/Main";

import "./App.css";

function App() {
	return (
		<div className=" bg-overallBgImg bg-cover h-fit md:h-screen font-Poppins text-sm text-black">
			<div className=" bg-overBgOpacity2 h-fit md:h-screen">
				<div className=" grid md:grid-cols-2 h-full">
					<Avatar />
					<Main
						about="I'm Oguneko Omotayo John by Name. A certified Electrical technician,
          and a Website developer. I'm currently a 400L student of Psychology
          studying at the Nigerian Army university Biu, borno state."
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
