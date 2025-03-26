import Head from "next/head"

export default function LandingPage() {
  return (
    <main>
      {/* Metadata for the page */}
      <Head>
        <title>Home page</title>
        <meta name="description" content="Insure homepage" />
      </Head>
      <section>
        <div className="border-1">Block 1</div>
        <div className="border-1">Block 2</div>
        <div className="border-1">Block 3</div>
        <div className="border-1">Block 4</div>
        <div className="border-1">Block 5</div>
        <div className="border-1">Block 6</div>
        <div className="border-1">Block 7</div>
        <div className="border-1">Block 8</div>
        <div className="border-1">Block 9</div>
        <div className="border-1">Block 10</div>
        <div className="border-1">Block 11</div>
        <div className="border-1">Block 12</div>
        <div className="border-1 bg-custom-blue">Block 13</div>
      </section>
    </main>
  );
}