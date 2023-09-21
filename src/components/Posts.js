import styles from "./Posts.module.css";
import PostItem from "./Posts/PostItem";

const userPostsData = [
  {
    username: "Lionel Messi",
    avatar: "./media/user-posts/avatar/avatar1.webp",
    postTime: new Date(),
    postText: "Hello there I am Lionel Messi",
    postImage: "./media/user-posts/post-image/post1.webp",
    postReactionCount: 3500,
    postCommentsCount: 353,
    postSharesCount: 24,
  },
  {
    username: "Cristiano Ronaldo",
    avatar: "./media/user-posts/avatar/avatar1.webp",
    postTime: new Date(),
    postText: "Hello there I am Lionel Messi",
    postImage: "./media/user-posts/post-image/post1.webp",
    postReactionCount: 3500,
    postCommentsCount: 353,
    postSharesCount: 24,
  },
];

export default function Posts() {
  return (
    <section id="posts" style={{ width: "100%" }}>
      {userPostsData.map((element) => {
        return (
          <PostItem
            key={crypto.randomUUID()}
            username={element.username}
            avatar={element.avatar}
            postTime={element.postTime}
            postText={element.postText}
            postImage={element.postImage}
            postReactionCount={element.postReactionCount}
            postCommentsCount={element.postCommentsCount}
            postSharesCount={element.postSharesCount}
          ></PostItem>
        );
      })}
    </section>
  );
}
