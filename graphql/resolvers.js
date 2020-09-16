//resolver resolves queries

const sean = {
    school: "ucalgary",
    name: "sean"
};


const resolvers = {
    Query: {
        person:() => sean
    }
};


export default resolvers;