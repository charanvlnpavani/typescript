function myFunction(
  name: string,
  age: number,
  isStudent: boolean,
  email: string,
  address: string,
): void {
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Is Student:", isStudent);
  console.log("Email:", email);
  console.log("Address:", address);
}

function myFunction2(name: string, email: string): string {
  return `Name: ${name},Email:${email}`;
}

function myFunction3(num: number): number {
  return num + 43;
}
function myFunction4(): boolean {
  return true;
}

myFunction("charan", 22, true, "charan@gmail.com", "Hyderabad");
let vamyFunction2 = myFunction2("charan", "charan@gmail.com");
let vamyFunction3 = myFunction3(7);
let vamyFunction4 = myFunction4();

console.log(vamyFunction2, vamyFunction3, vamyFunction4);
export {};
