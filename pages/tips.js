import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>coding site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/coding_logo.svg" />
      </Head>
      <p>this will show all tips and resources for your progress</p>
    </div>
  );
}

export default MyApp;
