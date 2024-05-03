"use strict";
// Interfaces are a way to define the structure of an object
// Basically creating your own data type for your objects
const authorOne = { name: "david", avatar: "/img/mario.png" };
const newPost = {
    title: "my first post",
    body: "something interesting",
    tags: ["gaming", "tech"],
    create_at: new Date(),
    author: authorOne,
};
// can also write author: {name: "Bob", avator: "/img/bob.png"}
// this is b/c it has all the attributes of an author
// when TypeScript checks an object against an Interface, it make sure that the object has all the attributes with all the right types
function createPost(post) {
    console.log(`Created post: ${post.title} by ${post.author.name}`);
}
createPost(newPost);
// What is nice about TypeScript is that since we defined the structure of Post, there is autocompletion when accessing the attributes
let posts = [];
// Can create arrays using our interface
posts.push(newPost);
