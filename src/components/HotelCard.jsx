import { useMemo } from "react";
import PropTypes from "prop-types";

const HotelCard = ({
	className = "",
	matterhornSuitesImage,
	entireBungalow,
	matterhornSuites,
	night,
	inputField1,
	reviews,
	propBorder,
}) => {
	const moreDetailsButtonStyle = useMemo(() => {
		return {
			border: propBorder,
		};
	}, [propBorder]);

	return (
		<div
			className={`flex flex-row items-start justify-start py-0 px-3 text-left text-base text-gray-100 font-components-button-large ${className}`}
		>
			<div className="flex-1 rounded-3xs bg-primary-contrast flex flex-col items-start justify-start py-[13px] px-3 gap-[22.7px] border-[1px] border-solid border-whitesmoke hover:bg-gainsboro hover:cursor-pointer">
				<img
					className="self-stretch h-[200px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
					loading="lazy"
					alt=""
					src={matterhornSuitesImage}
				/>
				<div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
					<div className="self-stretch flex flex-col items-start justify-start">
						<div className="self-stretch flex flex-row items-start justify-start gap-[11px]">
							<div className="flex-1 relative tracking-[0.02em]">
								{entireBungalow}
							</div>
							<img
								className="h-[25px] w-[25px] relative overflow-hidden shrink-0"
								loading="lazy"
								alt=""
								src="/video.svg"
							/>
						</div>
						<h3 className="m-0 w-[234px] relative text-3xl tracking-[0.04em] capitalize font-bold font-inherit text-darkslategray-300 inline-block mq450:text-lg">
							{matterhornSuites}
						</h3>
					</div>
					<div className="w-[234px] relative text-lg tracking-[0.04em] text-darkslategray-300 inline-block">
						{night}
					</div>
				</div>
				<div className="self-stretch flex flex-row items-start justify-start gap-[8.3px] text-darkslategray-300 mq450:flex-wrap">
					<div className="flex flex-row items-start justify-start gap-[3.7px] shrink-0 [debug_commit:bf4bc93]">
						<img
							className="h-[17.2px] w-[16.6px] relative"
							alt=""
							src="/input-field.svg"
						/>
						<div className="relative tracking-[0.04em] font-medium inline-block min-w-[25px]">
							{inputField1}
						</div>
					</div>
					<a className="[text-decoration:none] flex-1 relative tracking-[0.04em] text-cornflowerblue-200 inline-block min-w-[74px] shrink-0 [debug_commit:bf4bc93]">
						{reviews}
					</a>
				</div>
				<div
					className="self-stretch rounded overflow-hidden flex flex-row items-start justify-start py-2 pr-[79px] pl-20 whitespace-nowrap text-mini text-cornflowerblue-200 border-[1px] border-solid border-lavender-200 mq450:pl-5 mq450:pr-5 mq450:box-border"
					style={moreDetailsButtonStyle}
				>
					<div className="relative tracking-[0.46px] leading-[26px] uppercase font-medium inline-block min-w-[109px]">
						More details
					</div>
				</div>
			</div>
		</div>
	);
};

HotelCard.propTypes = {
	className: PropTypes.string,
	matterhornSuitesImage: PropTypes.string,
	entireBungalow: PropTypes.string,
	matterhornSuites: PropTypes.string,
	night: PropTypes.string,
	inputField1: PropTypes.string,
	reviews: PropTypes.string,

	/** Style props */
	propBorder: PropTypes.any,
};

export default HotelCard;
