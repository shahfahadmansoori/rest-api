const blog = {
  all() {
    return fetch("http://localhost:3000/posts")
      .then(response => response.json())
      .catch(err => console.log(err));
  }
};

export default blog;
