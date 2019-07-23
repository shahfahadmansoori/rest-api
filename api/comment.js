const comments = {
  all() {
    return fetch("http://localhost:3000/comments")
      .then(response => response.json())
      .catch(err => console.log(err));
  }
};

export default comments;
