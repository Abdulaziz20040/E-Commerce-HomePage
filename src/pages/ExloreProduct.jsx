import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Button } from "antd";
import { LuEye } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import start from "./star.jpg";

const ExloreProduct = () => {
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    axios
      .get("https://1cd9f1e239e62104.mokky.dev/homepage")
      .then((res) => {
        const filteredPosts = res.data.slice(8);
        setPosts(filteredPosts);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, posts.length - 8) : prevIndex - 4
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 >= posts.length ? 0 : prevIndex + 4
    );
  };

  return (
    <div className="container mt-20">
      <div className=" flex items-center gap-2 mb-4">
        <button className=" bg-[#DB4444] w-5 h-10 rounded-[4px]"></button>
        <p className=" text-[#DB4444] text-[16px] font-[600]">Our Products</p>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className=" text-[36px] font-[600]">Explore Our Products</h1>
        </div>
        <div className="flex justify-between items-center gap-2 mt-6">
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {posts.slice(currentIndex, currentIndex + 8).map((post) => (
          <div
            key={post.id}
            className="rounded-lg w-[16.875rem] relative group"
          >
            <div className="bg-[#F5F5F5] p-5 flex justify-center rounded-[4px] relative">
              <img
                src={post.img}
                alt={post.title}
                className="w-[190px] h-[180px] object-cover rounded-lg"
              />
              <button className="absolute rounded-b-[4px] bottom-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#000000] w-full text-white px-4 py-2">
                Add to Cart
              </button>
            </div>

            {post.new && (
              <div className="absolute top-4 left-4 bg-[#00FF66] w-[51px] h-[26px] text-center text-[12px] flex items-center justify-center text-white rounded-[0.25rem]">
                {post.new}
              </div>
            )}
            <div className="absolute top-4 right-4 flex gap-2 flex-col">
              <button
                className={`rounded-full flex justify-center items-center w-[34px] h-[34px] transition-colors bg-white`}
              >
                <CiHeart />
              </button>
              <button className="bg-white rounded-full flex justify-center items-center w-[34px] h-[34px]">
                <LuEye />
              </button>
            </div>

            <div className="w-full h-[180px] pt-4 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-gray-800 line-clamp-1">
                  {post.name}
                </h3>
                <div className="flex items-center gap-3">
                  <p className="text-red-500 text-sm mt-2 line-clamp-2">
                    {post.price}
                  </p>
                  <p className="text-gray-600 line-through text-sm mt-2 line-clamp-2">
                    {post.oldPrice}
                  </p>
                </div>
                <div className=" flex items-center gap-2 mt-2">
                  <img src={start} alt="" />
                  <img src={start} alt="" />
                  <img src={start} alt="" />
                  <img src={start} alt="" />
                  <img src={start} alt="" />
                  <span className=" text-gray-600">{post.reyting}</span>
                </div>

                <div className=" flex items-center gap-2 mt-2">
                  {post.secondary && (
                    <div className=" rounded-full cursor-pointer hover:border  w-[20px] h-[20px] bg-[#FB1314]">
                      {post.secondary}
                    </div>
                  )}
                  {post.black && (
                    <div className=" rounded-full cursor-pointer hover:border  w-[20px] h-[20px] bg-[#000]">
                      {post.black}
                    </div>
                  )}
                  {post.yellow && (
                    <div className=" rounded-full cursor-pointer hover:border  w-[20px] h-[20px] bg-[#EEFF61]">
                      {post.yellow}
                    </div>
                  )}
                  {post.green && (
                    <div className=" rounded-full cursor-pointer hover:border  w-[20px] h-[20px] bg-[#184A48]">
                      {post.green}
                    </div>
                  )}
                  {post.red && (
                    <div className=" rounded-full cursor-pointer hover:border  w-[20px] h-[20px] bg-[#DB4444]">
                      {post.red}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex items-center justify-center mb-20">
        <button className=" bg-[#DB4444] text-white w-[234px] h-[56px] rounded-[4px]">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default ExloreProduct;
