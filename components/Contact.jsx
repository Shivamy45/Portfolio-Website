"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
const Contact = () => {
	const { theme } = useTheme();
	const [loading, setLoading] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const formData = Object.fromEntries(new FormData(e.target));
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});
			const response = await res.json();
			console.log(response);
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};
	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }} // start state
			whileInView={{ opacity: 1, y: 0 }} // animate when in viewport
			viewport={{ once: true, amount: 0.3 }} // trigger once when 30% visible
			transition={{ duration: 0.6, ease: "easeOut" }}
			id="contact"
			className="bg-[var(--color-bg)] flex flex-col gap-10 justify-center items-center min-h-screen min-w-full text-[var(--color-text-primary)]">
			<div className="text-center w-1/2 font-ovo flex flex-col gap-5">
				<p className="text-2xl">Connect With Me</p>
				<p className="text-6xl">Get In Touch</p>
				<p className="text-xl/normal text-[var(--color-text-secondary)]">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Labore, deserunt!
				</p>
			</div>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-8 w-1/3 items-stretch justify-center">
				<input
					type="text"
					name="name"
					placeholder="Enter your name"
					className="input-box"
					required
				/>
				<input
					type="email"
					name="email"
					placeholder="Enter your email"
					className="input-box"
					required
				/>
				<textarea
					name="message"
					id="message"
					rows={5}
					placeholder="Enter your message"
					className="input-box"
					required></textarea>
				<button
					type="submit"
					className="dark_btn w-auto"
					disabled={loading}>
					{loading ? "Loading..." : "Submit now"}
					{!loading && (
						<Image
							src={
								theme === "dark"
									? assets.right_arrow_white
									: assets.right_arrow_white
							}
							alt="right arrow"
							className="w-4 h-2"
						/>
					)}
				</button>
			</form>
		</motion.section>
	);
};

export default Contact;
