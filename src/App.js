import { useEffect, useState } from "react";
import Navbar from "./modulos/NavBar/navbar";
import Posts from "./modulos/Paginator/Posts";
import Pagination from "./modulos/Paginator/Pagination";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(10);


  useEffect(() => 
  {
    const fetchPosts = async() => 
    {
      setLoading(true);
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
      setLoading(false);
    }
    fetchPosts();
  }, []);


  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <todo-list>
      <Navbar/>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination postsPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
    </todo-list>
  );
}

export default App;