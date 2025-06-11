import Head from "next/head"
import Main_section from "@/components/pages_main_section/index_main_section";


export default function LandingPage() {
  return (
    <main>
      {/* Metadata for the page */}
      <Head>
        <title>Home page</title>
        <meta name="description" content="Insure homepage" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>
      {/* Main body */}
      <Main_section />
    </main>
  );
}