import Image from "next/image";
import React from "react";

const AboutCard2 = ({ img }) => {
	return (
		<div className="border border-[var(--color-border-gray)] rounded-lg p-3">
			<Image src={img} alt="Tool" className="w-9 h-9" />
		</div>
	);
};

export default AboutCard2;
