import Head from "next/head";

function ScoreCard({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>coding site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/coding_logo.svg" />
      </Head>
      <p>here all your score and report card will be shown </p>
    </div>
  );
}

export default ScoreCard;
