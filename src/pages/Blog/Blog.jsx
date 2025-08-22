import React, { useEffect, useState } from "react";
import OurProject from "../../components/OurProject/OurProject";


function Blog() {
  const [blog, setBLog] = useState([]);
  const filter = blog.slice(0,10)
  const data = {
    heading: "desinging blog",
    subHeading:
      "Building complete web applications using MongoDB, Express, React, and Node.js (MERN)",
    project: filter,
  };
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
       
        return res.json();
      })
      .then((data) => {
        setBLog(data);
      });
  }, []);
  return (
    <div>
      <OurProject data={data} />
    </div>
  );
}

export default Blog;
