import React from "react";
import { serviceData } from "@/assets/assets";
import ServicesCard from "./ServicesCard";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
const Services = () => {
	const { theme } = useTheme();
	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }} // start state
			whileInView={{ opacity: 1, y: 0 }} // animate when in viewport
			viewport={{ once: true, amount: 0.3 }} // trigger once when 30% visible
			transition={{ duration: 0.6, ease: "easeOut" }}
			id="services"
			className="bg-[var(--color-bg)] flex flex-col gap-7 justify-center items-center min-h-screen min-w-full text-[var(--color-text-primary)]">
			<div className=" text-center w-2/5 flex flex-col gap-5 font-ovo">
				<p className="text-2xl">What I Offer</p>
				<p className="text-6xl">My Services</p>
				<p className="text-[var(--color-text-secondary)] text-[20px] leading-[40px]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Blanditiis mollitia ad animi consectetur a corporis?
				</p>
			</div>
			<div className="flex w-3/4 gap-5">
				{serviceData.map((item, idx) => (
					<ServicesCard key={idx} data={item} />
				))}
			</div>
		</motion.section>
	);
};

export default Services;
