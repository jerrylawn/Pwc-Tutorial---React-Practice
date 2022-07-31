import React, { useEffect, useState } from "react";
import "./Post.css";

function Posts() {
  const [post, setPost] = useState([]);

  const fetchPost = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPost(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(res => res.json())
    // .then((res) => setPost(res))
    // .catch((err) => console.log(err))
    fetchPost();
  }, []);

  return (
    <section className="Posts">
      <h2>Hello, here are the Posts</h2>

      <div className="card_post">
        {post.map((item, index) => (
          <div key={item.id} style={{ width: "200px", height: "200px" }}>
            <h2>{item.id}</h2>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Posts;