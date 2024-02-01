import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>PlayHub Movie App</title>
        <meta
          name="description"
          content="A movie streaming website using TMDB API."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        "Let&apos;s go to the Dashboard!"
      </main>
    </>
  );
}

export function getServerSideProps() {
  return {
    redirect: {
      destination: "/dashboard",
      permanent: false,
    },
  };
}