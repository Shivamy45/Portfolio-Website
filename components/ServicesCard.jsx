import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServicesCard = ({ data }) => {
	return (
		<div>
			<Image src={data.icon} alt="Icon" />
			<p>{data.title}</p>
			<p>{data.description}</p>
			<Link href={data.link} target="blank">
				Read More
				<Image src={assets.right_arrow} alt="right arrow" />
			</Link>
		</div>
	);
};

export default ServicesCard;
