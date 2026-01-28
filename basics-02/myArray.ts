type myArrayType = string[];

function myArrayFunction(arr: myArrayType): void {
  arr.forEach((item) => {
    console.log(`Array item: ${item}`);
  });
}

myArrayFunction(["Apple", "Banana", "Cherry"]);
export {};
