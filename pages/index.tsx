import type { NextPage } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Layout from "../components/Layout";
import car from "../public/reinhart-julian-VsXHzSdwuik-unsplash.jpg";

import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <>
      <Layout title="Home">
        <div className="w-screen h-screen -z-10 absolute">
          <Image src={car} layout="fill" objectFit="cover" />
        </div>

        <div className=" grid place-items-center">
          {/*
          <Link href="/checkin">
            <motion.div
              animate={{
                y: [100, 0],
                opacity: [0, 1],
                transition: { duration: 1 },
              }}
              className="bg-yellow-400 px-32 py-12 my-10 text-white text-center font-bold text-5xl rounded-md cursor-pointer"
            >
              Check in
            </motion.div>
          </Link>
                              */}

          <Link href="/math">
            <motion.div
              animate={{
                y: [100, 0],
                opacity: [0, 1],
                transition: { duration: 1 },
              }}
              className="bg-white px-20 py-10 my-10 text-black text-center font-bold text-5xl rounded-md cursor-pointer"
            >
              Math 👨🏻‍🚀
            </motion.div>
          </Link>

          <Link href="/english">
            <motion.div
              animate={{
                y: [100, 0],
                opacity: [0, 1],
                transition: { duration: 1 },
              }}
              className="bg-white px-20 py-10 my-10 text-black text-center font-bold text-5xl rounded-md cursor-pointer"
            >
              English 🦑
            </motion.div>
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default Home;
