import omotayopic from "./omotayopic.jpg";

function Omotayo(props) {
  const Omo = <img src={omotayopic} alt="omo" />;

  return Omo;
}

function Avatar() {
  return (
    <div className="avatarSection">
      <div className="backPic"></div>
      <div className="image">
        <Omotayo />
      </div>
      <Mainavatarsection />
    </div>
  );
}

function Mainavatarsection() {
  return (
    <div className="Mainavatarsection">
      <h1>Oguneko Omotayo John</h1>
      <p>Front-End Developer</p>
      <div className="Buttonwrap">
        <button>Email</button>
        <button>Linkedin</button>
        <div className="lastbtn">...</div>
      </div>
    </div>
  );
}
export default Avatar;
