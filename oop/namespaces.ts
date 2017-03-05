//Use name spaces to protect the scope 
// DONT forget export keyword
namespace Blog{
  // interface
  export interface IPost{
    title : string;
    body : string;
  }

  // class
  export class Post implements IPost {
   
    title : string;
    body : string;

    constructor(post : IPost) {
      this.title  = post.title;
      this.body  = post.body;
    }

    printPost(){
      console.log(this.title);
      console.log(this.body);
    }
  } // end Post class

} // end Blog namespace

namespace Content {
  // interface
  export interface IPost{
    title : string;
    body : string;
    slug : string;
    seoKeyword : string;
  }

  //class
  export class Post implements IPost{
   title : string;
    body : string;
    slug : string;
    seoKeyword : string; 

    constructor(post : IPost){
      this.title = post.title;
      this.body = post.body;
      this.slug = post.slug;
      this.seoKeyword = post.seoKeyword;
    }

        printPost(){
      console.log(this.title);
      console.log(this.body);
      console.log(this.slug);
      console.log(this.seoKeyword);
    }

  } // end Post class

} // end Content namespace


// create object

let blogPost = new Blog.Post({
  title : 'Blog post title',
  body : 'Blog post body',
});

blogPost.printPost();

console.log('*************** Content post ********************')
var contentPost = new Content.Post({
     title : 'content post title',
    body : 'content post body',
    slug : 'content post slug',
    seoKeyword : '123 abc' 
});

contentPost.printPost();