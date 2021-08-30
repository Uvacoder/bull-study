import React, { ReactNode } from "react";
import Head from "next/head";

interface Props {
  title: string;
  children?: ReactNode;
}

const Layout = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Rampart+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="w-screen h-screen font-pacifico">{children}</main>
    </>
  );
};

export default Layout;
