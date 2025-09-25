import React from "react";
import { serviceData } from "@/assets/assets";
import ServicesCard from "./ServicesCard";

const Services = () => {
	return (
		<div className="border-2 border-black">
			<div className="border-2 border-amber-600">
				<p>What I Offer</p>
				<p>My Services</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Blanditiis mollitia ad animi consectetur a corporis?
				</p>
			</div>
			<div className="flex border-2 border-gray-700">
				{serviceData.map((item, idx) => (
					<ServicesCard key={idx} data={item} />
				))}
			</div>
		</div>
	);
};

export default Services;
