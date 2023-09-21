import Story from "./Stories/Story";
import styles from "./Stories.module.css";
import { BsChevronRight } from "react-icons/bs";
const usersData = [
  {
    username: "Alyssa Watts",
    userAvatar: "./media/user-avatar/avatar1.svg",
    userStory: "./media/user-stories-img/story1.webp",
  },
  {
    username: "Dakota Garcia",
    userAvatar: "./media/user-avatar/avatar2.svg",
    userStory: "./media/user-stories-img/story2.webp",
  },
  {
    username: "Amelia Blevins",
    userAvatar: "./media/user-avatar/avatar3.svg",
    userStory: "./media/user-stories-img/story3.webp",
  },
  {
    username: "Avi Crosby",
    userAvatar: "./media/user-avatar/avatar4.svg",
    userStory: "./media/user-stories-img/story4.webp",
  },
  {
    username: "Keily Bush",
    userAvatar: "./media/user-avatar/avatar5.svg",
    userStory: "./media/user-stories-img/story5.webp",
  },
  {
    username: "Tyson Sims",
    userAvatar: "./media/user-avatar/avatar6.svg",
    userStory: "./media/user-stories-img/story6.webp",
  },
  {
    username: "Lena Buckley",
    userAvatar: "./media/user-avatar/avatar7.svg",
    userStory: "./media/user-stories-img/story7.webp",
  },
  {
    username: "Aryan Lawson",
    userAvatar: "./media/user-avatar/avatar8.svg",
    userStory: "./media/user-stories-img/story8.webp",
  },
  {
    username: "Phoebe Allen",
    userAvatar: "./media/user-avatar/avatar9.svg",
    userStory: "./media/user-stories-img/story9.webp",
  },
  {
    username: "Carter Serrano",
    userAvatar: "./media/user-avatar/avatar10.svg",
    userStory: "./media/user-stories-img/story10.webp",
  },
  {
    username: "Allie Cox",
    userAvatar: "./media/user-avatar/avatar11.svg",
    userStory: "./media/user-stories-img/story11.webp",
  },
  {
    username: "Connor Jenkins",
    userAvatar: "./media/user-avatar/avatar12.svg",
    userStory: "./media/user-stories-img/story12.webp",
  },
  {
    username: "Rylee Avalos",
    userAvatar: "./media/user-avatar/avatar13.svg",
    userStory: "./media/user-stories-img/story13.webp",
  },
  {
    username: "Coen Carter",
    userAvatar: "./media/user-avatar/avatar14.svg",
    userStory: "./media/user-stories-img/story14.webp",
  },
  {
    username: "Lucy Lara",
    userAvatar: "./media/user-avatar/avatar15.svg",
    userStory: "./media/user-stories-img/story15.webp",
  },
  {
    username: "Caiden Franklin",
    userAvatar: "./media/user-avatar/avatar16.svg",
    userStory: "./media/user-stories-img/story16.webp",
  },
  {
    username: "Angela Griffith",
    userAvatar: "./media/user-avatar/avatar17.svg",
    userStory: "./media/user-stories-img/story17.webp",
  },
  {
    username: "Franklin Barker",
    userAvatar: "./media/user-avatar/avatar18.svg",
    userStory: "./media/user-stories-img/story18.webp",
  },
  {
    username: "Remington Hicks",
    userAvatar: "./media/user-avatar/avatar19.svg",
    userStory: "./media/user-stories-img/story19.webp",
  },
  {
    username: "Maddox Simon",
    userAvatar: "./media/user-avatar/avatar20.svg",
    userStory: "./media/user-stories-img/story20.webp",
  },
  {
    username: "Kalani Fuentes",
    userAvatar: "./media/user-avatar/avatar21.svg",
    userStory: "./media/user-stories-img/story21.webp",
  },
];

export default function Stories() {
  return (
    <section
      className={`${styles.container} d-flex mb-3`}
      style={{ width: "100%" }}
    >
      <Story
        title="Create story"
        src="./media/avatar.webp"
        createStory={true}
      ></Story>
      {usersData.map((element) => {
        return (
          <Story
            key={crypto.randomUUID()}
            title={element.username}
            avatarSrc={element.userAvatar}
            src={element.userStory}
          ></Story>
        );
      })}
      <div className={styles.nextButton}>
        <BsChevronRight></BsChevronRight>
      </div>
    </section>
  );
}
