import React, { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

function Slider() {
  const slides = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/1126/a357/e5011a6f245df4c38eae015c7c9ccbe7?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kHwUIR3y~Ebaz6OnKrI20Vyc3VN19tgY-8gQvrIsSxgOfjM-LCk57EB4v70fuoeMKZ1U6eS7qmjJPAGMsnsgAatg1g0q800q-diqomfxVSYuQ21OGZnexVju7FWj45whIM3bvsXiba~P~XGVNjSJae9O8Bue7f5H0jZTfDly0cmSxReqApQY2uiCyBviS8maadDm62UBU76ltW5ztAByNIy9STbR8~Kd2vsje2nQR250lv6Y~JCBJjzMJb3u5N1YDtNewLZ4ZkvyWH11btOQRowFG9fYCyI0swCsbOHpxSDfOdhhNXHwoS4Jsk5zxILA-ETKeTuWjwEc~TROfLGNSw__",
      title: "iPhone 14 Series",
      description: "Up to 10% off Voucher",
      background:
        "https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aHTx8kogbaeE9rXrt3l53JlY~dT0zOGvBcLLSSXqJbCdl9BUiOOXvUyqypjvxcd-SEdUwQJ~Hw0LUKUDjpsoLYWaQIr8vxv1O8zWvhECdtz-pAGN35xSrZB4hDqYfY-UQTnU3OeNouTTFJ56Mayr-bdN2YRRYPE4NK0RwvlUu6A~t3nnZhwSqDyMUwDJEHi3RWHU3Br1i5Bvh61NgNodShXwEw0g1k9Mv4Un0663B~aVRm~EnMsBwLqJSQd9U35FlZQUPOUAsWfpCJsl0hzTNwwtlloSCCtcqLKlfwe6HXSAoFZEr8HByUfpA3X2Wil2RrXEcfZ2gZxUsIajNphrrA__",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/1126/a357/e5011a6f245df4c38eae015c7c9ccbe7?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kHwUIR3y~Ebaz6OnKrI20Vyc3VN19tgY-8gQvrIsSxgOfjM-LCk57EB4v70fuoeMKZ1U6eS7qmjJPAGMsnsgAatg1g0q800q-diqomfxVSYuQ21OGZnexVju7FWj45whIM3bvsXiba~P~XGVNjSJae9O8Bue7f5H0jZTfDly0cmSxReqApQY2uiCyBviS8maadDm62UBU76ltW5ztAByNIy9STbR8~Kd2vsje2nQR250lv6Y~JCBJjzMJb3u5N1YDtNewLZ4ZkvyWH11btOQRowFG9fYCyI0swCsbOHpxSDfOdhhNXHwoS4Jsk5zxILA-ETKeTuWjwEc~TROfLGNSw__",
      title: "iPhone 14 Pro",
      description: "Up to 10% off Voucher",
      background:
        "https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aHTx8kogbaeE9rXrt3l53JlY~dT0zOGvBcLLSSXqJbCdl9BUiOOXvUyqypjvxcd-SEdUwQJ~Hw0LUKUDjpsoLYWaQIr8vxv1O8zWvhECdtz-pAGN35xSrZB4hDqYfY-UQTnU3OeNouTTFJ56Mayr-bdN2YRRYPE4NK0RwvlUu6A~t3nnZhwSqDyMUwDJEHi3RWHU3Br1i5Bvh61NgNodShXwEw0g1k9Mv4Un0663B~aVRm~EnMsBwLqJSQd9U35FlZQUPOUAsWfpCJsl0hzTNwwtlloSCCtcqLKlfwe6HXSAoFZEr8HByUfpA3X2Wil2RrXEcfZ2gZxUsIajNphrrA__",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/1126/a357/e5011a6f245df4c38eae015c7c9ccbe7?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kHwUIR3y~Ebaz6OnKrI20Vyc3VN19tgY-8gQvrIsSxgOfjM-LCk57EB4v70fuoeMKZ1U6eS7qmjJPAGMsnsgAatg1g0q800q-diqomfxVSYuQ21OGZnexVju7FWj45whIM3bvsXiba~P~XGVNjSJae9O8Bue7f5H0jZTfDly0cmSxReqApQY2uiCyBviS8maadDm62UBU76ltW5ztAByNIy9STbR8~Kd2vsje2nQR250lv6Y~JCBJjzMJb3u5N1YDtNewLZ4ZkvyWH11btOQRowFG9fYCyI0swCsbOHpxSDfOdhhNXHwoS4Jsk5zxILA-ETKeTuWjwEc~TROfLGNSw__",
      title: "iPhone 14 Standard",
      description: "Up to 10% off Voucher",
      background:
        "https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aHTx8kogbaeE9rXrt3l53JlY~dT0zOGvBcLLSSXqJbCdl9BUiOOXvUyqypjvxcd-SEdUwQJ~Hw0LUKUDjpsoLYWaQIr8vxv1O8zWvhECdtz-pAGN35xSrZB4hDqYfY-UQTnU3OeNouTTFJ56Mayr-bdN2YRRYPE4NK0RwvlUu6A~t3nnZhwSqDyMUwDJEHi3RWHU3Br1i5Bvh61NgNodShXwEw0g1k9Mv4Un0663B~aVRm~EnMsBwLqJSQd9U35FlZQUPOUAsWfpCJsl0hzTNwwtlloSCCtcqLKlfwe6HXSAoFZEr8HByUfpA3X2Wil2RrXEcfZ2gZxUsIajNphrrA__",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };
  return (
    <div className=" container">
      <div className=" flex items-center justify-between">
        <div className="w-1/4 p-4 border-r border-gray-300">
          <ul className="space-y-4 text-lg font-medium">
            <li className="cursor-pointer text-[16px] font-[400]  flex items-center gap-3 justify-between hover:text-blue-500">
              Woman’s Fashion <FaAngleRight />
            </li>
            <li className="cursor-pointer text-[16px] font-[400]  flex items-center gap-3 justify-between hover:text-blue-500">
              Men’s Fashion <FaAngleRight />
            </li>
            <li className="cursor-pointer text-[16px] font-[400] hover:text-blue-500">
              Electronics
            </li>
            <li className="cursor-pointer text-[16px] font-[400] hover:text-blue-500">
              Home & Lifestyle
            </li>
            <li className="cursor-pointer text-[16px] font-[400] hover:text-blue-500">
              Medicine
            </li>
            <li className="cursor-pointer text-[16px] font-[400] hover:text-blue-500">
              Sports & Outdoor
            </li>
            <li className="cursor-pointer text-[16px] font-[400] hover:text-blue-500">
              Baby’s & Toys
            </li>
            <li className="cursor-pointer text-[16px] font-[400] hover:text-blue-500">
              Groceries & Pets
            </li>
            <li className="cursor-pointer text-[16px] font-[400] hover:text-blue-500">
              Health & Beauty
            </li>
          </ul>
        </div>
        <div className="w-[73%] h-[344px] p-4 relative">
          <div className="relative w-full h-[344px] bg-black text-white p-8 rounded-[4px] overflow-hidden">
            <div className=" absolute z-10 text-start top-16 left-16">
              <div className=" flex items-center gap-3">
                <img
                  className="w-10 h-[49px] object-cover"
                  src={slides[currentIndex].image}
                  alt=""
                />
                <h2 className="text-lg font-light">
                  {slides[currentIndex].title}
                </h2>
              </div>
              <h1 className=" text-[38px] font-[600] w-[214px] mt-2">
                {slides[currentIndex].description}
              </h1>
              <div className="flex items-center gap-3 border-none mt-8">
                <button className="w-[113px] h-[28px] border-b pb-6   text-white font-semibold">
                  Shop Now
                </button>
                <FaArrowRightLong />
              </div>
            </div>
            <div className=" absolute top-6 right-4">
              <img
                className=" w-[496px] h-[366px]"
                src={slides[currentIndex].background}
              />
            </div>

            <div className="flex justify-center mt-4 gap-2 absolute bottom-3 left-[49%]">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-red-500" : "bg-gray-400"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
