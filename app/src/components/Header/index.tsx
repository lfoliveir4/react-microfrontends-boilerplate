import { ReactElement } from "react";

import styles from "./header.module.css";

export default function Header(): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          src="https://logosmarcas.net/wp-content/uploads/2020/04/Instagram-Logo.png"
          alt="Instagram"
          className={styles.logo}
        />

        <img
          className={styles.profile}
          src="https://avatars.githubusercontent.com/u/32423942?s=460&u=149996226f770aea4ad663800fee2bb922a5036e&v=4"
          alt="profile"
        />
      </div>
    </div>
  );
}
