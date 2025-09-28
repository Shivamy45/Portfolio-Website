import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTheme } from "@/contexts/ThemeContext";

const ServicesCard = ({ data }) => {
	const { theme } = useTheme();
	return (
		<div className="border-2 border-[var(--color-border-lighter)] bg-[var(--color-bg-card-secondary)] w-82 h-75 flex flex-col justify-center px-5 py-2 gap-7 shadow-[4px_4px_4px_2px_var(--color-shadow-card-soft)] rounded-lg">
			<Image src={data.icon} alt="Icon" className="w-10" />
			<p className="text-[var(--color-text-dark)] font-medium text-xl">{data.title}</p>
			<p className="font-ovo text-base/snug text-[var(--color-text-muted)]">
				{data.description}
			</p>
			<Link
				href={data.link}
				target="blank"
				className="flex text-[var(--color-text-muted)] gap-2 items-center">
				Read More
				<Image
					src={theme === "dark" ? assets.right_arrow_bold_dark : assets.right_arrow}
					alt="right arrow"
					className="w-3 h-3"
				/>
			</Link>
		</div>
	);
};

export default ServicesCard;
