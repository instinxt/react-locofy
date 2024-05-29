import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
	return (
		<footer
			className={`self-stretch [background:linear-gradient(91.74deg,_#0b5ba8_25.38%,_#299bd8)] flex flex-row flex-wrap items-start justify-center py-[33px] px-[84px] box-border gap-[43.5px] shrink-0 [debug_commit:bf4bc93] max-w-full text-left text-lg text-primary-contrast font-components-button-large mq725:gap-[22px] mq725:pl-[42px] mq725:pr-[42px] mq725:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
		>
			<div className="flex-1 flex flex-col items-start justify-start gap-[14px] min-w-[385px] max-w-full shrink-0 mq725:min-w-full">
				<img
					className="w-[174px] h-[33px] relative overflow-hidden shrink-0"
					loading="lazy"
					alt=""
					src="/logo.svg"
				/>
				<p className="m-0 self-stretch relative leading-[27px]">
					Fickle Flight is your one-stop travel portal. We offer hassle free
					flight and hotel bookings. We also have all your flight needs in you
					online shop.
				</p>
				<div className="flex flex-row items-start justify-start gap-[20px]">
					<img
						className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
						loading="lazy"
						alt=""
						src="/entyposocialfacebookwithcircle.svg"
					/>
					<img
						className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
						loading="lazy"
						alt=""
						src="/entyposocialinstagramwithcircle.svg"
					/>
					<img
						className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
						loading="lazy"
						alt=""
						src="/entyposocialtwitterwithcircle.svg"
					/>
				</div>
			</div>
			<div className="h-[157.9px] w-px relative box-border border-r-[1px] border-solid border-gray-200 mq1050:w-full mq1050:h-px" />
			<div className="flex-1 flex flex-row items-start justify-start min-w-[385px] max-w-full text-xl mq725:flex-wrap mq725:min-w-full">
				<div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[20.7px] min-w-[148px]">
					<div className="w-[174.7px] relative leading-[27px] font-medium inline-block mq450:text-base mq450:leading-[22px]">
						Company
					</div>
					<div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-base">
						<div className="w-[135.7px] relative inline-block">About Us</div>
						<div className="w-[84.3px] relative inline-block">News</div>
						<div className="w-[115.1px] relative inline-block">Careers</div>
						<div className="self-stretch relative">How we work</div>
					</div>
				</div>
				<div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[20.7px] min-w-[148px]">
					<div className="w-[131.6px] relative leading-[27px] font-medium inline-block mq450:text-base mq450:leading-[22px]">
						Support
					</div>
					<div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-base">
						<div className="w-[109.6px] relative inline-block">Account</div>
						<div className="self-stretch relative">Support Center</div>
						<div className="w-[53px] relative inline-block">FAQ</div>
						<div className="w-[164.4px] relative inline-block">
							Accessibility
						</div>
					</div>
				</div>
				<div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[20.7px] min-w-[148px]">
					<div className="w-[76.7px] relative leading-[27px] font-medium inline-block mq450:text-base mq450:leading-[22px]">
						More
					</div>
					<div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-base">
						<div className="w-[172.9px] relative inline-block">
							Covid Advisory
						</div>
						<div className="w-[135.4px] relative inline-block">
							Airline Fees
						</div>
						<div className="w-[50.6px] relative inline-block">Tips</div>
						<div className="self-stretch relative">Quarantine Rules</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	className: PropTypes.string,
};

export default Footer;
