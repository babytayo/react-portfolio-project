export default function Main(props) {
  console.log(props);
  return (
    <main>
      <div className="about">
        <h1>
          <b>About</b>
        </h1>
        <p>{props.about}</p>
      </div>
      <div className="interest">
        <h1>
          <br />

          <b>Interests</b>
        </h1>
        <p>Reading, Playing chess, traveling, and coding.</p>
      </div>
      <br />
      <div className="stack">
        <h1>
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

        <p className="additionalSkills">
          Git | Netlify | Sass | Bootstrap | Tailwind
        </p>
      </div>
    </main>
  );
}
