import React from "react";
import { imgPost } from "../data";

const Post = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols w-full mt-3 gap-7 flex justify-center">
      {imgPost.map((item, id) => (
        <>
          <div className="relative">
            <img
              className="w-80 h-80 object-cover rounded"
              src={item.img}
              alt={item.alt}
            />
            <span className="absolute top-5 right-5 text-white font-bold text-3xl">{item.icons}</span>
          </div>
        </>
      ))}
    </div>
  );
};

export default Post;
