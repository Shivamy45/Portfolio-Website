import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { useTheme } from "@/contexts/ThemeContext";

const Footer = () => {
	const { theme } = useTheme();
	return (
		<div className="bg-[var(--color-bg)] flex flex-col gap-4 justify-center items-center min-w-full ">
			<Image
				src={theme === "dark" ? assets.logo_dark : assets.logo}
				alt="logo"
				className="w-30 h-10"
			/>
			<div className="flex justify-center items-center gap-2 text-[var(--color-text-muted)]">
				<Image
					src={
						theme === "dark"
							? assets.mail_icon_dark
							: assets.mail_icon
					}
					alt="mail"
					className="w-5 h-4"
				/>
				officialxshivam45@gmail.com
			</div>
			<div className="h-0 border w-3/4 border-[var(--color-border-footer)]"></div>
			<div className="flex justify-between text-[var(--color-text-footer)] pb-4 w-3/4 text-lg">
				<p>&copy; 2025 Shivam. All rights reserved.</p>
				<ul className="flex gap-9">
					<li>Terms of Services</li>
					<li>Privacy Policy</li>
					<li>Connect With Me</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
