import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";

import AppRoutes from "./routes";

import "./styles/global.module.css";

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
