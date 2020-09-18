//resolver resolves queries

import {people, getById, addPerson} from "./db";


const resolvers = {
    Query: {
        people: () => people,
        person: (_, {id}) => getById(id)
    },
    Mutation:{
        addPerson: (_, {name, school}) => addPerson(name, school)
    }
};


export default resolvers;