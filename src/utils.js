export const person = {
  name: "John Doe",
  location: "New York",
  age: 42
};

export const sayHello = person => {
  return `Hello I'm ${person.name} from ${person.location}`;
};
