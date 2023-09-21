import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer id="footer" style={{ fontSize: "12px", lineHeight: "1.2" }}>
      <Container>
        <ul className="d-flex p-0 flex-wrap">
          <li>
            <a href="#">Privacy</a>
            <span> · </span>
          </li>
          <li>
            <a href="#">Terms</a>
            <span> · </span>
          </li>
          <li>
            <a href="#">
              Advertising<span> · </span>
            </a>
          </li>
          <li>
            <a href="#">Ad choices</a>
            <span> · </span>
          </li>
          <li>
            <a href="#">Cookies</a>
            <span> · </span>
          </li>
          <li>
            <a href="#">More</a>
            <span> · </span>
          </li>
          <li>
            <a href="https://github.com/stephtran97" target="_blank">
              stephtran97
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
