import Insurance_section from "@/components/body_section/insurance_page_section";
import About_company_section from "@/components/body_section/about_company_section";
import Offering_section from "@/components/body_section/offering_section";
import About_company2_section from "@/components/body_section/about_company2_section";
import Envato_section from "@/components/body_section/envato_section";
import Free_quote_page_section from "@/components/body_section/free_quote_page_section";
import Numbers_section from "@/components/body_section/numbers_section";
import Recent_portfolio_section from "@/components/body_section/recent_portfolio_section";
import Recent_news_feed_section from "@/components/body_section/recent_news_feed_section";

export default function Main_section() {
  return (
    <section className="">
      <div className="flex flex-col">
        <Insurance_section />
        <About_company_section />
        <Offering_section />
        <About_company2_section />
        <Envato_section />
        <Free_quote_page_section />
        <Numbers_section />
        <Recent_portfolio_section />
        <Recent_news_feed_section />
      </div>
    </section>
  ); 
}
