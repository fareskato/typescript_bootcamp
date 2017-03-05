//Use name spaces to protect the scope 
// DONT forget export keyword
var Blog;
(function (Blog) {
    // class
    var Post = (function () {
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
    Blog.Post = Post; // end Post class
})(Blog || (Blog = {})); // end Blog namespace
var Content;
(function (Content) {
    //class
    var Post = (function () {
        function Post(post) {
            this.title = post.title;
            this.body = post.body;
            this.slug = post.slug;
            this.seoKeyword = post.seoKeyword;
        }
        Post.prototype.printPost = function () {
            console.log(this.title);
            console.log(this.body);
            console.log(this.slug);
            console.log(this.seoKeyword);
        };
        return Post;
    }());
    Content.Post = Post; // end Post class
})(Content || (Content = {})); // end Content namespace
// create object
var blogPost = new Blog.Post({
    title: 'Blog post title',
    body: 'Blog post body',
});
blogPost.printPost();
console.log('*************** Content post ********************');
var contentPost = new Content.Post({
    title: 'content post title',
    body: 'content post body',
    slug: 'content post slug',
    seoKeyword: '123 abc'
});
contentPost.printPost();
