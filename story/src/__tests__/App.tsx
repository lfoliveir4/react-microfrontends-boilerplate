import { render } from "@testing-library/react";
import Story from "../components/Story";

describe("<Story />", () => {
  it("should be able render story", () => {
    const post = render(<Story />);

    expect(post).toBeTruthy();
  });
});
