import blogFetch from "../axios/config";

import { useState, useEffect } from "react";

import './Comments.css';

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
            <div className="comments" key={comment.id}>
              <h2>{comment.name}</h2>
              <p>{comment.email}</p>
              <p>Comentario:</p>
              <p1>{comment.body}</p1>
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default Comments;