const post = {
  all() {
    return fetch("http://localhost:3000/posts")
      .then(response => response.json())
      .catch(err => console.log(err));
  },
  limit(limit = 3) {
    return fetch(`http://localhost:3000/posts?_limit=${limit}`)
      .then(response => response.json())
      .then(json => json)
      .catch(err => console.log(err));
  },
  catch(cond) {
    return new Promise((resolve, reject) => {
      const runPromise = cond;
      if (runPromise) {
        let data = [1, 2, 3];
        resolve(data);
      } else {
        reject();
      }
    });
  }
};
export default post;
