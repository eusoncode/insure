import Insurance_section from "@/components/body_section/insurance_page_section";
import Save_money_section from "@/components/body_section/save_your_money_section";
import About_company_section from "@/components/body_section/about_company_section";
import Offering_section from "@/components/body_section/offering_section";
import About_company2_section from "@/components/body_section/about_company2_section";
import Envato_section from "@/components/body_section/envato_section";
import Free_quote_page_section from "@/components/body_section/insurance_page_section";
import Numbers_section from "@/components/body_section/numbers_section";
import Recent_portfolio_section from "@/components/body_section/recent_portfolio_section";
import Recent_news_feed_section from "@/components/body_section/recent_news_feed_section";
import Track_your_claim_section from "@/components/body_section/track_your_claim_section";

export default function Main_section() {
  return (
    <section className="container ml-2">
      <div className="flex flex-col max-h-screen max-w-screenmt-20 mb-2">
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
