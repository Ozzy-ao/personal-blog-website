import axios from "axios";
import React, { useEffect, useState } from "react";

const Menu = ({ cat }) => {
  // const posts = [
  //     {
  //       id: 1,
  //       title: "银白色的圣诞｜家居桌花",
  //       desc: "这是一款非常简单易上手的圣诞家居桌花，非常适合装饰简单的家居空间。",
  //       img: "https://static.htxq.net/UploadFiles/2021/11/16/test/20211116183706115.jpg",
  //     },
  //     {
  //       id: 2,
  //       title: "银白色的圣诞｜家居桌花",
  //       desc: "这是一款非常简单易上手的圣诞家居桌花，非常适合装饰简单的家居空间。",
  //       img: "https://static.htxq.net/UploadFiles/2021/11/16/test/20211116183706115.jpg",
  //     },
  //     {
  //       id: 3,
  //       title: "银白色的圣诞｜家居桌花",
  //       desc: "这是一款非常简单易上手的圣诞家居桌花，非常适合装饰简单的家居空间。",
  //       img: "https://static.htxq.net/UploadFiles/2021/11/16/test/20211116183706115.jpg",
  //     },
  //     {
  //       id: 4,
  //       title: "银白色的圣诞｜家居桌花",
  //       desc: "这是一款非常简单易上手的圣诞家居桌花，非常适合装饰简单的家居空间。",
  //       img: "https://static.htxq.net/UploadFiles/2021/11/16/test/20211116183706115.jpg",
  //     },
  //   ];

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  return (
    <div className="menu">
      <h1>其他你可能喜欢的帖子</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post.img}`} alt="" />
          <h2>{post.title}</h2>
          <button>阅读全文</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
