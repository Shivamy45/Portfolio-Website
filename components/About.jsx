import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import AboutCard from "./AboutCard";
import AboutCard2 from "./AboutCard2";

const About = () => {
	return (
		<section id="about" className="flex flex-col gap-7 justify-center items-center min-h-screen min-w-full">
			<div className="font-ovo text-center">
				<p className="text-2xl">Introduction</p>
				<p className="text-6xl">About Me</p>
			</div>
			<div className="flex justify-center w-3/4 gap-10">
				{/* My Image */}
				<Image
					src={assets.user_image}
					className="w-90"
					alt="User Image"
				/>
				<div className="flex flex-col gap-4 justify-between mb-5">
					<p className="font-ovo text-xl/normal text-[#565656]">
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Eaque odio eveniet dolorum ratione, ea
						consequuntur qui quod nulla unde! Tenetur incidunt fuga
						voluptates explicabo consectetur blanditiis nisi,
						repudiandae sed reiciendis.
					</p>
					<div className="flex gap-3">
						{infoList.map((item, idx) => (
							<AboutCard key={idx} data={item} />
						))}
					</div>
					<div className="flex flex-col">
						<p className="font-ovo text-xl text-[#868686]">
							Tools I Use
						</p>
						<div className="flex gap-4">
							{toolsData.map((item, idx) => (
								<AboutCard2 key={idx} img={item} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
