import { render } from "@testing-library/react";
import Header from "../components/Header";

describe("<Header />", () => {
  it("should be able render header", () => {
    const header = render(<Header />);

    expect(header).toBeTruthy();
  });
});
