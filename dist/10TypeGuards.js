"use strict";
/*
function swapIdType(id: newId): newId {
  return id;
}
*/
// You can only use props and methods common to both number and string types
// Example, cannot use parseInt(id) b/c it does not work for ints while working for strings
// This is a common pitfall of Union Types
// Can fix this user Type Guards (basically just check the type before executing the code)
function swapIdType(id) {
    if (typeof id === "string") {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
}
const idOne = swapIdType(1);
const idTwo = swapIdType("2");
console.log(idOne, idTwo);
// since we cannot use typeof to use as TypeGuards, we need to use tagged interfaces
// basically just hardcode a common property to use for typeguard
function logDetails(value) {
    if (value.type === "desktop") {
        console.log(value.type, value.model, value.company, value.id);
    }
    else {
        console.log(value.type, value.model, value.age, value.id);
    }
}
