import Avatar from "./helper/Avatar";
import { Row, Col, Container } from "react-bootstrap";
const userShortcutsData = [
  {
    shortcutName: "J2TEAM Community",
    shortcutImage: "./media/user-shortcuts/shortcut1.webp",
  },
  {
    shortcutName: "Cộng đồng React Việt Nam",
    shortcutImage: "./media/user-shortcuts/shortcut2.webp",
  },
  {
    shortcutName: "Maybe You Missed This F***king News",
    shortcutImage: "./media/user-shortcuts/shortcut3.webp",
  },
  {
    shortcutName: "Cộng đồng NodeJS Việt Nam",
    shortcutImage: "./media/user-shortcuts/shortcut4.webp",
  },
  {
    shortcutName: "Maybe You Never Watched This Movie",
    shortcutImage: "./media/user-shortcuts/shortcut5.webp",
  },
  {
    shortcutName: "Vựa 2nd",
    shortcutImage: "./media/user-shortcuts/shortcut6.webp",
  },
  {
    shortcutName: "GenZ đếch sợ IELTS",
    shortcutImage: "./media/user-shortcuts/shortcut7.webp",
  },
  {
    shortcutName: "Đảo Mèo",
    shortcutImage: "./media/user-shortcuts/shortcut8.webp",
  },
  {
    shortcutName: "Đì Va Quanh Ta Group",
    shortcutImage: "./media/user-shortcuts/shortcut9.webp",
  },
  {
    shortcutName: "CS50",
    shortcutImage: "./media/user-shortcuts/shortcut10.webp",
  },
  {
    shortcutName: "OFFB",
    shortcutImage: "./media/user-shortcuts/shortcut11.webp",
  },
  {
    shortcutName: "Cộng đồng Javascript Việt Nam",
    shortcutImage: "./media/user-shortcuts/shortcut12.webp",
  },
  {
    shortcutName: "Cộng đồng NextJS",
    shortcutImage: "./media/user-shortcuts/shortcut13.webp",
  },
  {
    shortcutName: "UI UX Figma Group",
    shortcutImage: "./media/user-shortcuts/shortcut14.webp",
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
