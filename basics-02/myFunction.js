"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function myFunction(name, age, isStudent, email, address) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Is Student:", isStudent);
    console.log("Email:", email);
    console.log("Address:", address);
}
function myFunction2(name, email) {
    return "Name: ".concat(name, ",Email:").concat(email);
}
function myFunction3(num) {
    return num + 43;
}
function myFunction4() {
    return true;
}
myFunction("charan", 22, true, "charan@gmail.com", "Hyderabad");
var vamyFunction2 = myFunction2("charan", "charan@gmail.com");
var vamyFunction3 = myFunction3(7);
var vamyFunction4 = myFunction4();
console.log(vamyFunction2, vamyFunction3, vamyFunction4);
function myFunction5() {
    return "Charan is a intelligent";
}
var result = myFunction5();
console.log(result);
