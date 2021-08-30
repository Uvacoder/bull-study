import { useState, ChangeEvent } from "react";
import { NextPage } from "next";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Layout from "../components/Layout";

const markdown = `
<h1 className='text-4xl font-bold m-10'>
Exercise : Bài tập thì hiện tại đơn - Điền dạng đúng của từ trong ngoặc
</h1>
   
<div className='m-10' className='m-10'>
1. She always _____ delicious meals. (make)
</div className='m-10'>

<div className='m-10'>
2. Tome ____ eggs. (not eat)
</div className='m-10'>

<div className='m-10'>
3. They _____ the homework on Sunday. (do)
</div className='m-10'>

<div className='m-10'>
4. He _____ a new T-shirt today. (buy)
</div className='m-10'>

<div className='m-10'>
5. My mom _____ shopping every week. (go)
</div className='m-10'>

<div className='m-10'>
6. Do Duong and Hoa _____ to work by bus every day? (go)
</div className='m-10'>

<div className='m-10'>
7. Did your parents _____ with your decision? (agree)
</div className='m-10'>

<div className='m-10'>
8. My sister _____ her hair every day (wash)
</div className='m-10'>

<div className='m-10'>
9. Police _____ robbers (catch)
</div className='m-10'>

`;

const initialValues = {
  cau1: "",
  cau2: "",
  cau3: "",
  cau4: "",
  cau5: "",
  cau6: "",
  cau7: "",
  cau8: "",
  cau9: "",
  cau10: "",
};

const BaiTap: NextPage = () => {
  const [userInput, setUserInput] = useState(initialValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const submitHandler = () => {
    localStorage.setItem("answer", JSON.stringify(userInput));
  };

  return (
    <>
      <Layout title="Bài tập">
        <div className=" text-2xl">
          <ReactMarkdown children={markdown} rehypePlugins={[rehypeRaw]} />
        </div>
        <div className="grid place-items-center">
          <h1 className="text-4xl font-extrabold ">ANSWER</h1>
        </div>
        <main className="mx-10 grid ">
          <h1 className="text-xl m-6">
            Câu 1: &nbsp;
            <input
              name="cau1"
              value={userInput.cau1}
              onChange={handleChange}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </h1>
          <h1 className="text-xl m-6">
            Câu 2: &nbsp;
            <input
              name="cau2"
              value={userInput.cau2}
              onChange={handleChange}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </h1>
          <h1 className="text-xl m-6">
            Câu 3: &nbsp;
            <input
              name="cau3"
              value={userInput.cau3}
              onChange={handleChange}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </h1>
          <h1 className="text-xl m-6">
            Câu 4: &nbsp;
            <input
              name="cau4"
              value={userInput.cau4}
              onChange={handleChange}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </h1>
          <h1 className="text-xl m-6">
            Câu 5: &nbsp;
            <input
              name="cau5"
              value={userInput.cau5}
              onChange={handleChange}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </h1>
          <h1 className="text-xl m-6">
            Câu 6: &nbsp;
            <input
              name="cau6"
              value={userInput.cau6}
              onChange={handleChange}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </h1>
          <h1 className="text-xl m-6">
            Câu 7: &nbsp;
            <input
              name="cau7"
              value={userInput.cau7}
              onChange={handleChange}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </h1>
          <h1 className="text-xl m-6">
            Câu 8: &nbsp;
            <input
              name="cau8"
              value={userInput.cau8}
              onChange={handleChange}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </h1>
          <h1 className="text-xl m-6">
            Câu 9: &nbsp;
            <input
              name="cau9"
              value={userInput.cau9}
              onChange={handleChange}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </h1>
          <h1 className="text-xl m-6">
            Câu 10: &nbsp;
            <input
              name="cau10"
              value={userInput.cau10}
              onChange={handleChange}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </h1>
        </main>

        <section className="grid place-items-center m-10">
          <Link href="/thongbao">
            <div
              onClick={submitHandler}
              className="bg-green-400 p-8 text-white text-2xl  font-bold text-center rounded-md"
            >
              Đã làm xong !
            </div>
          </Link>
        </section>
      </Layout>
    </>
  );
};

export default BaiTap;
