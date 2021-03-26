import { render } from "@testing-library/react";
import Post from "../components/Post";

describe("<Post />", () => {
  it("should be able render post", () => {
    const post = render(<Post />);

    expect(post).toBeTruthy();
  });
});
