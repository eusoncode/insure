import Insurance_section from "@/components/body_section/insurance_page_section";
import Save_money_section from "@/components/body_section/insurance_page_section";
import About_company_section from "@/components/body_section/insurance_page_section";
import Offering_section from "@/components/body_section/insurance_page_section";
import About_company2_section from "@/components/body_section/insurance_page_section";
import Envato_section from "@/components/body_section/insurance_page_section";
import Free_quote_page_section from "@/components/body_section/insurance_page_section";
import Numbers_section from "@/components/body_section/insurance_page_section";
import Recent_portfolio_section from "@/components/body_section/insurance_page_section";
import Recent_news_feed_section from "@/components/body_section/insurance_page_section";
import Track_your_claim_section from "@/components/body_section/insurance_page_section";

export default function Main_section() {
  return (
    <section className="container">
      <div className="flex flex-col max-h-screen">
        <Insurance_section />
        <Save_money_section />
        <About_company_section />
        <Offering_section />
        <About_company2_section />
        <Envato_section />
        <Free_quote_page_section />
        <Numbers_section />
        <Recent_portfolio_section />
        <Recent_news_feed_section />
        <Track_your_claim_section />
      </div>
    </section>
  );
}
