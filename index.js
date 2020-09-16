import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
const server = new GraphQLServer({
    //will add schema here
    typeDefs: "graphql/schema.graphql",
    resolvers
});

server.start(() => console.log("server runnnning"));