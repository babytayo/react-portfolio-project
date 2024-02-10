export const Main = (props) => {
	console.log(props);
	return (
		<main className="grid px-2 py-4 md:py-2 md:p-4 lg:p-8 text-sm text-justify">
			<div className="about">
				<h1 className=" leadStyle">
					<b>About</b>
				</h1>
				<p>{props.about}</p>
			</div>

			<div className="stack">
				<h1 className="leadStyle ">
					<b>Stacks</b>
				</h1>
				<p>
					<b>HTML5 : </b>
					HTML, or Hypertext Markup Language, is a markup language for the web
					that defines the structure of web pages.
					<br />
					<br />
					<b>CSS3: </b>
					Stands for "Cascading Style Sheet." CSS is a style sheet language used
					for formatting content in HTML webpages.
					<br />
					<br />
					<b>JavaScript: </b>
					Javascript (JS) is a scripting languages, primarily used on the Web.
					It is used to enhance HTML pages and is commonly found embedded in
					HTML code.
				</p>
				<br />
				<br />
			</div>
			<div className="mb-5 md:mb-3 lg:mb-7">
				<h1 className="leadStyle p-0">
					<br />

					<b>Interests</b>
				</h1>
				<p>Reading, Playing chess, traveling, and coding.</p>
			</div>
			<footer className=" font-bold text-veryLightcream">
				Git <span className=" text-orange-600 font-extrabold"> | </span>Netlify
				<span className=" text-orange-600 font-extrabold"> | </span>Sass
				<span className=" text-orange-600 font-extrabold"> | </span>
				Tailwind
				<span className=" text-orange-600 font-extrabold"> | </span> Reactjs
			</footer>
		</main>
	);
};
