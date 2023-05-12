import omotayopic from "./images/omotayopic.jpg";
import linkedinicon from "./icons/icons8linkedin30.png";
import emailicon from "./icons/icons8email30.png";

export default function Avatar() {
  return (
    <div className="avatarSection">
      <div className="backPic"></div>
      <div className="image">
        <img src={omotayopic} alt="omo" />
      </div>
      <Mainavatarsection
        name="Oguneko Omotayo John"
        stack="Front-End Developer"
      />
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
    <div className="Mainavatarsection">
      <h1>{props.name}</h1>
      <p>{props.stack}</p>
      <div className="Buttonwrap">
        <button onClick={emailClickHandler}>
          <img className="btnicon" src={emailicon} alt="icon" /> Email
        </button>
        <button onClick={linkedinClickHandler}>
          <img className="btnicon" src={linkedinicon} alt="icon" /> Linkedin
        </button>
        <div className="lastbtn">...</div>
      </div>
    </div>
  );
}
