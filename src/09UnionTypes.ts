let someId: number | string;

someId = 5;
someId = "abc";
// someId = false;
// someId can be a number or a string

let email: string | null;
// Think about having a users email be null unless the user logs in or logs out
email = "mario@gmail.com";
email = null;

type Id = number | string;
// Here is how we can use a Type Alias to simplify the union
let anotherId: Id;
anotherId = "abcd";
anotherId = 89;
