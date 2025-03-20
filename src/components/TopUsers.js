import React, { useEffect, useState } from "react";
import { fetchUsers } from "../services/api";

const TopUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      const sortedUsers = data.sort((a, b) => b.posts.length - a.posts.length).slice(0, 5);
      setUsers(sortedUsers);
    };
    getUsers();
  }, []);

  return (
    <div>
      <h2>Top 5 Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.posts.length} posts</li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
