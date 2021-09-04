import { NextPage } from "next";
import Image from "next/image";

import baitap from "../public/2.png";
import Layout from "../components/Layout";
import Input from "../components/Input";

const BaiTap: NextPage = () => {
  return (
    <>
      <Layout title="Test">
        <div className=" text-2xl grid place-items-center">
          <Image src={baitap} width={1000} height={700} />
        </div>
        <div className="grid place-items-center">
          <h1 className="text-4xl font-extrabold ">ANSWER</h1>
        </div>

        <Input />
      </Layout>
    </>
  );
};

export default BaiTap;
