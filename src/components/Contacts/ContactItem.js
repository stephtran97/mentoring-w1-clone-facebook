import Avatar from "../helper/Avatar";
import styles from "./ContactItem.module.css";

export default function ContactItem({ username, userAvatar, userActive }) {
  return (
    <>
      <div className="d-flex align-items-center mb-2 hover rounded-3 p-2">
        <Avatar
          online={true}
          active={userActive}
          src={userAvatar}
          username={username}
          size={"28px"}
          border={"3px"}
        ></Avatar>
        <span className={`${styles.contactUsername} fw-semibold ms-1`}>
          {username}
        </span>
      </div>
    </>
  );
}
