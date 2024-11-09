import React from "react";
import Blogs1 from "../../assets/blogs/blog1.jpg";
import Blogs2 from "../../assets/blogs/blog2.jpg";
import Blogs3 from "../../assets/blogs/blog3.jpg";
import Blogs4 from "../../assets/blogs/blog4.jpg";
import { UpdateFollower } from "react-mouse-follower";

const BlogsData = [
  {
    id: 1,
    title: "The Evolution of Audio Technology",
    desc: "Explore how audio technology has advanced from basic devices to modern immersive experiences. Discover the journey of sound quality improvement over the years.",
    link: "#",
    img: Blogs1,
  },
  {
    id: 2,
    title: "Top 5 Noise-Cancelling Headphones",
    desc: "A guide to the best noise-cancelling headphones in the market today, detailing features, sound quality, and comfort for all types of listeners.",
    link: "#",
    img: Blogs2,
  },
  {
    id: 3,
    title: "Choosing the Right Headphones for You",
    desc: "Whether for gaming, music, or work, learn how to choose the perfect pair of headphones that fit your needs and budget.",
    link: "#",
    img: Blogs3,
  },
  {
    id: 4,
    title: "The Impact of Headphones on Health",
    desc: "An overview of the effects of prolonged headphone use on hearing and health, with tips on safe listening practices to protect your ears.",
    link: "#",
    img: Blogs4,
  },
];

const Blogs = () => {
  return (
    <section className="">
      <div className="container">
        <h1 className="text-3xl font-bold text-center pb-10">Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
          {BlogsData.map((data) => {
            return (
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "black",
                  zIndex: 999,
                  followSpeed: 1.5,
                  text: "read",
                  textFontSize: "3px",
                  scale: 5,
                }}
              >
                <div className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300">
                  <img src={data.img} alt="" />
                  <div className="space-y-2">
                    <h1 className="text-xl font-bold line-clamp-2">
                      {data.title}
                    </h1>
                    <p className="line-clamp-2">{data.desc}</p>
                  </div>
                </div>
              </UpdateFollower>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
