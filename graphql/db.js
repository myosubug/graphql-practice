let people = [
    {   
        id: 1,
        school: "ucalgary",
        name: "sean"
    },
    {
        id: 2,
        school: "utoronto",
        name: "john"
    },
    {
        id: 3,
        school: "ubc",
        name: "tom"
    }
];

export const getPeople = () => people;


export const getById = id =>{
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
};

export const addPerson = (name, school) => {
    const newPerson = {
        id: `${people.length+1}`,
        name,
        school
    }
    people.push(newPerson);
    return newPerson;
};


export const deletePerson = id =>{
    const deletingPerson = people.filter(people => people.id !== id);
    if (people.length > deletingPerson.length) {
        people = deletingPerson;
        return true;
    } else {
        return false;
    }
};