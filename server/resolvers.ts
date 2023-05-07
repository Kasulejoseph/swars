import PeopleAPI from "./datasources";

interface PersonArgs {
  name: string;
}

interface PageArgs {
  page: number;
}

interface DataSources {
  PeopleAPI: PeopleAPI;
}

const resolvers = {
  Query: {
    people: (
      _: any,
      { page = 1 }: PageArgs,
      { dataSources }: { dataSources: DataSources }
    ) => dataSources.PeopleAPI.getAllPeople({ page }),
    person: (
      _: any,
      { name }: PersonArgs,
      { dataSources }: { dataSources: DataSources }
    ) => dataSources.PeopleAPI.getPerson({ name }),
  },
};

export default resolvers;
