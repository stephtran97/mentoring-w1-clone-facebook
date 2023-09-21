import ContactItem from "./Contacts/ContactItem";

import { BsThreeDots, BsSearch } from "react-icons/bs";
const usersData = [
  {
    username: "Alyssa Watts",
    userAvatar: "./media/user-avatar/avatar1.svg",
    userStory: "./media/user-stories-img/story1.webp",
    userActive: true,
  },
  {
    username: "Dakota Garcia",
    userAvatar: "./media/user-avatar/avatar2.svg",
    userStory: "./media/user-stories-img/story2.webp",
    userActive: false,
  },
  {
    username: "Amelia Blevins",
    userAvatar: "./media/user-avatar/avatar3.svg",
    userStory: "./media/user-stories-img/story3.webp",
    userActive: true,
  },
  {
    username: "Avi Crosby",
    userAvatar: "./media/user-avatar/avatar4.svg",
    userStory: "./media/user-stories-img/story4.webp",
    userActive: false,
  },
  {
    username: "Keily Bush",
    userAvatar: "./media/user-avatar/avatar5.svg",
    userStory: "./media/user-stories-img/story5.webp",
    userActive: false,
  },
  {
    username: "Tyson Sims",
    userAvatar: "./media/user-avatar/avatar6.svg",
    userStory: "./media/user-stories-img/story6.webp",
    userActive: true,
  },
  {
    username: "Lena Buckley",
    userAvatar: "./media/user-avatar/avatar7.svg",
    userStory: "./media/user-stories-img/story7.webp",
    userActive: false,
  },
  {
    username: "Aryan Lawson",
    userAvatar: "./media/user-avatar/avatar8.svg",
    userStory: "./media/user-stories-img/story8.webp",
    userActive: false,
  },
  {
    username: "Phoebe Allen",
    userAvatar: "./media/user-avatar/avatar9.svg",
    userStory: "./media/user-stories-img/story9.webp",
    userActive: true,
  },
  {
    username: "Carter Serrano",
    userAvatar: "./media/user-avatar/avatar10.svg",
    userStory: "./media/user-stories-img/story10.webp",
    userActive: false,
  },
  {
    username: "Allie Cox",
    userAvatar: "./media/user-avatar/avatar11.svg",
    userStory: "./media/user-stories-img/story11.webp",
    userActive: true,
  },
  {
    username: "Connor Jenkins",
    userAvatar: "./media/user-avatar/avatar12.svg",
    userStory: "./media/user-stories-img/story12.webp",
    userActive: false,
  },
  {
    username: "Rylee Avalos",
    userAvatar: "./media/user-avatar/avatar13.svg",
    userStory: "./media/user-stories-img/story13.webp",
    userActive: true,
  },
  {
    username: "Coen Carter",
    userAvatar: "./media/user-avatar/avatar14.svg",
    userStory: "./media/user-stories-img/story14.webp",
    userActive: true,
  },
  {
    username: "Lucy Lara",
    userAvatar: "./media/user-avatar/avatar15.svg",
    userStory: "./media/user-stories-img/story15.webp",
    userActive: false,
  },
  {
    username: "Caiden Franklin",
    userAvatar: "./media/user-avatar/avatar16.svg",
    userStory: "./media/user-stories-img/story16.webp",
    userActive: false,
  },
  {
    username: "Angela Griffith",
    userAvatar: "./media/user-avatar/avatar17.svg",
    userStory: "./media/user-stories-img/story17.webp",
    userActive: true,
  },
  {
    username: "Franklin Barker",
    userAvatar: "./media/user-avatar/avatar18.svg",
    userStory: "./media/user-stories-img/story18.webp",
    userActive: true,
  },
  {
    username: "Remington Hicks",
    userAvatar: "./media/user-avatar/avatar19.svg",
    userStory: "./media/user-stories-img/story19.webp",
    userActive: false,
  },
  {
    username: "Maddox Simon",
    userAvatar: "./media/user-avatar/avatar20.svg",
    userStory: "./media/user-stories-img/story20.webp",
    userActive: true,
  },
  {
    username: "Kalani Fuentes",
    userAvatar: "./media/user-avatar/avatar21.svg",
    userStory: "./media/user-stories-img/story21.webp",
    userActive: false,
  },
];

export default function Contacts() {
  return (
    <section id="contacts">
      <div className="d-flex align-items-center">
        <h6 className="section-title">Contacts</h6>
        <div className="ms-auto">
          <span className="fs-5">
            <BsSearch></BsSearch>
          </span>
          <span className="ms-2 fs-5">
            <BsThreeDots></BsThreeDots>
          </span>
        </div>
      </div>
      <div>
        {usersData.map((element) => {
          return (
            <ContactItem
              key={crypto.randomUUID()}
              username={element.username}
              userAvatar={element.userAvatar}
              userActive={element.userActive}
            ></ContactItem>
          );
        })}
      </div>
    </section>
  );
}
