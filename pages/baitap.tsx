import { NextPage } from "next";
import Image from "next/image";

import Layout from "../components/Layout";
import baitapImg from "../public/Screen Shot 2021-08-30 at 22.21.42.png";
import Input from "../components/Input";

const BaiTap: NextPage = () => {
  return (
    <>
      <Layout title="Bài tập">
        <div className=" text-2xl grid place-items-center">
          <Image src={baitapImg} width={1000} height={550} />
        </div>
        <div className="grid place-items-center">
          <h1 className="text-4xl font-extrabold ">ANSWER</h1>
        </div>
        <main className="mx-10 grid "></main>

        <Input />
      </Layout>
    </>
  );
};

export default BaiTap;
