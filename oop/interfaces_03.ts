/**
* Use interfaces with classes
* Create an interface and applied on top of a class.
* Interfaces work with classes in tow ways:
*/
/******* Method 01 (Basic method): Loosely connected interface with class ********/
 
interface User {
  email : string;
  anotherFirstName? : string;
  anotherLastName? : string;
}

class Admin {
  role : string;
  constructor(public email : string ){
    this.role = 'Admin';
  }
}

function profile(user : User) : string {
  return `Welcome ${user.email}`;
}

var joe = new Admin('joo@example.com');
console.log(joe.role);
console.log("************************ Direct implementation *************************");

/********* Method 02 : Direct implementation ***********/
// pay attention to the I :  interface = IClass

// 01 -create interface
interface IPost {
  title : string;
  body : string;
}

// 02 -create class implements the interface
class Post implements IPost{
  // 02-1 the same interface attr
  title : string;
  body : string;
  // 02-2 pass object of type interface to the constructor
  constructor(post :IPost){
    this.title = post.title;
    this.body = post.body;
  } 

  printPost(){
    console.log(this.title);
    console.log(this.body);
  }

}
// 03- create object
var firstPost = new Post(
  {
    title : 'First post title',
    body : 'First post body'
  }
);

console.log(firstPost.title);
console.log(firstPost.body);

firstPost.printPost();


