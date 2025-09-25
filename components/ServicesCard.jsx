import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServicesCard = ({ data }) => {
	return (
		<div className="border-2 border-[#DCDCDC] bg-[#FCF4FF] w-82 h-75 flex flex-col justify-center px-5 py-2 gap-7 shadow-[4px_4px_4px_2px_rgba(0,0,0,0.5)] rounded-lg">
			<Image src={data.icon} alt="Icon" className="w-10" />
			<p className="text-[#494949] font-medium text-xl">{data.title}</p>
			<p className="font-ovo text-base/snug text-[#797979]">
				{data.description}
			</p>
			<Link
				href={data.link}
				target="blank"
				className="flex text-[#797979] gap-2 items-center">
				Read More
				<Image
					src={assets.right_arrow}
					alt="right arrow"
					className="w-3 h-3"
				/>
			</Link>
		</div>
	);
};

export default ServicesCard;
