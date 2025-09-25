import Image from "next/image";
import React from "react";

const AboutCard = ({ data }) => {
	return (
		<div className="border border-[#D8D8D8] bg-[#FFFFFF80] w-50 h-50 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-lg flex flex-col justify-center px-5 gap-4">
			<Image src={data.icon} alt="Icon" className="w-7" />
			<p className="text-[#494949] font-medium text-xl">{data.title}</p>
			<p className="font-ovo text-base/snug text-[rgb(121,121,121)]">
				{data.description}
			</p>
		</div>
	);
};

export default AboutCard;
