"use strict";
// Tuples store a fixed number of elements, can be of different types
// They are not built-in into JavaScript but can be done using arrays
// Can do in TypeScript by typecasting the array as a tuple
let customer = ["mario", 30, true];
let xy = [94.7, 20.1];
function useCoords(xy) {
    return [xy[0] + 1, xy[1] + 2];
}
// In TypeScript v4, you can now use Name Tuples so you can add names to each value to make them more clear
let player;
player = ["luigi", 29];
console.log(player[0]);
