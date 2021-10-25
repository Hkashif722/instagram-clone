import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className=" bg-gray-50 h-screen overflow-y-scroll scrollbar-none">
      <Head>
        <title>Instagram</title>
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"
        />
      </Head>
      <Header />
      {/* Feed  */}
      <Feed />
    </div>
  );
}
