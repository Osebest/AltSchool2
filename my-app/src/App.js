import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { Posts } from "./components/Posts";
import { Pagination } from "./components/Pagination";
import { PostDetails } from "./components/PostDetails";
import Error from "./Error";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://randomuser.me/api/?results=50");
      setPosts(res.data.results);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container mt-5">
              <h1 className="text-primary mb-3">Users</h1>
              <Posts posts={currentPosts} loading={loading} />
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
              />
            </div>
          }
        />
        <Route path="/user/:cell" element={<PostDetails posts={posts}/>}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </Router>
  );
}

export default App;
