import { Container, Navbar, Nav } from "react-bootstrap";
import { FaHome, FaVideo, FaShoppingBasket, FaUsers } from "react-icons/fa";
import {
  BsController,
  BsFillGrid3X3GapFill,
  BsMessenger,
  BsFillBellFill,
  BsSearch,
} from "react-icons/bs";
import { BiMenu } from "react-icons/bi";

import Avatar from "./helper/Avatar";
export default function NavigationBar() {
  return (
    <Navbar
      id="navigation-bar"
      className="d-flex text-white py-0 m-0"
      style={{
        width: "100%",
        position: "fixed",
        top: "0",
        zIndex: "100",
      }}
    >
      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
      >
        <div
          className="d-flex flex-row align-items-center"
          style={{ maxWidth: "360px" }}
        >
          <Navbar.Brand href="#">
            <img src="./media/logo.webp" style={{ width: "40px" }}></img>
          </Navbar.Brand>

          <span
            id="nav-bar-search-icon"
            className="d-flex justify-content-center align-items-center bg-lighter-dark"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginRight: "-40px",
              zIndex: "100",
            }}
          >
            <BsSearch></BsSearch>
          </span>
          <input
            type="text"
            placeholder="Search Facebook"
            className="rounded-pill bg-lighter-dark d-none d-xl-block"
            style={{ height: "40px", border: "none", paddingLeft: "40px" }}
          ></input>
        </div>
        <div
          id="icons-bar"
          className="d-flex flex-row justify-content-lg-around"
          style={{
            width: "500px",
          }}
        >
          <Nav.Link
            href="/home"
            className="hover rounded-3 py-3 d-flex justify-content-center d-none d-lg-flex"
            style={{ minWidth: "50px", width: "20%" }}
          >
            <FaHome style={{ width: "24px", height: "24px" }}></FaHome>
          </Nav.Link>

          <Nav.Link
            href="#video"
            className="hover rounded-3 py-3 d-flex justify-content-center d-flex justify-content-center d-none d-lg-flex"
            style={{ minWidth: "50px", width: "20%" }}
          >
            <FaVideo style={{ width: "24px", height: "24px" }}></FaVideo>
          </Nav.Link>

          <Nav.Link
            href="#marketplace"
            className="hover rounded-3 py-3 d-flex justify-content-center d-none d-lg-flex"
            style={{ minWidth: "50px", width: "20%" }}
          >
            <FaShoppingBasket
              style={{ width: "24px", height: "24px" }}
            ></FaShoppingBasket>
          </Nav.Link>

          <Nav.Link
            href="#groups"
            className="hover rounded-3 py-3 d-flex justify-content-center d-none d-lg-flex"
            style={{ minWidth: "50px", width: "20%" }}
          >
            <FaUsers style={{ width: "24px", height: "24px" }}></FaUsers>
          </Nav.Link>

          <Nav.Link
            href="#gaming"
            className="hover rounded-3 py-3 d-flex justify-content-center d-none d-xl-flex"
            style={{ minWidth: "50px", width: "20%" }}
          >
            <BsController
              style={{ width: "24px", height: "24px" }}
            ></BsController>
          </Nav.Link>
          <Nav.Link
            id="nav-bar-sandwich-icon"
            href="#bookmarks"
            className="hover rounded-3 p-2 d-flex justify-content-center d-lg-flex d-xl-none"
            style={{ minWidth: "50px", width: "20%" }}
          >
            <BiMenu style={{ width: "40px", height: "40px" }}></BiMenu>
          </Nav.Link>
        </div>
        <div
          className="d-flex flex-row ms-auto justify-content-end"
          style={{ maxWidth: "360px", minWidth: "280px" }}
        >
          <Nav.Link href="#menu" className="mx-2">
            <BsFillGrid3X3GapFill
              className="bg-lighter-dark p-2 rounded-circle"
              style={{ width: "40px", height: "40px" }}
            ></BsFillGrid3X3GapFill>
          </Nav.Link>
          <Nav.Link href="#messenger" className="mx-2">
            <BsMessenger
              className="bg-lighter-dark p-2 rounded-circle"
              style={{ width: "40px", height: "40px" }}
            ></BsMessenger>
          </Nav.Link>
          <Nav.Link href="#notification" className="mx-2">
            <BsFillBellFill
              className="bg-lighter-dark p-2 rounded-circle"
              style={{ width: "40px", height: "40px" }}
            ></BsFillBellFill>
          </Nav.Link>
          <Nav.Link className="ms-2">
            <Avatar src={"./media/avatar.webp"} size={"40px"}></Avatar>
          </Nav.Link>
        </div>
      </Container>
    </Navbar>
  );
}
