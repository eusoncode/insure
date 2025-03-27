import Head from "next/head"
import Main_section from "@/components/main_section";


export default function LandingPage() {
  return (
    <main>
      {/* Metadata for the page */}
      <Head>
        <title>Home page</title>
        <meta name="description" content="Insure homepage" />
      </Head>
      {/* Main body */}
      <Main_section />
    </main>
  );
}