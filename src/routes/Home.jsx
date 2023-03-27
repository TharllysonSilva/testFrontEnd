import axios from "axios";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPost = async () => {
    try {
      const response = await axios.get(
        " https://jsonplaceholder.typicode.com/posts"
      );

      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return <div>Home</div>;
};

export default Home;
