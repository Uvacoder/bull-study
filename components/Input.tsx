import { ChangeEvent, useState } from "react";
import Link from "next/link";

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

export default function Input() {
  const [userInput, setUserInput] = useState(initialValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const submitHandler = () => {
    localStorage.setItem("answers", JSON.stringify(userInput));
  };

  const contents = [];
  let content = <h1></h1>;
  for (let i = 1; i <= 10; i++) {
    content = (
      <h1 className="text-xl m-6">
        Câu {i}: &nbsp;
        <input
          id={String(i)}
          name={`cau${i}`}
          onChange={handleChange}
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        />
      </h1>
    );
    contents.push(content);
  }

  return (
    <>
      {contents.map((content) => content)}
      <main className="flex">
        <section className="grid place-items-center m-10">
          <Link href="/lessons">
            <div
              onClick={submitHandler}
              className="bg-yellow-400 px-5 py-11 m-3 text-white text-2xl  font-bold text-center rounded-md"
            >
              Xem lại lý thuyết
            </div>
          </Link>
        </section>

        <section className="grid place-items-center m-10">
          <Link href="/notification">
            <div
              onClick={submitHandler}
              className="bg-green-400 p-10 m-3 text-white text-2xl  font-bold text-center rounded-md"
            >
              Đã làm xong !
            </div>
          </Link>
        </section>
      </main>
    </>
  );
}
