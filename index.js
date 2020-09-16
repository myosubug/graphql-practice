import { GraphQLServer } from "graphql-yoga";

const server = new GraphQLServer({
    //will add schema here
});

server.start(() => console.log("server runnnning"));