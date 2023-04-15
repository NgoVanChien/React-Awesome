/**
 * Basic type
 *  */

// string
let car = "Lamborgini";
let bike: string;
bike = "Winner";
// bike = 150 Loi ngay

// number
let num: number = 10;

// boolean
let isLoading = false;

// undefined
let bodies = undefined;

// null
let footer: null;

//any

let person: any;
person = 10;
person = "Something";
person = true;

/**
 * object
 */

// let house = {}
// house.address = 'Da Nang'

let house: {
  adress: string;
  color?: string;
} = {
  adress: "",
};
house.adress = "Da Nang";

/**
 * Array
 */

// [] --> type 'never'

let products: any[] = [];
products.push(1);
products.push("Crush");

// string[]
let names = ["Love", "Crush"];
let address: string[] = [];
address.push("Galvin");

// number[]
let numbers: number[] = [];
numbers = [1, 2, 3];
// numbers.push(1)

// Object array
let people: {
  name: string;
  age: number;
}[] = [];
people.push({
  name: "Otis",
  age: 27,
});

/**
 * Function
 */

const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};

sum(1, 2);

// console.log(sum(1, 2));

// fun
const sub: (num1: number, num2: number) => number = (
  num1: number,
  num2: number
) => num1 - num2;

// void function
const handle = () => {
  console.log(123);
};

/**
 *  Union
 */

let price: string | number | boolean;
price = "68";
price = 20;
price = true;

let body: { name: string | number } | { firstname: string } = {
  name: 100,
  // name: Alam
};

/**
 * Enum
 */

enum Sizes {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}
let sise = Sizes.S;

/**
 * Interface
 */

// interface State {
//   name: string;
//   isLoading: boolean;
// }

// interface State {
//   age: number;
// }

// let state: State = {
//   name: "Dang",
//   isLoading: false,
//   age: 100,
// };

// interface Name  {
//   name: string
// }

// interface Age {
//   age: number
// }

// interface Person = Name | Age

/**
 * Type
 */

type State = {
  name: string;
  isLoading: boolean;
};

let state: State = {
  name: "Dang",
  isLoading: false,
};

type Name = {
  name: string;
};

type Age = {
  age: number;
};

type Person2 = Name | Age;

// Mình thích dùng type hơn

const handleClick = <Type>(value: Type) => value;

let value = 100;
handleClick<string>("100");

/**
 * Class
 */

class Person1 {
  private name: string;
  age: number;
  readonly money: number = 40;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  handle() {
    let value = this.money;
  }
}

const alex = new Person1("Alex", 27);

// alex.money = 200;

// class Person {
//   public name: string;
//   public age: number;

//   constructor(name: string, age: number) {
//     this.age = age;
//     this.name = name;
//   }
// }

// class Person {
//   constructor(public name: string, public age: number) {}
// }
