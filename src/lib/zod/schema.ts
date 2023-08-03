import * as z from "zod"

export const ContactSchema = z
	.object({
		name: z.string().min(2),
		email: z.string().email(),
		phoneNumber: z.string().min(2),
		companyName: z.string(),
		role: z.string().optional(),
		interestedIn: z
			.array(
				z.enum([
					"Unified Platform",
					"Campaign Management System",
					"Flow Builder",
					"Adaptive NLP",
					"API",
					"Ensight Engine",
					"Live Chat Widget",
					"CRM",
					"Payment Gateway",
					"Integrations",
					"Ticketing System",
					"Billing System",
				])
			)
			.optional(),
		message: z.string(),
	})
	.strict()
