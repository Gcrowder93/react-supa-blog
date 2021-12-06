import React from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import { useState, useEffect } from 'react';
import { getBlogs } from './services/blogs';
import BlogCard from './components/BlogCard/BlogCard';

function App() {
  // const [title, subtitle, text, image] = useState('');
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const blogData = await getBlogs();
      setBlogs(blogData);
      // console.log(blogData);
    };
    fetchData();
  }, []);
  return (
    <section className="main">
      <Header />
      <Footer />
      {/* <BlogCard {...{ title, subtitle, text, image }} /> */}
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </section>
  );
}
export default App;
