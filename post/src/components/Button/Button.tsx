import { ReactElement } from "react";

import { ButtonProps } from "./props";

const styles = {
  border: "1px solid #eee",
  borderRadius: 3,
  backgroundColor: "#FFFFFF",
  cursor: "pointer",
  fontSize: 15,
  padding: "3px 10px",
  margin: 10,
};

export default function Button({
  children,
  onClick,
}: ButtonProps): ReactElement {
  return (
    <button style={styles} onClick={onClick} type="button">
      {children}
    </button>
  );
}
