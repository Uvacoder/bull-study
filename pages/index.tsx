import Link from "next/link";
import type { NextPage } from "next";
import React, { useState } from "react";

import { motion } from "framer-motion";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout title="Home">
        <div className="text-center ">
          <h1 className="font-bold text-7xl mt-36 mb-40">
            <span className="text-6xl text-gray-500">English</span> with{" "}
            <span className="text-6xl text-gray-500">Tùng</span>
          </h1>
        </div>
        <div className="grid place-items-center">
          <Link href="/lythuyet">
            <motion.div
              animate={{
                y: [100, 0],
                opacity: [0, 1],
                transition: { duration: 1 },
              }}
              className="bg-yellow-400 px-32 py-12 my-10 text-white text-center font-bold text-4xl rounded-md"
            >
              Lý thuyết
            </motion.div>
          </Link>

          <Link href="/baitap">
            <motion.div
              animate={{
                y: [100, 0],
                opacity: [0, 1],
                transition: { duration: 1, delay: 0.3 },
              }}
              className="bg-green-400 px-28 py-12 text-white text-center font-bold text-4xl rounded-md"
            >
              Làm bài tập
            </motion.div>
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default Home;
