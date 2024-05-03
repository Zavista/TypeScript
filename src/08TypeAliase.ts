// A TypeAlias is a way to create a new name for a Type, making it more descriptive

type RGB = [number, number, number];
// so RGB is an alias for the type [number, number, number]

function getRandomColor(): RGB {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return [r, g, b];
}

type User = {
  name: string;
  score: number;
};

const userTwo: User = { name: "bowser", score: 75 };
// Very similar to Interfaces

function formatUser(user: User): void {
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
