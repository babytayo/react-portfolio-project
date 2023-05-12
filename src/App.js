import Avatar from "./components/Avatar-section";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="cover">
      <div className="app mx-auto">
        <Avatar />
        <Main
          about="I'm Oguneko Omotayo John by Name. A certified Electrical technician,
          and a Website developer. I'm currently a 400L student of Psychology
          studying at the Nigerian Army university Biu, borno state."
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
