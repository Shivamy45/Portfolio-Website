import nodemailer from "nodemailer";

export async function POST(req) {
	const { name, email, message } = await req.json();

	try {
		const transporter = nodemailer.createTransport({
			service: "gmail",
			host: email,
			auth: {
				user: process.env.MY_EMAIL,
				pass: process.env.MY_PASS,
			},
		});

		const info = await transporter.sendMail({
			from: process.env.MY_EMAIL,
			replyTo: email,
			to: process.env.MY_EMAIL,
			subject: `Portfolio Contact From ${name}`,
			text: message,
			html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p>${message}</p>`,
		});
		return new Response(
			JSON.stringify({
				message: `Mail sent successfully with ${info.messageId}`,
			}),
			{
				status: 200,
			}
		);
	} catch (err) {
		console.log(err);
		return new Response(JSON.stringify({ message: "Mail not sent!" }), {
			status: 500,
		});
	}
}
