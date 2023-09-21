import { Col, Container, Row } from "react-bootstrap";
import Avatar from "./helper/Avatar";
import {
  FaUserFriends,
  FaUsers,
  FaVideo,
  FaShoppingBasket,
} from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { FcClock, FcBookmark } from "react-icons/fc";

import styles from "./Bookmarks.module.css";

export default function Bookmarks({ className }) {
  return (
    <>
      <div id="bookmarks" className={`${className}`}>
        <Container>
          <div className="border-1 border-bottom border-secondary pb-2 mb-2">
            <div className="hover rounded-3">
              <Row href="#" className="align-items-center my-1 p-2">
                <Col md={3}>
                  <Avatar src={"./media/avatar.webp"} size={"28px"}></Avatar>
                </Col>
                <Col md={9} style={{ marginLeft: "calc(-100% * 1 / 12)" }}>
                  <span className={`${styles.bookmarkTitle} fw-bold`}>
                    Trần Đức Thịnh
                  </span>
                </Col>
              </Row>
            </div>

            <div className="hover rounded-3">
              <Row href="#" className="align-items-center p-2">
                <Col md={2}>
                  <FaUserFriends className="fs-3"></FaUserFriends>
                </Col>
                <Col md={10}>
                  <span className={`${styles.bookmarkTitle} fw-bold`}>
                    Friends
                  </span>
                </Col>
              </Row>
            </div>

            <div className="hover rounded-3">
              <Row href="#" className="align-items-center p-2">
                <Col md={2}>
                  <FcClock className="fs-3"></FcClock>
                </Col>
                <Col md={10}>
                  <span className={`${styles.bookmarkTitle} fw-bold`}>
                    Memories
                  </span>
                </Col>
              </Row>
            </div>
            <div className="hover rounded-3">
              <Row href="#" className="align-items-center p-2">
                <Col md={2}>
                  <FcBookmark className="fs-3"></FcBookmark>
                </Col>
                <Col md={10}>
                  <span className={`${styles.bookmarkTitle} fw-bold`}>
                    Saved
                  </span>
                </Col>
              </Row>
            </div>

            <div className="hover rounded-3">
              <Row href="#" className="align-items-center p-2">
                <Col md={2}>
                  <FaUsers className="fs-3"></FaUsers>
                </Col>
                <Col md={10}>
                  <span className={`${styles.bookmarkTitle} fw-bold`}>
                    Groups
                  </span>
                </Col>
              </Row>
            </div>

            <div className="hover rounded-3">
              <Row href="#" className="align-items-center p-2">
                <Col md={2}>
                  <FaVideo className="fs-3"></FaVideo>
                </Col>
                <Col md={10}>
                  <span className={`${styles.bookmarkTitle} fw-bold`}>
                    Video
                  </span>
                </Col>
              </Row>
            </div>

            <div className="hover rounded-3">
              <Row href="#" className="align-items-center p-2">
                <Col md={2}>
                  <FaShoppingBasket className="fs-3"></FaShoppingBasket>
                </Col>
                <Col md={10}>
                  <span className={`${styles.bookmarkTitle} fw-bold`}>
                    Marketplace
                  </span>
                </Col>
              </Row>
            </div>

            <div className="hover rounded-3">
              <Row href="#" className="align-items-center p-2">
                <Col md={2}>
                  <BsChevronDown className="p-1 fw-bold fs-3 bg-lighter-dark rounded-5"></BsChevronDown>
                </Col>
                <Col md={10}>
                  <span className={`${styles.bookmarkTitle} fw-bold`}>
                    See more
                  </span>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
        <footer></footer>
      </div>
    </>
  );
}
