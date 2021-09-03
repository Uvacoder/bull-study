// @ts-nocheck
import { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";

import test from "../public/sand-clock.svg";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { AnswersRecord } from "../store/answers";
import { useEffect, useState } from "react";
import axios from "axios";

const Notification: NextPage = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        "https://bull-study-default-rtdb.asia-southeast1.firebasedatabase.app/answers.json"
      );
      setData(
        res.data[Object.keys(res.data)[Object.keys(res.data).length - 1]]
          .answers
      );
    }
    getData();
  }, []);

  let contents = [];
  let content = <h1></h1>;
  let i = 1;
  for (const [key, value] of Object.entries(data)) {
    console.log(`${key}: ${value}`);
    content = (
      <h1 className="text-2xl font-bold m-10">
        🔥 {i}. <span className="text-2xl font-normal">{value}</span>
      </h1>
    );
    i++;
    contents.push(content);
  }

  return (
    <>
      <Layout title="Result">
        <div className="grid place-items-center w-screen h-screen">
          <h1 className="text-5xl font-extrabold">Your answer</h1>
          <div>{contents.map((content) => content)}</div>
        </div>
      </Layout>
    </>
  );
};

export default Notification;
