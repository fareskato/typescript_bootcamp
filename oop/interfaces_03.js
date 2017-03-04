/**
* Use interfaces with classes
* Create an interface and applied on top of a class.
* Interfaces work with classes in tow ways:
*/
/******* Method 01 (Basic method): Loosely connected interface with class ********/
var Admin = (function () {
    function Admin(email) {
        this.email = email;
        this.role = 'Admin';
    }
    return Admin;
}());
function profile(user) {
    return "Welcome " + user.email;
}
var joe = new Admin('joo@example.com');
console.log(joe.role);
console.log("************************ Direct implementation *************************");
// 02 -create class implements the interface
var Post = (function () {
    // 02-2 pass object of type interface to the constructor
    function Post(post) {
        this.title = post.title;
        this.body = post.body;
    }
    Post.prototype.printPost = function () {
        console.log(this.title);
        console.log(this.body);
    };
    return Post;
}());
// 03- create object
var firstPost = new Post({
    title: 'First post title',
    body: 'First post body'
});
console.log(firstPost.title);
console.log(firstPost.body);
firstPost.printPost();
