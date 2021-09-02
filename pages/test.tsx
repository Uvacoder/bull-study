import { NextPage } from "next";
import Image from "next/image";

import Layout from "../components/Layout";
import Input from "../components/Input";

const BaiTap: NextPage = () => {
  return (
    <>
      <Layout title="Test">
        <div className=" text-2xl grid place-items-center"></div>
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
