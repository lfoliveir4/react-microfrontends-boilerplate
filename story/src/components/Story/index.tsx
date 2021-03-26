import { ReactElement, useState } from "react";

import styles from "./story.module.css";

import storys from "../../utils/storys.json";

interface Story {
  avatar: string;
  name: string;
}

export default function Story(): ReactElement {
  return (
    <div className={styles.container}>
      {storys.map((s: Story) => (
        <div key={s.name} className={styles.containerAvatar}>
          <div className={styles.containerImageAvatar}>
            <img className={styles.avatar} src={s.avatar} alt={s.name} />
          </div>
          <p className={styles.nickname}>{s.name}</p>
        </div>
      ))}
    </div>
  );
}
