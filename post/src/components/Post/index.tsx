import { ReactElement } from "react";

import styles from "./post.module.css";

import posts from "../../utils/posts.json";

interface Post {
  name: string;
  avatar: string;
  photo: string;
  status: string;
}

export default function Post(): ReactElement {
  return (
    <div className={styles.container}>
      {posts.map((post: Post) => (
        <div className={styles.containerPost}>
          <div className={styles.postHeaderContainer}>
            <img
              className={styles.postHeaderImage}
              src={post.avatar}
              alt={post.name}
            />

            <p className={styles.postHeaderNickname}>{post.name}</p>
          </div>

          <div className={styles.containerImagePost}>
            <img className={styles.postImage} src={post.photo} alt="" />
          </div>

          <div className={styles.postFooterContainer}>
            <span className={styles.postFooterNickName}>{post.name}</span>
            <p className={styles.postFooterStatus}>{post.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
