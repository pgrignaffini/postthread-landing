import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Info from "../components/Info";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PostThread on Mastodon</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gradient-radial from-[#2D2C2A] to-[#120D16] ">
        <div className="grid grid-cols-2 ">
          <div className="col-span-1 flex flex-col items-center justify-center  space-y-12 p-4">
            <div className="flex items-center space-x-4">
              <img src="/logo.svg" alt="PostThread Logo" className="w-64" />
              <p className="font-poppins mt-4 text-4xl text-slate-200">
                on Mastodon
              </p>
            </div>
            <div className="mx-auto w-3/4 space-y-4 text-justify">
              <h3 className="text-3xl font-bold text-violet-300">
                Social Media that Rewards Instead of Extracts
              </h3>
              <h5 className="text-xl text-slate-200">
                PostThread gives social media users control over their feed,
                data and privacy. We compensate content creators in crypto for
                the value they provide.
              </h5>
            </div>
            <Link target="_blank" href="https://postthread.xyz/about">
              <button className="btn-primary btn">Go to PostThread.xyz</button>
            </Link>
            <div className="w-3/4 space-y-8 ">
              <p className="text-justify text-xl italic text-slate-200">
                PostThread is a Decentralized Social Media Application powered
                by Mastodon connected to the Polkadot Parachain Frequency.
                Please visit our{" "}
                <Link
                  target="_blank"
                  href="https://mcian91.gitbook.io/postthread/"
                  className="text-violet-500 underline"
                >
                  white paper
                </Link>{" "}
                for more in-depth information about the site, our tokenomics and
                philosophy.{" "}
              </p>
            </div>
            {/* <Info /> */}
          </div>
          <div className="col-span-1">
            <img
              className="h-screen w-full"
              src="/thread-mastodon.png"
              alt="PostThread"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
