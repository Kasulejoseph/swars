import { ApolloServer } from "apollo-server";
import typeDefs from "../models/schema";
import resolvers from "../resolvers";
import PeopleAPI from "../datasources";

export default new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        PeopleAPI: new PeopleAPI()
    })
})