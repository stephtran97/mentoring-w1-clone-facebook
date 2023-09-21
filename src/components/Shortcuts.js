import Avatar from "./helper/Avatar";
import { Row, Col, Container } from "react-bootstrap";
const userShortcutsData = [
  {
    shortcutName: "Facebook group 1",
    shortcutImage: "./media/user-shortcuts/shortcut1.svg",
  },
  {
    shortcutName: "Facebook group 2",
    shortcutImage: "./media/user-shortcuts/shortcut2.svg",
  },
  {
    shortcutName: "Facebook group 3",
    shortcutImage: "./media/user-shortcuts/shortcut3.svg",
  },
  {
    shortcutName: "Facebook group 4",
    shortcutImage: "./media/user-shortcuts/shortcut4.svg",
  },
  {
    shortcutName: "Facebook group 5",
    shortcutImage: "./media/user-shortcuts/shortcut4.svg",
  },
  {
    shortcutName: "Facebook group 6",
    shortcutImage: "./media/user-shortcuts/shortcut4.svg",
  },
  {
    shortcutName: "Facebook group 7",
    shortcutImage: "./media/user-shortcuts/shortcut4.svg",
  },
  {
    shortcutName: "Facebook group 8",
    shortcutImage: "./media/user-shortcuts/shortcut4.svg",
  },
  {
    shortcutName: "Facebook group 9",
    shortcutImage: "./media/user-shortcuts/shortcut4.svg",
  },
  {
    shortcutName: "Facebook group 10",
    shortcutImage: "./media/user-shortcuts/shortcut4.svg",
  },
  {
    shortcutName: "Facebook group 11",
    shortcutImage: "./media/user-shortcuts/shortcut4.svg",
  },
];

export default function Shortcuts() {
  return (
    <div id="your-shortcuts">
      <Container>
        <h6 className="section-title ps-2">Your shortcuts</h6>
        {userShortcutsData.map((element) => {
          return (
            <div key={crypto.randomUUID()} className="hover rounded-3">
              <Row href="#" className="align-items-center my-1 p-2">
                <Col md={2}>
                  <Avatar
                    src={element.shortcutImage}
                    username={element.shortcutName}
                    size={"28px"}
                  ></Avatar>
                </Col>
                <Col md={10}>
                  <span className={`fw-bold`}>{element.shortcutName}</span>
                </Col>
              </Row>
            </div>
          );
        })}
      </Container>
    </div>
  );
}
