import blogApi from "../../api/Blog";

function LatestBlogs() {
  const latestBlogRoot = document.getElementById("my-blog");
  // promise chala
  blogApi.all().then(posts => {
    let template = `<div class="row">
        ${posts
          .map(
            post => `<div class="col-4">
            <img src=${post.thumbnail} class="img-fluid">
            <h4>${post.title}</h4>
            <p>${post.body}</p>
        </div>`
          )
          .join("")}
      </div>`;
    latestBlogRoot.innerHTML = template;
  });
}

export default LatestBlogs;
