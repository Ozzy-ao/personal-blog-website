import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat =useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData(); 
  }, [cat]);
  // const posts = [
  //   {
  //     id: 1,
  //     title: "银白色的圣诞｜家居桌花",
  //     desc: "这是一款非常简单易上手的圣诞家居桌花，非常适合装饰简单的家居空间。",
  //     img: "https://static.htxq.net/UploadFiles/2021/11/16/test/20211116183706115.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "银白色的圣诞｜家居桌花",
  //     desc: "这是一款非常简单易上手的圣诞家居桌花，非常适合装饰简单的家居空间。",
  //     img: "https://static.htxq.net/UploadFiles/2021/11/16/test/20211116183706115.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "银白色的圣诞｜家居桌花",
  //     desc: "这是一款非常简单易上手的圣诞家居桌花，非常适合装饰简单的家居空间。",
  //     img: "https://static.htxq.net/UploadFiles/2021/11/16/test/20211116183706115.jpg",
  //   },
  //   {
  //     id: 4,
  //     title: "银白色的圣诞｜家居桌花",
  //     desc: "这是一款非常简单易上手的圣诞家居桌花，非常适合装饰简单的家居空间。",
  //     img: "https://static.htxq.net/UploadFiles/2021/11/16/test/20211116183706115.jpg",
  //   },
  // ];

const getText =(html) =>{
  const doc =new DOMParser().parseFromString(html, "text/html")
  return doc.body.textContent 
}

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <button>阅读全文</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
