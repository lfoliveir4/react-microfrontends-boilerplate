import { ReactElement, lazy } from "react";

import Header from "../../components/Header";

const StoryComponent = lazy(() => import("story/Story"));
const PostComponent = lazy(() => import("post/Post"));

import styles from "./feed.module.css";

interface Props {}

export default function Feed({}: Props): ReactElement {
  return (
    <div>
      <Header />
      <div className={styles.feed}>
        <StoryComponent />
        <PostComponent />
      </div>
    </div>
  );
}
