import { AvatarSection } from "./components/AvatarSection";
import { Main } from "./components/Main";

export const App = () => {
	return (
		<div className="bg-overallBgImg bg-cover h-fit md:h-screen font-Poppins text-sm text-gray-800">
			<div className=" bg-overBgOpacity h-fit md:h-full">
				<div className=" grid md:grid-cols-2 h-full">
					<AvatarSection />
					<Main
						about="I'm Oguneko Omotayo John by Name. A certified Electrical technician,
          and a Front-end website developer. I'm a fresh graduate of Psychology from the Nigerian Army university Biu, borno state."
					/>
				</div>
			</div>
		</div>
	);
};
