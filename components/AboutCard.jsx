import Image from "next/image";
import React from "react";
import { useTheme } from "@/contexts/ThemeContext";

const AboutCard = ({ data }) => {
	const { theme } = useTheme();
	return (
		<div className="border border-[var(--color-border-light)] bg-[var(--color-bg-secondary)] w-50 h-50 shadow-[4px_4px_0_0_var(--color-shadow-card)] rounded-lg flex flex-col justify-center px-5 gap-4">
			<Image src={theme === "dark" ? data.iconDark : data.icon} alt="Icon" className="w-7" />
			<p className="text-[var(--color-text-dark)] font-medium text-xl">{data.title}</p>
			<p className="font-ovo text-base/snug text-[var(--color-text-muted)]">
				{data.description}
			</p>
		</div>
	);
};

export default AboutCard;
