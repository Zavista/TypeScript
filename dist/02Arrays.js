"use strict";
let names = ["hi", "bye", "hello"];
// let names: string[] = ["hi", "bye", 15];
// must all be the type of string
names.push("goodbye");
// names.push(15)
// must push only a string type
let ages = [1, 2, 3, 5];
// TypeScript can also infer the type
let things = [1, true, "hello"];
// Can also infer multiple types
// This is called Type Unions which I will learn later
