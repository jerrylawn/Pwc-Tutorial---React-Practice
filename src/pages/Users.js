
import React, { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      let users = await fetch("https://jsonplaceholder.typicode.com/users");
      users = await users.json();
      setUsers(users);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((users) => setUsers(users));
    fetchUsers();
  }, [users]);

  return (
    <div>
      <h2>Hi these are my users</h2>
      {/* <hr /> */}
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.address.city}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;