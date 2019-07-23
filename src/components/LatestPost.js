// Tasks
// GEt ALL latest Posts
// Pass To Template Function
// Render into browser

import postApi from "../../api/post";

function LatestPost() {
  const latestPostRoot = document.getElementById("blog-listing");
  // promise chala
  postApi.limit(3).then(posts => {
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
    latestPostRoot.innerHTML = template;
  });
}

export default LatestPost;
