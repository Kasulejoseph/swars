import { RESTDataSource } from "apollo-datasource-rest";

interface PersonType {
    name: string;
    mass: string;
    height: string;
    gender: string;
    homeworld: string;
};

interface PageArgs {
    page: number;
}

interface PersonArgs {
    name: string;
}

class PeopleAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://swapi.dev/api/";
    }

    async getAllPeople({ page }: PageArgs) {
        const { results } = await this.get("people", { page });
        return results.map((result: PersonType) => this.peopleReducer(result));
    }

    async getPerson({ name }: PersonArgs) {
        const { results } = await this.get("people");
        const person = results.filter((result: any) => {
            return result.name == name;
        });
        return person.map((person: PersonType) => this.peopleReducer(person));
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
