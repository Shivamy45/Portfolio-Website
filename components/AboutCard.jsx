import Image from "next/image";
import React from "react";

const AboutCard = ({ data }) => {
	return (
		<div>
			<Image src={data.icon} alt="Icon" />
			<p>{data.title}</p>
			<p>{data.description}</p>
		</div>
	);
};

export default AboutCard;
