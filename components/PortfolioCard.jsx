import React from "react";

const PortfolioCard = ({ data }) => {
	return (
		<div style={{ backgroundImage: `url(${data.bgImage})` }}>
			<p>{data.title}</p>
			<p>{data.description}</p>
		</div>
	);
};

export default PortfolioCard;
