import "./App.css";
import logo from "./logo.png";
function App() {
  return (
    // Convert this code into JSX
    <div>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title">Your name here</h1>
        <br />
        //img in src folder.
        <img src={logo} alt="src img" />
        <br />
        // the public img
        <img src="/img/publicimg.png" alt="public  img"></img>
      </div>
      <video width={320} height={240} controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
