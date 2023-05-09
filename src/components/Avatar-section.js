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
    </div>
  );
}
export default Avatar;
