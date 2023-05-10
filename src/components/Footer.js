import twitter from "./icons8twittersquared64.png";
import facebook from "./icons8facebook50.png";
import github from "./icons8github64.png";
import instagram from "./icons8instagram50.png";

function Footer() {
  return (
    <footer>
      <img className="twittericon" src={twitter} alt="footerIcon" />
      <img className="icon" src={facebook} alt="footerIcon" />
      <img className="icon" src={github} alt="footerIcon" />
      <img className="icon" src={instagram} alt="footerIcon" />
    </footer>
  );
}

export default Footer;
