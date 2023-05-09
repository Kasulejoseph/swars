import { render, cleanup, screen } from "@testing-library/react";
import Loader from "../Loader";

describe("Render loader", () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);
  it("should render loading component correctly", () => {
    render(<Loader />);
    expect(screen.getByText("Loading")).toBeInTheDocument();
  });
});
