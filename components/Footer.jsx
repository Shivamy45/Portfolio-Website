import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
	return (
		<div className="border-2 border-b-amber-950">
			<Image src={assets.logo} alt="logo" className="w-30 h-10" />
			<div className="flex border-2">
				<Image src={assets.mail_icon} alt="mail" />
				officialxshivam45@gmail.com
			</div>
			<div className="h-0.5 w-full bg-black"></div>
			<div className="flex justify-between border-2">
				<p>&copy; 2025 Shivam. All rights reserved.</p>
				<ul className="flex">
					<li>Terms of Services</li>
					<li>Privacy Policy</li>
					<li>Connect With Me</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
