type myFirstType = {
  name: string;
  age: number;
};

function myFirst(person: myFirstType): void {
  console.log(`first function name is ${person.name}`);
}
myFirst({ name: "Charan", age: 27 });
export {};
