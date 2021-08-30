import { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";

import test from "../public/sand-clock.svg";
import Layout from "../components/Layout";

const ThongBao: NextPage = () => {
  return (
    <>
      <Layout title="Xong">
        <div className="grid place-items-center w-screen h-screen">
          <h1 className="text-5xl m-5  font-bold">Bạn hãy chờ kết quả nhé !</h1>
          <motion.div
            animate={{
              rotate: 360,
              transition: { duration: 2, loop: Infinity },
            }}
            className="mb-10"
          >
            <Image src={test} width={200} height={200} />
          </motion.div>
        </div>
      </Layout>
    </>
  );
};

export default ThongBao;
