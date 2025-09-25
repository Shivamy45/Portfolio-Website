import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Contact = () => {
	return (
		<div>
			<div>
				<p>Connect With Me</p>
				<p>Get In Touch</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Labore, deserunt!
				</p>
			</div>
			<form action="submit" method="post" className="flex flex-col">
				<div className="flex">
					<input type="text" placeholder="Enter your Name" />
					<input type="email" placeholder="Enter your Email" />
				</div>
				<textarea
					name="message"
					id="message"
					placeholder="Enter your Message"></textarea>
				<button type="submit" className="bg-black text-white">
					Submit now <Image src={assets.right_arrow_white} alt="right arrow" />
				</button>
			</form>
		</div>
	);
};

export default Contact;
