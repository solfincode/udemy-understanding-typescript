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

//arrow function
const addNum = (n1: number, n2: number) => n1 + n2;
console.log(addNum(90, 20));

//spread operator in array
const hobby = ["golf", "apple"];
const newHobby = ["running", "bike"];
newHobby.push(...hobby);
console.log("newHobby is", newHobby);

//spread operator in object
const obj = { nameEl: "david", ageEl: 20 };
const newObj = { ...obj, hobby: "bike" };
console.log(newObj);

const SumOfNum = (...number: number[]) => {
  const result = number.reduce((prev: number, curr: number) => prev + curr);
  return result;
};
const numberEl: number[] = [1, 2, 3, 4, 5, 6];

console.log(SumOfNum(...numberEl));

//object && array destructuring
const [s1, s2] = hobby;
console.log(`hobby one is ${s1} and hobby two is ${s2}`);

const { nameEl, ageEl } = obj;
console.log(`object destructuring... name is ${nameEl} and age is ${ageEl}`);

//class
class Building {
  name: string;
  height: number;
  rooms: string[] = [];
  constructor(n: string, b: number, r: string[]) {
    this.name = n;
    this.height = b;
    this.rooms = r;
  }
  build() {
    console.log(`${this.name} has ${this.height} ft`);
  }
  printAllRooms() {
    this.rooms.map((el) => console.log(el));
  }
}

const building_one = new Building("Superb Building one", 2000, [
  "room1",
  "room2",
  "room3",
]);
building_one.build();
building_one.printAllRooms();

//public - access out of class and public is default setting for keywords
//private property - access within class
//shorthand initialization

class Cars {
  color: string;
  size: number;

  constructor(private c: string, s: number) {
    this.color = c;
    this.size = s;
  }

  printProperty() {
    console.log(`building has ${this.color} and size is ${this.size}`);
  }
}

const newCar = new Cars("red", 20000);
newCar.printProperty();

class School extends Building {
  admin: string[];
  id: string;
  constructor(id: string, admin: string[]) {
    super("alfred school", 100, ["rooms"]);
    this.admin = admin;
    this.id = id;
  }
  get getTheAdmin() {
    return this.admin;
  }
  getTheNameID(value:string){
    return value
  }
  getTheName() {
    return this.name;
  }
  set getTheID(value: string) {
    if (!value) {
      return;
    }
    this.getTheNameID(value);
  }
}

const schoolsample = new School("IT", ["admin2"]);
console.log(schoolsample);
console.log("name is ",schoolsample.getTheName());
//getter
console.log("admin is ",schoolsample.getTheAdmin);
//setter
console.log("new ID is ",schoolsample.getTheNameID("Product"));
