import api from "../api";
import { beforeAll, afterAll, describe, expect, it } from "@jest/globals";

beforeAll(() => api.listen({ port: 4001 }));
afterAll(() => api.stop());

describe("GraphQL API", () => {
  it("should return a list of people", async () => {
    const response = await api.executeOperation({
      query: `
      query {
        people {
          next,
          previous,
          count,
          people {
            name,
            height,
            mass,
            homeworld,
            gender
          }
        }
      }
    `,
    });
    expect(response.errors).toBeUndefined();
    expect(response.data).toHaveProperty("people");
    expect(response.data?.people.people).toBeInstanceOf(Array);
  });

  it("should return a person by name", async () => {
    const response = await api.executeOperation({
      query: `
    query {
      person(name: "R5-D4") {
        name,
        height,
        mass,
        homeworld,
        gender
      }
    }
  `,
    });
    expect(response.data).toHaveProperty("person");
    expect(response.data?.person).toBeInstanceOf(Array);
    expect(response.data?.person[0].name).toEqual("R5-D4");
  });
});
