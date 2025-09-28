import React from "react";

const PortfolioCard = ({ data }) => {
	return (
		<div
			style={{
				backgroundImage: `url(${data.bgImage})`,
				backgroundSize: "cover", // makes it cover the div
				backgroundPosition: "center", // centers the image
				backgroundRepeat: "no-repeat", // prevents tiling
			}}
			className="aspect-square rounded-lg flex justify-center items-end pb-5 flex-1 min-w-40">
			<div className="flex flex-col justify-center items-start cursor-pointer bg-white rounded-lg w-4/5 p-4">
				<p className="font-semibold text-[#2A2A2A] text-lg">
					{data.title}
				</p>
				<p className="text-[#5E5E5E] text-base">{data.description}</p>
			</div>
		</div>
	);
};

export default PortfolioCard;
