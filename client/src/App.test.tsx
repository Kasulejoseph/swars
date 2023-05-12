import { render, screen } from "@testing-library/react";
import { PageProvider } from "./context";
import App from "./App";
import { MockedProvider } from "@apollo/client/testing";
import { GET_PEOPLE_QUERY } from "./utils/swarsQuery";

jest.mock("react-responsive-pagination", () => {
  const ResponsivePagination = () => null; // mock ResponsivePagination component
  return ResponsivePagination;
});

describe("App", () => {
  test("renders ListPeople component when the path is '/'", async () => {
    const mocks = [
      {
        request: {
          query: GET_PEOPLE_QUERY,
          variables: { page: 1 },
        },
        result: {
          data: {
            people: {
              people: [
                {
                  name: "Luke Skywalker",
                  height: "172",
                  mass: "77",
                  gender: "male",
                  homeworld: "link",
                },
              ],
            },
          },
        },
      },
    ];

    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <PageProvider>
          <App />
        </PageProvider>
      </MockedProvider>
    );
    await new Promise((resolve) => setTimeout(resolve, 3000));

    expect(getByText("All Characters")).toBeInTheDocument();

    const characterElements = screen.getAllByTestId("person-card");
    expect(characterElements).toHaveLength(1);
  });
});
