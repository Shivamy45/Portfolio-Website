import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import AboutCard from "./AboutCard";
import AboutCard2 from "./AboutCard2";

const About = () => {
	return (
		<div className="flex flex-col border-2 border-blue-700">
			<div className="border-2">
				<p>Introduction</p>
				<p>About Me</p>
			</div>
			<div className="flex border-2">
				{/* My Image */}
				<Image
					src={assets.user_image}
					className="w-40 h-60"
					alt="User Image"
				/>
				<div>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Eaque odio eveniet dolorum ratione, ea
						consequuntur qui quod nulla unde! Tenetur incidunt fuga
						voluptates explicabo consectetur blanditiis nisi,
						repudiandae sed reiciendis.
					</p>
					{infoList.map((item, idx) => (
						<AboutCard key={idx} data={item} />
					))}
					<p>Tools I Use</p>
					<div className="flex">
						{toolsData.map((item, idx) => (
							<AboutCard2 key={idx} img={item} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
