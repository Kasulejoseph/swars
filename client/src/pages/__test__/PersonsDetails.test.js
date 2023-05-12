import { cleanup, render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { useLocation, useNavigate } from "react-router-dom";
import { GET_PERSON_QUERY } from "../../utils/swarsQuery";
import { PersonsDetails } from "../PersonsDetails";
jest.mock("react-router-dom", () => ({
  useLocation: jest.fn(),
  useNavigate: jest.fn(),
}));

const mockData = {
  person: [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      gender: "male",
      homeworld: "link",
    },
  ],
};

const mocks = [
  {
    request: {
      query: GET_PERSON_QUERY,
      variables: { name: "Luke Skywalker" },
    },
    result: {
      data: mockData,
    },
  },
];

describe("PersonDetails", () => {
  beforeEach(() => {
    useLocation.mockReturnValue({ state: { name: "Luke Skywalker" } });
    useNavigate.mockReturnValue(jest.fn());
  });

  afterEach(cleanup);

  it("should render loader while data is being fetched", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <PersonsDetails />
      </MockedProvider>
    );
    expect(screen.getByText("Loading")).toBeInTheDocument();
  });

  it("should render PersonDetailsCard with fetched data when loading is complete", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <PersonsDetails />
      </MockedProvider>
    );
    await new Promise((resolve) => setTimeout(resolve, 3000));
    expect(screen.getByText("go back")).toBeInTheDocument();
    expect(
      screen.getByText(`Name: ${mockData.person[0].name}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Height: ${mockData.person[0].height}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Mass: ${mockData.person[0].mass}`)
    ).toBeInTheDocument();
  });

  it("should render error message if an error occurs", async () => {
    const errorMessage = "Something went wrong!";
    const errorMocks = [
      {
        request: {
          query: GET_PERSON_QUERY,
          variables: { name: "Luke Skywalker" },
        },
        error: new Error(errorMessage),
      },
    ];

    render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <PersonsDetails />
      </MockedProvider>
    );
    // wait for data to be fetched
    await new Promise((resolve) => setTimeout(resolve, 3000));
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
