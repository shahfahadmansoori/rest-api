import "@fortawesome/fontawesome-free/js/all";
import $ from "jquery";
import "bootstrap/js/src/util";
import "bootstrap/js/src/carousel";
import LatestBlogs from "../components/LatestBlogs";
import LatestPost from "../components/LatestPost";
import Comments from "../components/Comments";
window.addEventListener("DOMContentLoaded", event => {
  LatestPost();
  Comments();
  LatestBlogs();
});

// import posts from "../components/latest-posts";
// import comments from "../components/latest-comments";
// import blogs from "../components/latest-blogs";
// posts.getAllPosts();
// comments.getlatestcomments();
// blogs.getAllBlogs();
