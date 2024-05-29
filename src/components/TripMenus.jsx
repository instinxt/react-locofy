import PropTypes from "prop-types";

const TripMenus = ({ className = "" }) => {
	return (
		<div
			className={`self-stretch flex flex-row flex-wrap items-start justify-between gap-[20px] text-center text-mini text-gray-100 font-components-button-large ${className}`}
		>
			<div className="flex flex-col items-start justify-start gap-[8px] text-left">
				<img
					className="w-[65.4px] h-[65.4px] relative shrink-0 [debug_commit:bf4bc93]"
					loading="lazy"
					alt=""
					src="/hotel-icon.svg"
				/>
				<div className="flex flex-row items-start justify-start py-0 px-[13px]">
					<div className="relative tracking-[0.04em] inline-block min-w-[39px] shrink-0 [debug_commit:bf4bc93]">
						Hotel
					</div>
				</div>
			</div>
			<div className="w-20 flex flex-col items-start justify-start gap-[8px]">
				<div className="self-stretch flex flex-row items-start justify-start py-0 px-[7px]">
					<div className="flex-1 rounded-2xl bg-sandybrown flex flex-row items-start justify-start pt-[17px] px-4 pb-[17.1px]">
						<div className="h-[65.4px] w-[65.4px] relative rounded-2xl bg-sandybrown hidden" />
						<img
							className="h-[31.3px] w-[31.6px] relative z-[1]"
							alt=""
							src="/ticket.svg"
						/>
					</div>
				</div>
				<div className="relative tracking-[0.04em] inline-block min-w-[80px]">
					Attractions
				</div>
			</div>
			<div className="flex flex-col items-end justify-start gap-[8px]">
				<img
					className="w-[65.4px] h-[65.4px] relative shrink-0 [debug_commit:bf4bc93]"
					loading="lazy"
					alt=""
					src="/eats-icon.svg"
				/>
				<div className="flex flex-row items-start justify-end py-0 pr-4 pl-[17px]">
					<div className="relative tracking-[0.04em] inline-block min-w-[32px] shrink-0 [debug_commit:bf4bc93]">
						Eats
					</div>
				</div>
			</div>
			<div className="flex flex-col items-start justify-start gap-[8px]">
				<div className="flex flex-row items-start justify-start py-0 px-0.5">
					<div className="rounded-2xl bg-gold flex flex-row items-start justify-start pt-[17.3px] px-[19px] pb-[16.4px] shrink-0 [debug_commit:bf4bc93]">
						<div className="h-[65.4px] w-[65.4px] relative rounded-2xl bg-gold hidden" />
						<img
							className="h-[31.7px] w-[26.9px] relative z-[1]"
							alt=""
							src="/train.svg"
						/>
					</div>
				</div>
				<div className="relative tracking-[0.04em] inline-block min-w-[70px] shrink-0 [debug_commit:bf4bc93]">
					Commute
				</div>
			</div>
			<div className="w-[70px] flex flex-col items-end justify-start gap-[8px]">
				<div className="self-stretch rounded-2xl bg-cornflowerblue-100 flex flex-row items-start justify-start pt-[19.4px] px-5 pb-[19.7px] shrink-0 [debug_commit:bf4bc93]">
					<div className="h-[65.4px] w-[70px] relative rounded-2xl bg-cornflowerblue-100 hidden" />
					<img
						className="h-[26.3px] w-[28.4px] relative z-[1]"
						alt=""
						src="/taxi.svg"
					/>
				</div>
				<div className="self-stretch flex flex-row items-start justify-end py-0 pr-[18px] pl-[19px]">
					<div className="flex-1 relative tracking-[0.04em] inline-block min-w-[32.1px] shrink-0 [debug_commit:bf4bc93]">
						Taxi
					</div>
				</div>
			</div>
			<div className="flex flex-col items-start justify-start gap-[8px]">
				<div className="rounded-2xl bg-yellowgreen flex flex-row items-start justify-start pt-[21.1px] px-[19px] pb-[21px] shrink-0 [debug_commit:bf4bc93]">
					<div className="h-[65.4px] w-[65.4px] relative rounded-2xl bg-yellowgreen hidden" />
					<img
						className="h-[23.3px] w-[26.1px] relative z-[1]"
						alt=""
						src="/movie.svg"
					/>
				</div>
				<div className="flex flex-row items-start justify-start py-0 pr-[7px] pl-1.5">
					<div className="relative tracking-[0.04em] inline-block min-w-[52px] shrink-0 [debug_commit:bf4bc93]">
						Movies
					</div>
				</div>
			</div>
		</div>
	);
};

TripMenus.propTypes = {
	className: PropTypes.string,
};

export default TripMenus;
