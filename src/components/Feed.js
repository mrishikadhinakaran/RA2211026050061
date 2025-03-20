import React, { useEffect, useState } from "react";
import { fetchPosts } from "../services/api";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const updateFeed = async () => {
      const data = await fetchPosts();
      setPosts(data.reverse());
    };

    updateFeed();
    const interval = setInterval(updateFeed, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Live Feed</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;
