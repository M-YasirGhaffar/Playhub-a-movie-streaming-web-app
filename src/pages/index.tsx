import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>BlueBird Movie App</title>
        <meta
          name="description"
          content="Solution for Full Stack Developer Assignment"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        "Taking to dashboard"
      </main>
    </>
  );
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/dashboard",
      permanent: false,
    },
  };
}