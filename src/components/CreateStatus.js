import { Form, Container } from "react-bootstrap";
import Avatar from "./helper/Avatar";
import { SlCamrecorder } from "react-icons/sl";
import { HiMiniPhoto } from "react-icons/hi2";
import { MdInsertEmoticon } from "react-icons/md";
import Wrapper from "./helper/Wrapper";

import styles from "./CreateStatus.module.css";

export default function CreateStatus() {
  return (
    <section id="create-status" className="d-flex" style={{ width: "100%" }}>
      <Wrapper className="mb-3 px-3 py-2">
        <Container className="d-flex align-items-center px-1 py-2 border-1 border-bottom border-secondary">
          <Avatar src={"./media/avatar.webp"} size={"32px"}></Avatar>

          <Container className="pe-0 ">
            <Form.Control
              type="text"
              placeholder="What's on your mind?"
              className={`${styles.statusInput} border-0 rounded-5 py-1`}
            ></Form.Control>
          </Container>
        </Container>

        <Container className="d-flex justify-content-around align-items-center mt-2">
          <button
            className={`${styles.actionButton} d-flex justify-content-center align-items-center py-2`}
          >
            <SlCamrecorder fill="red" className="fs-5" />
            <span className="ms-1 text-secondary fw-bold">Live video</span>
          </button>
          <button
            className={`${styles.actionButton} d-flex justify-content-center align-items-center py-2`}
          >
            <HiMiniPhoto fill="green" className="fs-5" />
            <span className="ms-1 text-secondary fw-bold">Photo/video</span>
          </button>
          <button
            className={`${styles.actionButton} d-flex justify-content-center align-items-center py-2`}
            style={{ minWidth: "130px" }}
          >
            <MdInsertEmoticon fill="yellow" className="fs-5" />
            <span className="ms-1 text-secondary fw-bold">
              Feeling/activity
            </span>
          </button>
        </Container>
      </Wrapper>
    </section>
  );
}
