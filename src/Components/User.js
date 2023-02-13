import React, { useEffect, useState } from "react";

export default function User() {
  const [user, setUser] = useState([]);

  useEffect((data) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="user-div">
      <h2> Users</h2>
      <ul className="user-list">
        {user.map((user) => (
          <li key={user.id}> {user.name} </li>
        ))}
      </ul>
    </div>
  );
}
