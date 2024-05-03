function addTwoNumbers(a: number, b: number): number {
  return a + b;
}

// With no type parameters, you could pass arguments of any type without error until runtime
// Ex. addTwoNumbers('a', true)
// TypeScript helps you catch them during development

const subtractTwoNumbers = (a: number, b: number): number => {
  return a - b;
};

function addAllNumbers(items: number[]): void {
  const total = items.reduce((a, c) => a + c, 0);
  console.log(total);
}
// Return Type of Void since we are not returning anything

addAllNumbers([6, 7, 9, 11, 3, 2, 1]);

function formatGreeting(name: string, greeting: string) {
  return `${greeting}, ${name}`;
}
// TypeScript can infer the return type, which is a string

console.log(formatGreeting("David", "Hi"));
