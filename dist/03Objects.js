"use strict";
let user = {
    firstName: "mario",
    age: 25,
    id: 1,
};
// The type of the object determines the attributes of the objects and its type
// Can only use attributes that are defined
user.firstName = "luigi";
// user.firstName = 15
// Must be of same type
// user.email = "luigi@gmail.com"
// Email is not created when user was initialized
let person = {
    name: "bowser",
    score: 35,
};
// Types can also be inferred for objects
// Same as before, any change of current attributes must be of same type and you cannot add new attributes
