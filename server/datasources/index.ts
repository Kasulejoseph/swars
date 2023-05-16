import { RESTDataSource } from "apollo-datasource-rest";
require('dotenv').config()
// Temp Fix: will ensure you ignore any rejected TLS certificates
// this is not a recommended solution
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
interface PersonType {
  name: string;
  mass: string;
  height: string;
  gender: string;
  homeworld: string;
}

interface PageArgs {
  page: number;
}

interface PersonArgs {
  name: string;
}

class PeopleAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.BASE_URL;
  }

  async getAllPeople({ page }: PageArgs) {
    const { results, next, previous } = await this.get("people", { page });
    const responseObj = {
      next,
      previous,
      count: results.length,
      people: results.map((result: PersonType) => this.peopleReducer(result)),
    };

    return responseObj;
  }

  async getPerson({ name }: PersonArgs) {
    const { results } = await this.get("people", { search: name });
    return results.map((person: PersonType) => this.peopleReducer(person));
  }

  peopleReducer({ name, height, mass, gender, homeworld }: PersonType) {
    return {
      name,
      height,
      mass,
      gender,
      homeworld,
    };
  }
}

export default PeopleAPI;
