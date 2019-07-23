import commentApi from "../../api/comment";

function Comments() {
  const latestcommentsRoot = document.getElementById("comments-listining");
  commentApi.all().then(comments => {
    let templete = `<div class="row">
      ${comments
        .map(
          comment => `<div class="col-4">
      <h4>${comment.name}</h4>
      <p>${comment.comment}</p>
  </div>`
        )
        .join("")}
  </div>`;
    latestcommentsRoot.innerHTML = templete;
  });
}

export default Comments;
