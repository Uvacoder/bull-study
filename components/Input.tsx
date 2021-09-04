import { ChangeEvent, useContext, useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { answersActions, AnswersRecord } from "../store/answers";

interface Props {
  cau1: string;
  cau2: string;
  cau3: string;
  cau4: string;
  cau5: string;
}

const initialValues: Props = {
  cau1: "",
  cau2: "",
  cau3: "",
  cau4: "",
  cau5: "",
};

export default function Input() {
  const [userInput, setUserInput] = useState(initialValues);
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const submitHandler = async () => {
    //  dispatch(answersActions.submit(userInput));
    const data = await axios.post(
      "https://bull-study-default-rtdb.asia-southeast1.firebasedatabase.app/answers.json",
      { answers: userInput },
      { headers: { "Content-Type": "application/json" } }
    );
  };

  const contents = [];
  let content = <h1></h1>;
  for (let i = 1; i <= 5; i++) {
    content = (
      <h1 className="text-xl m-6">
        💩 {i}. &nbsp;
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
      <main className="w-screen grid place-items-center">
        {contents.map((content) => content)}
      </main>
      <section className="grid place-items-center m-10">
        <Link href="/notification">
          <div
            onClick={submitHandler}
            className="bg-green-400 p-10 m-3 text-white text-2xl  font-bold text-center rounded-md"
          >
            Done
          </div>
        </Link>
      </section>
    </>
  );
}
