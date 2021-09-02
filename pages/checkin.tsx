import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import coin from "../public/dollar.png";
import checked from "../public/check-mark.svg";
import arrow from "../public/arrow-down-sign-to-navigate.svg";
import Layout from "../components/Layout";

import { motion } from "framer-motion";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ProgressBar from "@ramonak/react-progress-bar";
import "react-calendar/dist/Calendar.css";
import { useDispatch, useSelector } from "react-redux";
import { checkinActions, checkinStatus } from "../store/checkin";

const CheckIn: NextPage = () => {
  const [value, onChange] = useState(new Date());
  const dispatch = useDispatch();

  const isCheckedin = useSelector(checkinStatus);

  const checkinHandler = () => {
    dispatch(checkinActions.check(true));
    localStorage.setItem("isCheckedin", "true");
  };

  return (
    <>
      <Layout title="Check in">
        <div className="w-screen h-screen p-10">
          <div className="w-full grid place-items-center">
            <Calendar
              className="rounded-lg font-bold text-xl"
              onChange={onChange}
              value={value}
            />
          </div>

          <div className="w-full mt-20">
            <ProgressBar
              completed={100}
              bgColor="#de5353"
              height="70px"
              borderRadius="10px"
              labelAlignment="center"
              baseBgColor="#ffffff"
              labelColor="#000000"
              labelSize="30px"
            />
          </div>

          <motion.div
            onClick={checkinHandler}
            animate={{
              y: [100, 0],
              opacity: [0, 1],
              transition: { duration: 1 },
            }}
            className="bg-green-300 px-32 py-12 my-10 text-white text-center font-bold text-5xl rounded-md cursor-pointer"
          >
            {isCheckedin ? (
              <Image src={checked} width={50} height={50} />
            ) : (
              <>
                + 10{" "}
                <span>
                  <Image src={coin} width={40} height={40} />
                </span>
              </>
            )}
          </motion.div>

          <motion.div
            animate={{
              y: [100, 0],
              opacity: [0, 1],
              transition: { duration: 1 },
            }}
            className="bg-green-600 px-32 py-8 my-6 text-white text-center font-bold text-5xl rounded-md cursor-pointer"
          >
            100{" "}
            <span>
              <Image src={coin} width={40} height={40} />
            </span>{" "}
            &nbsp; = &nbsp; 15 mins
          </motion.div>

          <motion.div
            className="w-full grid place-items-center my-10"
            animate={{
              y: [20, 10],
              transition: { duration: 1, repeat: Infinity },
            }}
          >
            <Image src={arrow} width={70} height={70} />
          </motion.div>
        </div>

        <Link href="/">
          <motion.div
            animate={{
              y: [100, 0],
              opacity: [0, 1],
              transition: { duration: 1 },
            }}
            className="bg-green-400 px-32 py-12  text-white text-center font-bold text-5xl rounded-md cursor-pointer"
          >
            Go back
          </motion.div>
        </Link>
      </Layout>
    </>
  );
};

export default CheckIn;
