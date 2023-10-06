import styles from "./PostItem.module.css";
import Wrapper from "../helper/Wrapper";
import Avatar from "../helper/Avatar";
import { BsThreeDots, BsGlobeAmericas, BsChatLeft } from "react-icons/bs";
import { AiOutlineClose, AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaRegFaceLaughSquint } from "react-icons/fa6";
import { PiShareFatLight } from "react-icons/pi";

export default function PostItem({
  username,
  avatar,
  postTime,
  postText,
  postImage,
  postReactionCount,
  postCommentsCount,
  postSharesCount,
}) {
  return (
    <Wrapper className={`${styles.container} mb-3`}>
      <div className={`${styles.postHeader} d-flex py-2 px-3`}>
        <Avatar size={"32px"} src={avatar}></Avatar>
        <div className="d-flex flex-column ms-2">
          <span className="fw-bold">{username}</span>
          <span>
            {postTime} ·
            <span className="ms-2">
              <BsGlobeAmericas></BsGlobeAmericas>
            </span>
          </span>
        </div>
        <div className="ms-auto fs-5">
          <BsThreeDots></BsThreeDots>
        </div>
        <div className="ms-3 fs-5">
          <AiOutlineClose />
        </div>
      </div>
      <div className={`${styles.postContent}`}>
        <p className="px-3">{postText}</p>
        <img
          className={`${styles.postImage}`}
          src={postImage}
          alt={`${username}'s post image`}
        ></img>
      </div>
      <div className={`${styles.postFooter} px-3`}>
        <div
          className={`${styles.reactionCount} d-flex border-1 border-bottom border-secondary py-2`}
        >
          <div>
            <FaRegFaceLaughSquint fill="yellow"></FaRegFaceLaughSquint>
            <AiFillLike className="ms-1"></AiFillLike>
            <a href="#" className="ms-1">
              {postReactionCount} likes
            </a>
          </div>
          <div className="ms-auto">
            <a href="#">{postCommentsCount} comments</a>
            <a href="#" className="ms-2">
              {postSharesCount} shares
            </a>
          </div>
        </div>
        <div
          className={`${styles.reactionButton} d-flex justify-content-between py-1`}
        >
          <button
            href="#"
            className="d-flex justify-content-center align-items-center"
          >
            <AiOutlineLike></AiOutlineLike>
            <span className="ms-2 fw-semibold">Like</span>
          </button>
          <button
            href="#"
            className="d-flex justify-content-center align-items-center"
          >
            <BsChatLeft></BsChatLeft>
            <span className="ms-2 fw-semibold">Comment</span>
          </button>
          <button
            href="#"
            className="d-flex justify-content-center align-items-center"
          >
            <PiShareFatLight></PiShareFatLight>
            <span className="ms-2 fw-semibold">Share</span>
          </button>
        </div>
      </div>
    </Wrapper>
  );
}
