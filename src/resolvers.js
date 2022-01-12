const people = [
  {
    id: 1,
    name: "Mo Fisher",
    age: 30,
    gender: "Male",
  },
];

const resolvers = {
  Query: {
    fetchPeople: () => {
      return people;
    },
  },
  Mutation: {
    addPerson: (_, { person }) => {
      const id = people.length;
      people.push({
        id,
        ...person
      });

      return id;
    },
  },
};

export default resolvers;