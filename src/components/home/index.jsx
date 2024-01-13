import "./home.scss";
export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content"></div>
      <div className="home-image">
        <div className="overlay"></div>
        <img src={process.env.PUBLIC_URL + "/image.png"} alt="" />
      </div>
    </div>
  );
}
