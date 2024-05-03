// Interfaces are a way to define the structure of an object
// Basically creating your own data type for your objects

interface Author {
  name: string;
  avatar: string;
}

const authorOne: Author = { name: "david", avatar: "/img/mario.png" };
// So we can use the Author type for our variable

interface Post {
  title: string;
  body: string;
  tags: string[];
  create_at: Date;
  author: Author;
}

const newPost: Post = {
  title: "my first post",
  body: "something interesting",
  tags: ["gaming", "tech"],
  create_at: new Date(),
  author: authorOne,
};

// can also write author: {name: "Bob", avator: "/img/bob.png"}
// this is b/c it has all the attributes of an author
// when TypeScript checks an object against an Interface, it make sure that the object has all the attributes with all the right types

function createPost(post: Post): void {
  console.log(`Created post: ${post.title} by ${post.author.name}`);
}

createPost(newPost);

// What is nice about TypeScript is that since we defined the structure of Post, there is autocompletion when accessing the attributes

let posts: Post[] = [];
// Can create arrays using our interface

posts.push(newPost);
