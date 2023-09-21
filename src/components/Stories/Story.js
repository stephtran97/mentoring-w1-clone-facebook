import styles from "./Story.module.css";
import Avatar from "../helper/Avatar";
import StoryCard from "./StoryCard";

import { AiOutlinePlus } from "react-icons/ai";

export default function Story({ title, src, avatarSrc, createStory }) {
  return (
    <StoryCard className={`${styles.storyItem} text-white`}>
      {!createStory ? (
        <>
          <img
            src={src}
            alt={`${title}'s story`}
            className={styles.imgOverlay}
          />
          <Avatar
            username={title}
            src={avatarSrc}
            size={"40px"}
            active={true}
            className={styles.avatar}
            border={"5px"}
          ></Avatar>
          <h6 className={styles.title}>{title}</h6>
        </>
      ) : (
        <>
          <img
            src={src}
            alt={`Create story`}
            className={styles.imgOverlayCreate}
          />
          <div
            className={`${styles.divCreateStory} bg-lighter-dark d-flex justify-content-center align-items-center`}
          >
            <span
              className={`${styles.addButton} d-flex justify-content-center align-items-center bg-primary`}
            >
              <AiOutlinePlus></AiOutlinePlus>
            </span>
          </div>
          <div
            className={`d-flex justify-content-center ${styles.createStoryTitle}`}
          >
            <h6 className={styles.createStoryTitle}>{title}</h6>
          </div>
        </>
      )}
    </StoryCard>
  );
}
