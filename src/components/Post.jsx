import React from "react";
import { imgPost } from "../data";
import {motion} from 'framer-motion'

const Post = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols w-full mt-3 gap-7 flex justify-center mb-5">
      {imgPost.map((item, id) => (
        <>
          <div className="relative">
            <motion.img
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
              className="w-80 h-80 object-cover rounded"
              src={item.img}
              alt={item.alt}
            />
            <span className="absolute top-5 right-5 text-white font-bold text-3xl"><a href="">{item.icons}</a></span>
          </div>
        </>
      ))}
    </div>
  );
};

export default Post;
