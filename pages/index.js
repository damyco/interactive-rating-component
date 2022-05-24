import Head from "next/head";
import Card from "/components/Card";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Interactive Rating Component | Front-End Mentor challenge</title>
        <meta name="description" content="Interactive Rating Component " />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </Head>
      <main>
        <Card />
      </main>
    </>
  );
}
