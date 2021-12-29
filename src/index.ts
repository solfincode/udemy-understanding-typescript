const id: number = 2;
console.log(id);

// core type - number,string,boolean

const num1: number = 10;
const num2: number = 20;

function add(num1: number, num2: number, showResult: Boolean) {
  if (showResult) {
    return num1 + num2;
  } else {
    return "need to be true to show result";
  }
}

console.log(add(num1, num2, true));

//using interface for defining type
interface People {
  name: string;
  age: number;
  address: string;
  items: string[];
  roles: [number, string]; //first element should be number and second element should be string
}

//apply interface into object
const person: People = {
  name: "david",
  age: 20,
  address: "SF",
  items: ["iphone", "m1 pro macbook pro"],
  roles: [2, "navid"],
};

console.log(`${person.name} is ${person.age} and living in ${person.address}`);

//print out item from array type
for (const item of person.items) {
  console.log(`${person.name} has ${item}`);
}

//add item into array type
person.items.push("ipad pro");
console.log(person.items);

//tuple type - fixed length array

//error case in typescript
//person.roles[0]="string"
//this will be error on tuple in typescript. it should be like this

person.roles[0] = 10;
// person role with index of 0 is number so it should be assgined with number

//enum can define set of named constants
enum Role {
  Admin = "paul",
  Read_only = "true",
  Author = "david",
}
console.log(
  `admin is ${Role.Admin} and read-only is ${Role.Read_only} and author is ${Role.Author}`
);

//union type
function combine(
  input1: string | number,
  input2: string | number,
  conversion: string
) {
  let result: string | number;
  if (typeof input1 == "number" && typeof input2 == "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (conversion === "as-number") {
    return +result;
  } else {
    return result.toString();
  }
}
// print out string or number with conversion
console.log(combine("apple ", 100, "as-string"));
console.log(combine(200, 100, "as-number"));

//custom type
type user = { name: string; age: number };

const u1: user = { name: "mild", age: 20 };
console.log(`${u1.name} is ${u1.age} years old`);

//define return type for function
function substract(a1: number, a2: number): number {
  return a1 - a2;
}

console.log(
  `type of return value for substract(100,200) is ${typeof substract(100, 200)}`
);

//funcion type
let substractFunction: Function;
substractFunction = substract;

console.log(substractFunction(200, 300));

//void && undefined
//void means return nothing,
//undefined means empty value but it should be returned inside of function
function func(num1: number, num2: number): undefined {
  console.log(num1 + num2);
  return;
}

//unknown type can have any type
let userInput: unknown;
userInput = 5;
userInput = "string";
console.log(`userinput is ${userInput}`);

