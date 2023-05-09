import Avatar from "./components/Avatar-section";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="cover">
      <div className="app mx-auto">
        <Avatar />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
