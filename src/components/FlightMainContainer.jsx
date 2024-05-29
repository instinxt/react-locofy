import { useMemo } from "react";
import PropTypes from "prop-types";

const FlightMainContainer = ({
	className = "",
	sIN,
	lAX,
	departOn,
	sep2021,
	propWidth,
	propFlex,
	propMarginLeft,
	propMinWidth,
}) => {
	const flightMainContainerStyle = useMemo(() => {
		return {
			width: propWidth,
			flex: propFlex,
			marginLeft: propMarginLeft,
		};
	}, [propWidth, propFlex, propMarginLeft]);

	const lAXStyle = useMemo(() => {
		return {
			minWidth: propMinWidth,
		};
	}, [propMinWidth]);

	return (
		<div
			className={`w-[632.5px] rounded-lg box-border flex flex-col items-start justify-start py-[18px] px-[19px] gap-[21px] max-w-full text-left text-5xl text-cornflowerblue-300 font-components-button-large border-[1px] border-solid border-whitesmoke ${className}`}
			style={flightMainContainerStyle}
		>
			<div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
				<b className="w-[44.7px] relative tracking-[0.04em] capitalize font-bold inline-block shrink-0 mq450:text-lgi">
					{sIN}
				</b>
				<div className="w-[117.4px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
					<img
						className="self-stretch h-6 relative max-w-full overflow-hidden shrink-0"
						alt=""
						src="/duration.svg"
					/>
				</div>
				<b
					className="w-[51.3px] relative tracking-[0.04em] capitalize font-bold text-right inline-block shrink-0 mq450:text-lgi"
					style={lAXStyle}
				>
					{lAX}
				</b>
			</div>
			<div className="self-stretch flex flex-row items-start justify-center py-0 pr-0.5 pl-0 text-xl text-black">
				<div className="relative tracking-[0.04em] leading-[24px] capitalize mq450:text-base">
					<b>{departOn}</b>
					<span>{sep2021}</span>
				</div>
			</div>
		</div>
	);
};

FlightMainContainer.propTypes = {
	className: PropTypes.string,
	sIN: PropTypes.string,
	lAX: PropTypes.string,
	departOn: PropTypes.string,
	sep2021: PropTypes.string,

	/** Style props */
	propWidth: PropTypes.any,
	propFlex: PropTypes.any,
	propMarginLeft: PropTypes.any,
	propMinWidth: PropTypes.any,
};

export default FlightMainContainer;
