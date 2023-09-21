import styles from "./Wrapper.module.css";
import { Container } from "react-bootstrap";
export default function Wrapper(props) {
  return (
    <Container className={styles.wrapper + " " + props.className}>
      {props.children}
    </Container>
  );
}
