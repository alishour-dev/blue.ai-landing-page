import { NextResponse } from "next/server"
import nodemailer, { type SendMailOptions } from "nodemailer"
import type { ZodError } from "zod"

import { ContactSchema } from "@/lib/zod/schema"
import type { contactDataType } from "@/sections/ContactFormSection"

function transformErrorMessages(zodIssues: ZodError<contactDataType>["issues"]): string {
	const readableErrorsList: string[] = zodIssues.map((issue) => {
		if (issue.code === "invalid_type") {
			if (issue.received === "undefined") return `${issue.path[0]} property was missing`
			return `Invalid type for ${issue.path[0]}: expected ${issue.expected}, received ${issue.received}`
		}
		if (issue.code === "invalid_enum_value") return issue.message
		if (issue.code === "unrecognized_keys") return `Unrecognized key(s): '${issue.keys.join(", ")}'`

		return "Unknown error"
	})

	return `${zodIssues?.length} Error${zodIssues?.length > 1 ? "s" : ""} occured: ${readableErrorsList?.join(", ")}.`
}

export async function POST(req: Request) {
	const data: contactDataType = await req.json()
	const response = ContactSchema.safeParse(data)

	if (!response.success) {
		return NextResponse.json(transformErrorMessages(response.error.issues), { status: 500 })
	}

	const { name, email } = response.data
	const { BLUE_SMTP_AUTH, BLUE_SMTP_PASS, BLUE_SMTP_HOST } = process.env

	// Creating a nodemailer transporter with our SMTP server config
	const transporter = nodemailer.createTransport({
		host: BLUE_SMTP_HOST,
		port: 465,
		secure: true,
		auth: { user: BLUE_SMTP_AUTH, pass: BLUE_SMTP_PASS },
	})

	// Checking if form is used for testing
	// If testing email was passed, then send the confirmation email to the admin (Testing purposes)
	// and management email to SMTP server only if not send management email to Blue.Ai Management
	const isTestingEmail = chechkIfTestingEmail({ name, email })

	const emailsToBeSent: SendMailOptions[] = [
		{
			from: BLUE_SMTP_AUTH,
			to: isTestingEmail ? process.env.BLUE_ADMIN : email,
			subject: "Thank you for contacting us!",
			html: userMail(name),
		},
		{
			from: BLUE_SMTP_AUTH,
			to: isTestingEmail ? BLUE_SMTP_AUTH : `${BLUE_SMTP_AUTH}, ${process.env.BLUE_MANAGEMENT}`,
			subject: `New message from user: ${name}`,
			html: managementEmail(data),
		},
	]

	try {
		await Promise.all(emailsToBeSent.map((config) => transporter.sendMail(config)))
		return NextResponse.json("Message sent successfully")
	} catch (err: any) {
		console.log("An error occurred while sending emails:", err)
		return NextResponse.json(err?.message || "Oops, An error has occured! Please try again later.", { status: 500 })
	}
}

/**
 * @description Checks if submitted user's name or email belongs to a testing user
 * @param {name: String, email: string} Params Submitted User's name and email
 * @returns Boolean
 */
const chechkIfTestingEmail = ({ name, email }: Partial<contactDataType>) => {
	const nameRegex = new RegExp(/(?:^|\s)(test|testing)(?=\s|$)/i)
	const emailRegex = new RegExp(
		/(?:^|\s)(test@email\.com|testing@email\.com|test@test\.com|testing@test\.com)(?=\s|$)/i
	)

	if (!name?.length || !email?.length) {
		throw new Error("No name or email were passed. Please pass all required inputs.")
	}

	// returns true if one of the passed inputs are used for testing the SMTP server
	// Thus we'll only send both emails to the ADMIN
	return nameRegex.test(name) || emailRegex.test(email)
}

const emailTemplate = ({ title, content, styles }: Record<"title" | "content", string> & { styles?: string }) => `
<!DOCTYPE html>
<html>
<head>
  <title>${title}</title>
  <style>
	body {
		font-family: Arial, sans-serif;
		background-color: #ffffff;
		margin: 0;
		padding: 0;
	}

	.container {
		max-width: 600px;
		margin: 0 auto;
		padding: 20px;
	}

	.header {
		background-color: #6ABDEA;
		padding: 20px;
		text-align: center;
		color: #ffffff;
	}

	.logo {
		text-align: center;
		margin-bottom: 20px;
	}

	.logo img {
		max-width: 200px;
		height: auto;
	}

	.content {
		background-color: #ffffff;
		padding: 20px;
		text-align: left;
		color: #000000;
	}

	.cta-button {
		display: inline-block;
		background-image: linear-gradient(to right, #82DCFF, #DAA4CB);
		border-radius: 4px;
		color: #ffffff !important;
		padding: 10px 20px;
		text-decoration: none;
		margin-top: 20px;
	}

    ${styles?.length ? styles : ""}
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      	<h1>${title}</h1>
	 	<div class="logo">
			<img src='https://blue.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.4f2a584f.png&w=64&q=100' alt="Blue.Ai Logo">
		</div>
    </div>
    <div class="content">
      ${content}
	  <a class="cta-button" href="https://blue.ai">Visit Our Website</a>
      <p>Best Regards,</p>
      <p>The Blue.Ai Team</p>
    </div>
  </div>
</body>
</html>
`
const managementEmail = (data: contactDataType) =>
	emailTemplate({
		title: "New Contact Inquiry from a User",
		styles: `
		.table-container {
			margin-top: 20px;
			overflow-x: auto;
		}

		table {
			width: 100%;
			border-collapse: collapse;
		}

		th, td {
			padding: 10px;
			text-align: left;
			border-bottom: 1px solid #dddddd;
		}
	`,
		content: `
		<p>Dear Management Team,</p>
		<p>A new contact inquiry has been received from a user. Please find the user's details below:</p>

		<div class="table-container">
		<table>
			<tr>
			<th>Name</th>
			<td>${data?.name}</td>
			</tr>
			<tr>
			<th>Email</th>
			<td>${data?.email}</td>
			</tr>
			<tr>
			<th>Phone Number</th>
			<td>${data?.phoneNumber}</td>
			</tr>
			<tr>
			<th>Company Name</th>
			<td>${data?.companyName}</td>
			</tr>
			<tr>
			<th>Role</th>
			<td>${data?.role}</td>
			</tr>
			<tr>
			<th>Interested In</th>
			<td>${data?.interestedIn?.length ? data?.interestedIn?.join(", ") : "No Item was selected"}</td>
			</tr>
			<tr>
			<th>Message</th>
			<td>${data?.message}</td>
			</tr>
		</table>
		</div>
		<p>Please take appropriate action to respond to this inquiry promptly. Thank you!</p>
	`,
	})
const userMail = (name: string) =>
	emailTemplate({
		title: "Thank You for Contacting Blue.Ai",
		content: `
		<p>Dear ${name ?? "user"},</p>
		<p>
			Thank you for reaching out to Blue.Ai, your trusted partner in the tech world. We appreciate your interest in
			our services. As a leading provider of CX (Customer Experience) and omnichannel platforms for enterprises, we
			are committed to delivering cutting-edge solutions to enhance customer engagement and drive business growth.
		</p>
		<p>
			Rest assured that your message has been received, and our team is working diligently to review your inquiry.
			One of our experienced agents will contact you soon to discuss your specific requirements and provide you with
			the information you need.
		</p>
		<p>
			In the meantime, we invite you to explore our website to learn more about our comprehensive suite of solutions
			and how they can revolutionize your customer interactions.
		</p>
	`,
	})
