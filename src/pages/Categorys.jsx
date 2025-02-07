import React, { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
} from "react-icons/fa";
import { Button } from "antd";
import phone from "../phone.png";
import pc from "../pc.jpg";
import game from "../game.png";
import chas from "../chas.png";
import camera from "../camera.png";
import airpods from "../airpods.png";

const Categorys = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedItems, setLikedItems] = useState({});

  const posts = [
    {
      id: 1,
      name: "Phones",
      img: phone,
    },
    {
      id: 2,
      name: "Computers",
      img: pc,
    },
    {
      id: 3,
      name: "SmartWatch",
      img: chas,
    },
    {
      id: 4,
      name: "Camera",
      img: camera,
    },
    {
      id: 5,
      name: "HeadPhones",
      img: airpods,
    },
    {
      id: 6,
      name: "Gaming",
      img: game,
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 >= posts.length ? 0 : prevIndex + 4
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 4 < 0 ? posts.length - 4 : prevIndex - 4
    );
  };

  const toggleLike = (id) => {
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="container mt-8">
      <div className="flex items-center gap-2 mb-4">
        <button className="bg-[#DB4444] w-5 h-10 rounded-[4px]"></button>
        <p className="text-[#DB4444] text-[16px] font-[600]">Categories</p>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-[36px] font-[600]">Browse By Category</h1>
        <div className="flex gap-2">
          <Button
            className="border-none bg-gray-200 rounded-full w-[40px] h-[40px] text-gray-500"
            onClick={handlePrev}
          >
            <FaArrowLeft />
          </Button>
          <Button
            className="border-none bg-gray-200 rounded-full w-[40px] h-[40px] text-gray-500"
            onClick={handleNext}
          >
            <FaArrowRight />
          </Button>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10 w-full mt-10 mb-16">
        {posts.slice(currentIndex, currentIndex + 6).map((post) => (
          <div
            key={post.id}
            className="rounded-lg w-[170px] h-[145px] border flex flex-col justify-center items-center hover:bg-[#DB4444] hover:text-white duration-300 cursor-pointer"
          >
            <img src={post.img} />
            {post.name}
          </div>
        ))}
      </div>

      <hr />
    </div>
  );
};

export default Categorys;
