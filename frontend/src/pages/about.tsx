import About_main_section from "@/components/pages_main_section/about_main_section";
import Head from "next/head";

export default function AboutPage() {
  return (
    <section>
      {/* Metadata for the page */}
      <Head>
        <title>About page</title>
        <meta name="description" content="Insure aboutpage" />
      </Head>
      {/* Main body */}
      <About_main_section />
    </section>
  );
}
