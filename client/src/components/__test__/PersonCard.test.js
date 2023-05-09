import { render, cleanup, screen } from "@testing-library/react";
import PersonCard from "../PersonCard";
import { MemoryRouter } from "react-router-dom";

const personData = {
  name: "Joe Doe",
  mass: "23",
  height: "14",
  gender: "Male",
  homeworld: "link",
};

describe("PersonCard", () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);
  it("renders person name, height and mass", () => {
    render(
      <MemoryRouter>
        <PersonCard person={personData} />
      </MemoryRouter>
    );
    expect(screen.getByText(personData.name)).toBeInTheDocument();
    expect(
      screen.getByText(`Height: ${personData.height}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`Mass: ${personData.mass}`)).toBeInTheDocument();
  });
});
