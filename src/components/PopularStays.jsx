import { useCallback } from "react";
import HotelCard from "./HotelCard";
import PropTypes from "prop-types";

const PopularStays = ({ className = "" }) => {
  const onViewAllStaysButtonClick = useCallback(() => {
    // Please sync "Hotels Page" to the project
  }, []);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full text-left text-11xl text-darkslategray-300 font-components-button-large ${className}`}
    >
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px]">
        <h2 className="m-0 flex-1 relative text-inherit tracking-[0.04em] capitalize font-bold font-inherit inline-block min-w-[159px] max-w-full mq1000:text-5xl mq450:text-lg">
          Popular Stays
        </h2>
        <div className="w-[174.7px] flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 box-border text-right text-lg text-cornflowerblue-300">
          <div
            className="self-stretch rounded-12xl bg-primary-contrast flex flex-row items-start justify-start gap-[10px] whitespace-nowrap cursor-pointer"
            onClick={onViewAllStaysButtonClick}
          >
            <a className="[text-decoration:none] flex-1 relative tracking-[0.04em] font-medium text-[inherit]">
              View all stays
            </a>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/arrowright-4.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch grid flex-row items-start justify-start grid-cols-[repeat(4,_minmax(240px,_1fr))] text-base mq725:grid-cols-[minmax(240px,_1fr)] mq1050:[grid-row-gap:20px] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(240px,_416px))]">
        <HotelCard
          matterhornSuitesImage="/matterhorn-suites-image@2x.png"
          entireBungalow="Entire bungalow"
          matterhornSuites="Matterhorn Suites"
          night="$575/night"
          inputField1="4.9"
          reviews="(60 reviews)"
        />
        <div className="flex flex-row items-start justify-start py-0 px-3">
          <div className="flex-1 rounded-3xs bg-primary-contrast flex flex-col items-start justify-start py-[13px] px-3 gap-[22.7px] border-[1px] border-solid border-whitesmoke hover:bg-gainsboro hover:cursor-pointer">
            <img
              className="self-stretch h-[200px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/discovery-shores-image@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-start gap-[11px] text-gray-100">
                <div className="flex-1 relative tracking-[0.02em]">
                  2-Story beachfront suite
                </div>
                <img
                  className="h-[25px] w-[25px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/video.svg"
                />
              </div>
              <div className="w-[234px] flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border text-3xl">
                <h3 className="m-0 flex-1 relative text-inherit tracking-[0.04em] capitalize font-bold font-inherit mq450:text-lg">
                  Discovery Shores
                </h3>
              </div>
              <div className="w-[234px] relative text-lg tracking-[0.04em] inline-block">
                $360/night
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[8.3px] mq450:flex-wrap">
              <div className="flex flex-row items-start justify-start gap-[3.7px] shrink-0 [debug_commit:bf4bc93]">
                <img
                  className="h-[17.2px] w-[16.6px] relative"
                  alt=""
                  src="/input-field.svg"
                />
                <div className="relative tracking-[0.04em] font-medium inline-block min-w-[25px]">
                  4.8
                </div>
              </div>
              <a className="[text-decoration:none] flex-1 relative tracking-[0.04em] text-cornflowerblue-200 inline-block min-w-[81px] shrink-0 [debug_commit:bf4bc93]">
                (116 reviews)
              </a>
            </div>
            <div className="self-stretch rounded overflow-hidden flex flex-row items-start justify-start py-2 pr-[79px] pl-20 whitespace-nowrap text-mini text-cornflowerblue-200 border-[1px] border-solid border-lavender-200 mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="relative tracking-[0.46px] leading-[26px] uppercase font-medium inline-block min-w-[109px]">
                More details
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-3">
          <div className="flex-1 rounded-3xs bg-primary-contrast flex flex-col items-start justify-start py-[13px] px-3 gap-[23px] border-[1px] border-solid border-whitesmoke hover:bg-gainsboro hover:cursor-pointer">
            <img
              className="self-stretch h-[200px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/arctic-hut-image@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-start gap-[5px] text-gray-100">
                <div className="flex-1 relative tracking-[0.02em]">
                  Single deluxe hut
                </div>
                <img
                  className="h-[25px] w-[25px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/video.svg"
                />
              </div>
              <div className="w-60 flex flex-col items-start justify-start pt-0 px-0 pb-[23px] box-border gap-[6px] text-3xl">
                <h3 className="m-0 self-stretch relative text-inherit tracking-[0.04em] capitalize font-bold font-inherit mq450:text-lg">{`Arctic Hut `}</h3>
                <div className="self-stretch relative text-lg tracking-[0.04em]">
                  $420/night
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[22px] gap-[8.3px] mq450:flex-wrap">
                <div className="flex flex-row items-start justify-start gap-[3.7px]">
                  <img
                    className="h-[17.2px] w-[16.7px] relative shrink-0 [debug_commit:bf4bc93]"
                    alt=""
                    src="/vector-2.svg"
                  />
                  <div className="relative tracking-[0.04em] font-medium inline-block min-w-[25px] shrink-0 [debug_commit:bf4bc93]">
                    4.7
                  </div>
                </div>
                <a className="[text-decoration:none] flex-1 relative tracking-[0.04em] text-cornflowerblue-200 inline-block min-w-[74px]">
                  (78 reviews)
                </a>
              </div>
              <div className="self-stretch rounded overflow-hidden flex flex-row items-start justify-start py-2 pr-[79px] pl-20 whitespace-nowrap text-mini text-cornflowerblue-200 border-[1px] border-solid border-lavender-200 mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="relative tracking-[0.46px] leading-[26px] uppercase font-medium inline-block min-w-[109px]">
                  More details
                </div>
              </div>
            </div>
          </div>
        </div>
        <HotelCard
          matterhornSuitesImage="/lake-louise-image@2x.png"
          entireBungalow="Deluxe King Room"
          matterhornSuites="Lake Louise Inn"
          night="$244/night"
          inputField1="4.6"
          reviews="(63 reviews)"
          propBorder="1px solid #cdddec"
        />
      </div>
      <div className="w-[174.7px] rounded-12xl bg-primary-contrast hidden flex-row items-start justify-start gap-[10px] whitespace-nowrap text-right text-lg text-cornflowerblue-300">
        <div className="h-[21px] flex-1 relative tracking-[0.04em] font-medium inline-block">
          View all stays
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt=""
          src="/arrowright-4.svg"
        />
      </div>
    </div>
  );
};

PopularStays.propTypes = {
  className: PropTypes.string,
};

export default PopularStays;
