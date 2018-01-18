export const user = {
  name: "John Doe",
  location: "New York",
  age: 42
};

export const sayHello = user => {
  return `Hello I'm ${user.name} from ${user.location}`;
};
