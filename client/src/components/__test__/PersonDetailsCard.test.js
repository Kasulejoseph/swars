import { render, cleanup, screen } from "@testing-library/react";
import PersonDetailsCard from "../PersonDetailsCard";

const personData = [
  {
    name: "Joe Doe",
    mass: "23",
    height: "14",
    gender: "Male",
    homeworld: "link",
  },
];

describe("PersonDetailsCard", () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);
  it("renders person name, height and mass", () => {
    render(<PersonDetailsCard person={personData} />);
    expect(screen.getByText(`Name: ${personData[0].name}`)).toBeInTheDocument();
    expect(
      screen.getByText(`Height: ${personData[0].height}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`Mass: ${personData[0].mass}`)).toBeInTheDocument();
  });
});
