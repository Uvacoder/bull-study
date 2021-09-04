import { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";

import test from "../public/sand-clock.svg";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { AnswersRecord } from "../store/answers";
import { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";

const Notification: NextPage = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    "https://bull-study-default-rtdb.asia-southeast1.firebasedatabase.app/answers.json",
    fetcher
  );

  let answers;

  let contents = [];
  let content = <h1></h1>;
  if (data) {
    answers = data[Object.keys(data)[Object.keys(data).length - 1]].answers;

    let i = 1;
    for (const value of Object.entries(answers)) {
      content = (
        <h1 className="text-2xl font-bold m-10">
          🔥 {i}. {value}
        </h1>
      );
      i++;
      contents.push(content);
    }
  }

  return (
    <>
      <Layout title="Result">{contents.map((content) => content)}</Layout>
    </>
  );
};

export default Notification;
