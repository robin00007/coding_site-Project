import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>coding site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/coding_logo.svg" />
      </Head>
      <p>this will show you all your avialable contest</p>
    </div>
  );
}

export default MyApp;
