import React from "react";
import { serviceData } from "@/assets/assets";
import ServicesCard from "./ServicesCard";

const Services = () => {
	return (
		<section id="services" className="flex flex-col gap-7 justify-center items-center min-h-screen min-w-full text-[#242424]">
			<div className=" text-center w-2/5 flex flex-col gap-5 font-ovo">
				<p className="text-2xl">What I Offer</p>
				<p className="text-6xl">My Services</p>
				<p className="text-[#565656] text-[20px] leading-[40px]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Blanditiis mollitia ad animi consectetur a corporis?
				</p>
			</div>
			<div className="flex w-3/4 gap-5">
				{serviceData.map((item, idx) => (
					<ServicesCard key={idx} data={item} />
				))}
			</div>
		</section>
	);
};

export default Services;
