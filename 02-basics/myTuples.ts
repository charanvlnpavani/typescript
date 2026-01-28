type myTupleType = [name: string, age: number, isStudent: boolean];
type myTupleType2 = {
  name: string;
  age: number;
  isStudent: boolean;
};

let a: myTupleType = ["charan", 42, true]; // Error: Type 'number' is not assignable to type 'string'.]
console.log(a);

let b: (string | number | boolean)[] = [43, "charan", true]; // Correct way using union types in an array
console.log(b);

let c: myTupleType2 = { name: "charan", age: 42, isStudent: true }; // Correct way using an object
console.log(c);

export {};
