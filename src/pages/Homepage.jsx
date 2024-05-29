import TopHeader from "../components/TopHeader";
import SearchSection from "../components/SearchSection";
import Flights from "../components/Flights";
import TripMenus from "../components/TripMenus";
import FrameComponent from "../components/FrameComponent";
import RecommendedHolidaysContainer from "../components/RecommendedHolidaysContainer";
import PopularStays from "../components/PopularStays";
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="w-full relative bg-primary-contrast overflow-hidden flex flex-col items-start justify-start gap-[69px] leading-[normal] tracking-[normal] hover:[background:linear-gradient(#fff,_#fff),_#87550a] mq725:gap-[34px] mq450:gap-[17px]">
      <section className="self-stretch flex flex-col items-start justify-start max-w-full">
        <TopHeader />
        <SearchSection />
      </section>
      <section className="self-stretch flex flex-col items-start justify-start py-0 px-20 box-border gap-[80px] max-w-full text-left text-lg text-darkslategray-300 font-components-button-large mq725:gap-[40px] mq725:pl-10 mq725:pr-10 mq725:box-border mq450:gap-[20px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
          <b className="self-stretch relative tracking-[0.04em] uppercase">
            Recent Searches
          </b>
          <Flights />
          <TripMenus />
        </div>
        <FrameComponent />
        <div className="w-[231.4px] rounded-12xl bg-primary-contrast hidden flex-row items-start justify-start gap-[10px] whitespace-nowrap text-right text-cornflowerblue-300">
          <div className="h-[21px] flex-1 relative tracking-[0.04em] font-medium inline-block">
            View all destinations
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/arrowright.svg"
          />
        </div>
        <RecommendedHolidaysContainer />
        <PopularStays />
      </section>
      <section className="self-stretch h-[754.7px] flex flex-col items-start justify-start pt-0 px-0 pb-[225.7px] box-border max-w-full mq725:pb-24 mq725:box-border mq1000:pb-[147px] mq1000:box-border mq450:h-auto">
        <SubscribeSection />
        <Footer />
      </section>
    </div>
  );
};

export default Homepage;
