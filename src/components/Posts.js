import styles from "./Posts.module.css";
import PostItem from "./Posts/PostItem";

const userPostsData = [
  {
    username: "Lionel Messi",
    avatar: "./media/user-posts/avatar/avatar1.webp",
    postTime: "7h",
    postText: "First day in Miami!",
    postImage: "./media/user-posts/post-image/post1.webp",
    postReactionCount: 8979,
    postCommentsCount: 353,
    postSharesCount: 300,
  },
  {
    username: "Cristiano Ronaldo",
    avatar: "./media/user-posts/avatar/avatar2.webp",
    postTime: "10h",
    postText: "What a winning!",
    postImage: "./media/user-posts/post-image/post2.webp",
    postReactionCount: 7689,
    postCommentsCount: 200,
    postSharesCount: 158,
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
