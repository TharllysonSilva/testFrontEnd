import blogFetch from "../axios/config";

import { useState, useEffect } from "react";

import {  useParams } from 'react-router-dom';

import './Comments.css';

const Comments = () => {
    const [comments, setComments] = useState([]);
    const { id } = useParams();
    const getComments = async () => {
      try {
        const response = await blogFetch.get(`/post/${id}/comments`);
  
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
              <p>{comment.body}</p>
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default Comments;