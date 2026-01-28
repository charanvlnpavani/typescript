"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = ["charan", 42, true]; // Error: Type 'number' is not assignable to type 'string'.]
console.log(a);
var b = [43, "charan", true]; // Correct way using union types in an array
console.log(b);
var c = { name: "charan", age: 42, isStudent: true }; // Correct way using an object
console.log(c);
