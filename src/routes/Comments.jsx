import blogFetch from "../axios/config";

import { useState, useEffect } from "react";

const Comments = () => {
    const [comments, setComments] = useState([]);
  
    const getComments = async () => {
      try {
        const response = await blogFetch.get("/comments");
  
        const data = response.data;
        setComments(data);
      } catch (error) {
        console.log(error);
      }
      
    };
  
    useEffect(() => {
      getComments();
    }, []);
  
    return (
      <div className="comments">
        <h1>Comments</h1>
        {comments.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          comments.map((comment) => (
            <div className="comments" key={comments.id}>
              <h2>{comments.name}</h2>
              <p>{comments.email}</p>
              <p>{comments.body}</p>
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default Comments;