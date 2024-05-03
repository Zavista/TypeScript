"use strict";
// A TypeAlias is a way to create a new name for a Type, making it more descriptive
// so RGB is an alias for the type [number, number, number]
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const userTwo = { name: "bowser", score: 75 };
// Very similar to Interfaces
function formatUser(user) {
    console.log(`${user.name} has been created!`);
}
formatUser(userTwo);
formatUser({ name: "yoshi", score: 100 });
/*

Types Aliases vs Interfaces

Interfaces can be inherited and can be extended to add or override attributes while Types Aliases cannot and are static
Types Alises can represent intersection and union types while interfaces cannot

Generally use Interfaces for objects and Type Aliases to represent complicated types such as ones using multiple unions

*/
