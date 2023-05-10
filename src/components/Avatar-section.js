import omotayopic from "./omotayopic.jpg";
import linkedinicon from "./icons8linkedin30.png";
import emailicon from "./icons8email30.png";

function Avatar() {
  return (
    <div className="avatarSection">
      <div className="backPic"></div>
      <div className="image">
        <img src={omotayopic} alt="omo" />
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
        <button>
          <img className="btnicon" src={emailicon} alt="icon" /> Email
        </button>
        <button>
          <img className="btnicon" src={linkedinicon} alt="icon" /> Linkedin
        </button>
        <div className="lastbtn">...</div>
      </div>
    </div>
  );
}
export default Avatar;
