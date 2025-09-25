import Image from "next/image";
import React from "react";

const AboutCard2 = ({ img }) => {
	return (
		<div>
			<Image src={img} alt="Tool" />
		</div>
	);
};

export default AboutCard2;
