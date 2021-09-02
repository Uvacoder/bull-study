import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

import tenses from "../public/tenses.png.png";

const LyThuyet: NextPage = () => {
  return (
    <>
      <Layout title="Lý thuyết">
        <main className="m-3">
          <Image src={tenses} width={1000} height={800} />
        </main>
        <section className="grid place-items-center m-10">
          <Link href="/test">
            <div className="bg-green-400 p-10 m-3 text-white text-2xl  font-bold text-center rounded-md">
              Quay trở lại bài tập
            </div>
          </Link>
        </section>
      </Layout>
    </>
  );
};

export default LyThuyet;
