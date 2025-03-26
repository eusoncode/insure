import Head from "next/head"

export default function LandingPage() {
  return (
    <main>
      {/* Metadata for the page */}
      <Head>
        <title>Home page</title>
        <meta name="description" content="Insure homepage" />
      </Head>
      <main>
        <section className="container">
          <div>
            <div>
              <button>
                <span></span>
              </button>
              <button>
                <span></span>
              </button>
            </div>
            <div>
              <h1>Insurance for the better family life.</h1>
              <p>
                Living for your family and ensuring your legacy for the next
                generation
              </p>
              <button>Let's Get Started</button>
            </div>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div></div>
        </section>
        <div className="container">Block 2</div>
        <div className="container">Block 3</div>
        <div className="container">Block 4</div>
        <div className="container">Block 5</div>
        <div className="container">Block 6</div>
        <div className="container">Block 7</div>
        <div className="container">Block 8</div>
        <div className="container">Block 9</div>
        <div className="container">Block 10</div>
        <div className="container">Block 11</div>
        <div className="container">Block 12</div>
      </main>
    </main>
  );
}