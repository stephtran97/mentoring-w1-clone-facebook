import styles from "./StoryCard.module.css";

export default function StoryCard(props) {
  return (
    <div className={styles.storyCard + " " + props.className}>
      {props.children}
    </div>
  );
}
