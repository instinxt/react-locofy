const SearchSection = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] flex flex-row items-start justify-start relative max-w-full text-center text-42xl text-primary-contrast font-baloo-bhai ${className}`}
    >
      <div className="self-stretch w-[1440px] relative [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] hidden max-w-full z-[0]" />
      <img
        className="h-full w-full absolute !m-[0] right-[0px] bottom-[-0.4px] left-[0px] max-w-full overflow-hidden object-cover z-[1]"
        alt=""
        src="/banner--background@2x.png"
      />
      <div className="flex-1 flex flex-col items-center justify-start py-[167.5px] px-5 box-border gap-[43px] max-w-full z-[2] mq725:gap-[21px] mq725:pt-[109px] mq725:pb-[109px] mq725:box-border">
        <div className="w-[1160px] flex flex-col items-start justify-start gap-[5px] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[67px] font-normal font-inherit mq1000:text-30xl mq1000:leading-[54px] mq450:text-18xl mq450:leading-[40px]">{`Let’s explore & travel the world`}</h1>
          <h3 className="m-0 self-stretch relative text-5xl leading-[32px] font-normal font-components-button-large mq450:text-lgi mq450:leading-[26px]">
            Find the best destinations and the most popular stays!
          </h3>
        </div>
        <form className="m-0 w-[1160px] rounded-3xs bg-primary-contrast flex flex-col items-start justify-start pt-[25px] px-5 pb-5 box-border gap-[9px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full">
            <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[5px] max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0 box-border min-w-[577px] max-w-full mq725:min-w-full">
                <b className="self-stretch relative text-xl tracking-[0.04em] uppercase font-components-button-large text-darkslategray-300 text-left mq450:text-base">
                  Search flights
                </b>
              </div>
              <div className="flex flex-row items-start justify-start gap-[20px]">
                <div className="flex flex-row items-start justify-start">
                  <div className="h-[38px] w-[38px] rounded-lgi flex flex-row items-center justify-start p-[9px] box-border">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/radiobuttonunchecked.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                    <div className="relative text-base tracking-[0.15px] leading-[150%] font-components-button-large text-darkslategray-400 text-left inline-block min-w-[48px]">
                      Return
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="h-[38px] w-[38px] rounded-lgi flex flex-row items-center justify-start p-[9px] box-border">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/radiobuttonchecked.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                    <div className="relative text-base tracking-[0.15px] leading-[150%] font-components-button-large text-darkslategray-400 text-left inline-block min-w-[72.5px]">
                      One-way
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px]">
            <div className="flex-1 flex flex-row items-start justify-start p-[5px] box-border gap-[10px] min-w-[615px] max-w-full mq725:min-w-full mq1000:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start min-w-[229px]">
                <div className="self-stretch rounded flex flex-col items-start justify-start py-0 px-[11px] border-[1px] border-solid border-other-outlined-border">
                  <div className="h-0.5 bg-primary-contrast flex flex-row items-center justify-start py-0 px-[3px] box-border">
                    <div className="relative text-xs tracking-[0.15px] leading-[12px] font-components-button-large text-text-secondary text-left inline-block min-w-[55px]">
                      Departure
                    </div>
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[15px] px-0 gap-[8px]">
                    <div className="hidden flex-row items-start justify-start gap-[8px]">
                      <div className="flex flex-col items-start justify-start">
                        <div className="w-[71px] rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1 box-border">
                          <div className="w-6 rounded-45xl bg-grey-grey-400 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                            <div className="h-6 flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-button-large text-grey-grey-700 text-center flex items-center justify-center">
                              F
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start py-[3px] px-1.5">
                            <div className="self-stretch h-[18px] relative text-smi tracking-[0.16px] leading-[18px] font-components-button-large text-text-primary text-left inline-block">
                              Chip
                            </div>
                          </div>
                          <img
                            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                            alt=""
                            src="/cancel.svg"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <div className="w-[71px] rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1 box-border">
                          <div className="w-6 rounded-45xl bg-grey-grey-400 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                            <div className="h-6 flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-button-large text-grey-grey-700 text-center flex items-center justify-center">
                              F
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start py-[3px] px-1.5">
                            <div className="self-stretch h-[18px] relative text-smi tracking-[0.16px] leading-[18px] font-components-button-large text-text-primary text-left inline-block">
                              Chip
                            </div>
                          </div>
                          <img
                            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                            alt=""
                            src="/cancel.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 relative text-base tracking-[0.15px] leading-[24px] font-components-button-large text-text-primary text-left">
                      Singapore (SIN)
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start min-w-[229px]">
                <div className="self-stretch rounded flex flex-col items-start justify-start py-0 px-[11px] border-[1px] border-solid border-other-outlined-border">
                  <div className="w-[43px] h-0.5 bg-primary-contrast flex flex-row items-center justify-start py-0 px-[3px] box-border">
                    <div className="relative text-xs tracking-[0.15px] leading-[12px] font-components-button-large text-text-secondary text-left inline-block min-w-[36px]">
                      Arrival
                    </div>
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[15px] px-0 gap-[8px]">
                    <div className="hidden flex-row items-start justify-start gap-[8px]">
                      <div className="flex flex-col items-start justify-start">
                        <div className="w-[71px] rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1 box-border">
                          <div className="w-6 rounded-45xl bg-grey-grey-400 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                            <div className="h-6 flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-button-large text-grey-grey-700 text-center flex items-center justify-center">
                              F
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start py-[3px] px-1.5">
                            <div className="self-stretch h-[18px] relative text-smi tracking-[0.16px] leading-[18px] font-components-button-large text-text-primary text-left inline-block">
                              Chip
                            </div>
                          </div>
                          <img
                            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                            alt=""
                            src="/cancel.svg"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <div className="w-[71px] rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1 box-border">
                          <div className="w-6 rounded-45xl bg-grey-grey-400 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                            <div className="h-6 flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-button-large text-grey-grey-700 text-center flex items-center justify-center">
                              F
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start py-[3px] px-1.5">
                            <div className="self-stretch h-[18px] relative text-smi tracking-[0.16px] leading-[18px] font-components-button-large text-text-primary text-left inline-block">
                              Chip
                            </div>
                          </div>
                          <img
                            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                            alt=""
                            src="/cancel.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 relative text-base tracking-[0.15px] leading-[24px] font-components-button-large text-text-primary text-left">
                      Los Angeles (LA)
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start min-w-[229px]">
                <div className="self-stretch rounded flex flex-col items-start justify-start py-0 px-[11px] border-[1px] border-solid border-other-outlined-border">
                  <div className="h-0.5 bg-primary-contrast flex flex-row items-center justify-start py-0 px-1 box-border">
                    <div className="relative text-xs tracking-[0.15px] leading-[12px] font-components-button-large text-text-secondary text-left inline-block min-w-[26px]">
                      Date
                    </div>
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[15px] px-0 gap-[8px]">
                    <div className="hidden flex-row items-start justify-start gap-[8px]">
                      <div className="flex flex-col items-start justify-start">
                        <div className="w-[71px] rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1 box-border">
                          <div className="w-6 rounded-45xl bg-grey-grey-400 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                            <div className="h-6 flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-button-large text-grey-grey-700 text-center flex items-center justify-center">
                              F
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start py-[3px] px-1.5">
                            <div className="self-stretch h-[18px] relative text-smi tracking-[0.16px] leading-[18px] font-components-button-large text-text-primary text-left inline-block">
                              Chip
                            </div>
                          </div>
                          <img
                            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                            alt=""
                            src="/cancel.svg"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <div className="w-[71px] rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1 box-border">
                          <div className="w-6 rounded-45xl bg-grey-grey-400 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                            <div className="h-6 flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-button-large text-grey-grey-700 text-center flex items-center justify-center">
                              F
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start py-[3px] px-1.5">
                            <div className="self-stretch h-[18px] relative text-smi tracking-[0.16px] leading-[18px] font-components-button-large text-text-primary text-left inline-block">
                              Chip
                            </div>
                          </div>
                          <img
                            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                            alt=""
                            src="/cancel.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 relative text-base tracking-[0.15px] leading-[24px] font-components-button-large text-text-primary text-left">
                      01/05/2022
                    </div>
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      alt=""
                      src="/date.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[174px] flex flex-col items-center justify-center p-[5px] box-border">
              <div className="self-stretch rounded bg-orange overflow-hidden flex flex-col items-center justify-center py-[15px] px-2 whitespace-nowrap">
                <div className="self-stretch relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-button-large text-primary-contrast text-center">
                  Search flights
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

SearchSection.propTypes = {
  className: PropTypes.string,
};

export default SearchSection;
