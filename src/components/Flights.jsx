import FlightMainContainer from "./FlightMainContainer";
import PropTypes from "prop-types";

const Flights = ({ className = "" }) => {
	return (
		<div
			className={`self-stretch flex flex-row items-start justify-start max-w-full text-left text-5xl text-cornflowerblue-300 font-components-button-large ${className}`}
		>
			<FlightMainContainer
				sIN="SIN"
				lAX="LAX"
				departOn="Depart on: "
				sep2021="7 Sep 2021"
			/>

			<FlightMainContainer
				sIN="MY"
				lAX="DUB"
				departOn="Depart on:"
				sep2021=" 9 Sep 2021"
			/>
		</div>
	);
};

Flights.propTypes = {
	className: PropTypes.string,
};

export default Flights;
