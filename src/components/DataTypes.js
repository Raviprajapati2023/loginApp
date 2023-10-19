const myModule = {
  // Primitive type vs Reference type
  num1: 6,
  num2: null,
  arr1: ["item1", "Item2"],
  arr2: null,

  initialize() {
    this.num2 = this.num1;
    this.arr2 = this.arr1.slice(); // Create a copy of the array

    console.log("Value of num1 is", this.num1);
    console.log("Value of num2 is", this.num2);

    this.num1++;
    console.log("After increment num1 is ", this.num1);
    console.log("After increment num2 is ", this.num2);

    console.log("Arr1", this.arr1);
    console.log("Arr2", this.arr2);
    this.arr1.push("item3");
    console.log("After pushing an element in Arr1");
    console.log("Arr1", this.arr1);
    console.log("Arr2", this.arr2);
  },
};

export default myModule;

// 3.34 hrs
//   Working code
//   let arr1 = ["item1", "item2"];
// let arr2 = arr1;
// console.log("Arr1", arr1);
// console.log("Arr2", arr2);
// arr1.push("item3");
// console.log("After pushing an element in Arr1");
// console.log("Arr1", arr1);
// console.log("Arr2", arr2);
