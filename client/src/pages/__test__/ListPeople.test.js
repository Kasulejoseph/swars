import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { GET_PEOPLE_QUERY } from "../../utils/swarsQuery";
import { ListPeople } from "../ListPeople";

jest.mock("react-responsive-pagination", () => {
  const ResponsivePagination = () => null; // mock the component
  return ResponsivePagination;
});

const mocks = [
  {
    request: {
      query: GET_PEOPLE_QUERY,
      variables: { page: 1 },
    },
    result: {
      data: {
        people: {
          count: 3,
          next: "link",
          previous: "linl",
          people: [
            {
              name: "Luke Skywalker",
              height: "172",
              mass: "77",
              gender: "Male",
              homeworld: "link",
            },
            {
              name: "C-3PO",
              height: "167",
              mass: "75",
              gender: "Female",
              homeworld: "link",
            },
            {
              name: "R2-D2",
              height: "96",
              mass: "32",
              gender: "n/a",
              homeworld: "link",
            },
          ],
        },
      },
    },
  },
];

describe("ListPeople", () => {
  afterEach(cleanup);
  it("should render loading state", async () => {
    render(
      <MockedProvider mocks={mocks}>
        <ListPeople />
      </MockedProvider>
    );

    const loaderElement = screen.getByText("Loading");
    expect(loaderElement).toBeInTheDocument();
  });

  it("should display error message when there's an error", async () => {
    const errorMock = {
      request: {
        query: GET_PEOPLE_QUERY,
        variables: { page: 1 },
      },
      error: new Error("Something went wrong!"),
    };

    render(
      <MockedProvider mocks={[errorMock]} addTypename={false}>
        <ListPeople />
      </MockedProvider>
    );

    const errorMessageElement = await screen.findByText(
      "Something went wrong!"
    );
    expect(errorMessageElement).toBeInTheDocument();
  });
});
