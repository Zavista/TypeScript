"use strict";
let hello = 30;
hello = false;
hello = "hi";
// With Any, you can change it to any type
// Not the best practice because it basically removes the point of TypeScript
let title;
// Inferred to type Any
title = 25;
title = {
    hello: "world",
};
let items = ["hi", 6];
items.push(false);
function addTogether(value) {
    return value + value;
}
