import blogFetch from "../axios/config";

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
        {posts.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          comments.map((comments) => (
            <div className="post" key={post.id}>
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