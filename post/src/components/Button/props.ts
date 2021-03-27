import { ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
  onClick?: (e: any) => void;
}
