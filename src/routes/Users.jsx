import blogFetch from "../axios/config";

import { useState, useEffect } from "react";

import './Users.css';

const Users = () => {
    const [users, setUsers] = useState([]);
  
    const getUsers = async () => {
      try {
        const response = await blogFetch.get("/users");
  
        const data = response.data;
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
      
    };
  
    useEffect(() => {
      getComments();
    }, []);
  
    return (
      <div className="users">
        <h1>Comments</h1>
        {users.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          users.map((user) => (
            <div className="users" key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.username}</p>
              <p1>{user.email}</p1>
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default Users;