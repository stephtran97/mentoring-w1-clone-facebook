import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavigationBar from "./components/NavigationBar";
import Bookmarks from "./components/Bookmarks";
import Shortcuts from "./components/Shortcuts";
import Footer from "./components/Footer";
import Stories from "./components/Stories";
import CreateStatus from "./components/CreateStatus";
import Posts from "./components/Posts";
import Sponsored from "./components/Sponsored";
import Contacts from "./components/Contacts";
import { useState } from "react";

function App() {
  const [hover, setHover] = useState("");
  const [hover1, setHover1] = useState("");

  const unHideScrollBar = () => {
    setHover(true);
  };
  const hideScrollBar = () => {
    setHover(false);
  };
  const unHideScrollBar1 = () => {
    setHover1(true);
  };
  const hideScrollBar1 = () => {
    setHover1(false);
  };
  const scroll = hover === true ? "scroll" : "";
  const scroll1 = hover1 === true ? "scroll" : "";

  return (
    <>
      <NavigationBar></NavigationBar>

      <Container
        fluid
        className="d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center text-white"
        style={{ marginTop: "72px" }}
      >
        <div
          id="bookmarks-and-shortcuts"
          className={`${scroll1} d-none d-lg-block`}
          onMouseEnter={unHideScrollBar1}
          onMouseLeave={hideScrollBar1}
          style={{
            height: "90vh",
            overflowY: "scroll",
          }}
        >
          <Bookmarks></Bookmarks>
          <Shortcuts></Shortcuts>
          <Footer></Footer>
        </div>

        <div
          id="main-posts"
          className="d-flex flex-column align-items-center mx-2"
        >
          <Stories></Stories>
          <CreateStatus></CreateStatus>
          <Posts></Posts>
        </div>

        <div
          id="sponsored-and-contacts"
          className={`d-flex flex-column d-none d-md-block ps-5 ${scroll}`}
          onMouseEnter={unHideScrollBar}
          onMouseLeave={hideScrollBar}
          style={{
            height: "90vh",
            overflowY: "scroll",
          }}
        >
          <Sponsored />
          <Contacts />
        </div>
      </Container>
    </>
  );
}

export default App;
