// import type { NextSeoProps } from "next-seo"

import { PATHS } from "@/constants"
import type { SectionProps, SectionType } from "@/layouts"
import type { FooterProps } from "@/layouts/appLayout/footer"
import type { NavbarProps } from "@/layouts/appLayout/navbar"

import * as aida from "./images/caseStudy/aida"
import * as Estafeta from "./images/caseStudy/estafeta"
import * as honda from "./images/caseStudy/honda"
import * as norse from "./images/caseStudy/norse"
import * as Prada from "./images/caseStudy/prada"
import * as Wells from "./images/caseStudy/wells"
import * as Yg from "./images/caseStudy/yg"
import HeroImg from "./images/home/hero/hero.png"
import * as bottomImages from "./images/home/partners/bottom"
import * as topImages from "./images/home/partners/top"
import * as homeProducts from "./images/home/products"
import homeUnifiedPlatform from "./images/home/unifiedPlatform/img1.png"
import * as homeValues from "./images/home/values"
import * as AutomotiveImgs from "./images/industries/automotive"
import * as CustomizedImgs from "./images/industries/customized"
import * as EcommerceImgs from "./images/industries/eCommerce"
import * as FinancialImgs from "./images/industries/financial"
import * as FoodBeverageImgs from "./images/industries/foodBeverage"
import * as HealthcareImgs from "./images/industries/healthcare"
import * as InsuranceImgs from "./images/industries/insurance"
import * as LogisticsImgs from "./images/industries/logistics"
import * as RealEstateImgs from "./images/industries/realEstate"
import * as SalesImgs from "./images/industries/sales"
import logo from "./images/logo.png"
import * as AdaptiveNlpImgs from "./images/products/adaptiveNlp"
import * as ApiImages from "./images/products/api"
import * as BillingImgs from "./images/products/billingSystem"
import * as CampaignImgs from "./images/products/campaignManagement"
import * as CrmImgs from "./images/products/crm"
import * as FlowbuilderImgs from "./images/products/flowbuilder"
import * as EnsightEngineImgs from "./images/products/insightEngine"
import * as IntegrationsImgs from "./images/products/integrations"
import * as LiveChatImgs from "./images/products/liveChat"
import paymentImg from "./images/products/paymentGateway/img.png"
import * as TicketImgs from "./images/products/ticketingSystem"
import * as AiImgs from "./images/solutions/ai"
import * as CustomerSupportImgs from "./images/solutions/customerSupport"
import * as DashboardImgs from "./images/solutions/dashboard"
import TextAutomationImg from "./images/solutions/textAutomation/img.png"
import * as UnifiedPlatformImgs from "./images/unifiedPlatform"

const BLUE_BG = "bg-[#F0FBFF]"
const ROW_REVERSE = "flex-row-reverse"

export const globalData: { headerData: NavbarProps; footerData: FooterProps } = {
	headerData: {
		mainMenu: [
			{
				label: "Products",
				nested: [
					{
						label: "Campaign Management System",
						subLabel: "Optimize your marketing campaigns with great ROI",
						href: PATHS.PRODUCTS.CAMPAIGN_MANAGEMENT_SYSTEM,
						icon: "IcRoundCampaign",
					},
					{
						label: "Flow builder",
						subLabel: "Pack your interaction channels into a single management system",
						href: PATHS.PRODUCTS.FLOW_BUILDER,
						icon: "RiGitMergeFill",
					},
					{
						label: "Adaptive NLP",
						subLabel: "Futuristic Neural Language processing for an advanced future",
						href: PATHS.PRODUCTS.ADAPTIVE_NLP,
						icon: "IonHardwareChip",
					},
					{
						label: "API's",
						subLabel: "A set of integration-ready APIs for your business needs",
						href: PATHS.PRODUCTS.API,
						icon: "IonChatbubblesSharp",
					},
					{
						label: "Insight Engine",
						subLabel: "Boost your reporting techniques with our insights engine.",
						href: PATHS.PRODUCTS.INSIGHT_ENGINE,
						icon: "AntDesignDashboardFilled",
					},
					{
						label: "Livechat (widget)",
						subLabel: "Keep in touch with your clients and stay up-to-date!",
						href: PATHS.PRODUCTS.LIVECHAT,
						icon: "IcRoundMarkChatUnread",
					},
					{
						label: "CRM",
						subLabel: "Advanced Customer Relationship management tool",
						href: PATHS.PRODUCTS.CRM,
						icon: "FaSolidHandshake",
					},
					{
						label: "Payment Gateway",
						subLabel: "Integrate any payment method on your applications",
						href: PATHS.PRODUCTS.PAYMENT_GATEWAY,
						icon: "BiCreditCard2BackFill",
					},
					{
						label: "Blue.ai Integrations",
						subLabel: "Set of tools and utility functions for you business",
						href: PATHS.PRODUCTS.INTEGRATIONS,
						icon: "BiFileEarmarkCodeFill",
					},
					{
						label: "Ticketing System",
						subLabel: "Generate tickets at the go with your customers",
						href: PATHS.PRODUCTS.TICKETING_SYSTEM,
						icon: "FaSolidTicketAlt",
					},
					{
						label: "Billing System",
						subLabel: "Easy to integrate Billing System at your fingertips",
						href: PATHS.PRODUCTS.BILLING_SYSTEM,
						icon: "FaSolidMoneyCheckAlt",
					},
				],
			},
			{ label: "Unified Platform", href: PATHS.UNIFIED_PLATFORM },
			{
				label: "Solutions",
				nested: [
					{
						label: "Customer Support Automation",
						icon: "RiCustomerService2Fill",
						href: PATHS.SOLUTIONS.CUSTOMER_SUPPORT_AUTOMATION,
					},
					{
						label: "Text automation",
						icon: "BiInputCursorText",
						href: PATHS.SOLUTIONS.TEXT_AUTOMATION,
					},
					{
						label: "Dashboard and Analytics",
						icon: "IonStatsChart",
						href: PATHS.SOLUTIONS.DASHBOARD_AND_ANALYTICS,
					},
					{
						label: "Artificial Intelligence",
						icon: "SimpleIconsSmartthings",
						href: PATHS.SOLUTIONS.ARTIFICIAL_INTELLIGENCE,
					},
				],
			},
			{
				label: "Industries",
				nested: [
					{
						label: "Ecommerce",
						icon: "HeroiconsShoppingCartSolid",
						href: PATHS.INDUSTRIES.ECOMMERCE,
					},
					{
						label: "Customized",
						icon: "IcBaselineSettingsSuggest",
						href: PATHS.INDUSTRIES.CUSTOMIZED,
					},
					{
						label: "Logistics",
						icon: "FaSolidBoxOpen",
						href: PATHS.INDUSTRIES.LOGISTICS,
					},
					{
						label: "Healthcare",
						icon: "IcBaselineHealthAndSafety",
						href: PATHS.INDUSTRIES.HEALTHCARE,
					},
					{
						label: "Financial Services",
						icon: "RiMoneyDollarCircleFill",
						href: PATHS.INDUSTRIES.FINANCIAL_SERVICES,
					},
					{
						label: "Insurance",
						icon: "IcBaselineSecurity",
						href: PATHS.INDUSTRIES.INSURANCE,
					},
					{
						label: "Sales & Marketing",
						icon: "IcRoundBusinessCenter",
						href: PATHS.INDUSTRIES.SALES_AND_MARKETING,
					},
					{
						label: "Automotive",
						icon: "AntDesignCarFilled",
						href: PATHS.INDUSTRIES.AUTOMOTIVE,
					},
					{
						label: "Real Estate",
						icon: "IcBaselineRealEstateAgent",
						href: PATHS.INDUSTRIES.REAL_ESTATE,
					},
					{
						label: "Food & Beverage",
						icon: "IonFastFoodSharp",
						href: PATHS.INDUSTRIES.FOOD_AND_BEVERAGE,
					},
				],
			},
			{ label: "Case Studies", href: PATHS.CASE_STUDIES.HOME },
			{
				label: "Company",
				nested: [
					{
						label: "About Us",
						href: PATHS.COMPANY,
						icon: "BiPersonBoundingBox",
					},
					{
						label: "Where We Are",
						href: PATHS.WHERE_WE_ARE,
						icon: "IcOutlineLocationOn",
					},
				],
			},
		],
		cta: { label: "Get in touch", href: PATHS.CONTACT_US },
		logo: { src: logo.src },
	},
	footerData: {
		logo: { src: logo.src, blurDataURL: logo.blurDataURL },
		groups: [
			{
				label: "Products",
				links: [
					{
						label: "Flow Builder",
						href: PATHS.PRODUCTS.FLOW_BUILDER,
					},
					{
						label: "API'S",
						href: PATHS.PRODUCTS.API,
					},
					{
						label: "CMS",
						href: PATHS.PRODUCTS.CAMPAIGN_MANAGEMENT_SYSTEM,
					},
					{
						label: "Adaptive NLP",
						href: PATHS.PRODUCTS.ADAPTIVE_NLP,
					},
					{
						label: "Insight Engine",
						href: PATHS.PRODUCTS.INSIGHT_ENGINE,
					},
					{
						label: "CRM",
						href: PATHS.PRODUCTS.CRM,
					},
					{
						label: "Integrations",
						href: PATHS.PRODUCTS.INTEGRATIONS,
					},
					{
						label: "Billing System",
						href: PATHS.PRODUCTS.BILLING_SYSTEM,
					},
					{
						label: "Ticketing System",
						href: PATHS.PRODUCTS.TICKETING_SYSTEM,
					},
					{
						label: "Livechat",
						href: PATHS.PRODUCTS.LIVECHAT,
					},
					{
						label: "Payment Gateway",
						href: PATHS.PRODUCTS.PAYMENT_GATEWAY,
					},
				],
			},
			{
				label: "Solutions",
				links: [
					{
						label: "Support Automation",
						href: PATHS.SOLUTIONS.CUSTOMER_SUPPORT_AUTOMATION,
					},
					{
						label: "Text Automation",
						href: PATHS.SOLUTIONS.TEXT_AUTOMATION,
					},
					{
						label: "Dashboard & Analytics",
						href: PATHS.SOLUTIONS.DASHBOARD_AND_ANALYTICS,
					},
					{
						label: "Artificial Intelligence",
						href: PATHS.SOLUTIONS.ARTIFICIAL_INTELLIGENCE,
					},
				],
			},
			{
				label: "Company",
				links: [
					{
						label: "About Us",
						href: PATHS.COMPANY,
					},
					{
						label: "Contact Us",
						href: PATHS.CONTACT_US,
					},
				],
			},
		],
		socialLinks: [
			{
				href: "https://www.facebook.com/bluedotai",
				icon: "TablerBrandFacebook",
				type: "Facebook",
			},
			{
				href: "https://www.instagram.com/blue.aiofficial",
				icon: "TablerBrandInstagram",
				type: "Instagram",
			},
			{
				href: "https://www.linkedin.com/company/bluedotai/",
				icon: "TablerBrandLinkedin",
				type: "LinkedIn",
			},
		],
	},
}

interface PageShape {
	// metaData: NextSeoProps
	metaData: any
	sections: SectionProps[SectionType][]
}

export const allPagesData: Record<string, PageShape> = {
	[PATHS.HOME]: {
		metaData: { title: "Home" },
		sections: [
			{
				type: "HERO_SECTION",
				body: {
					label: ["The Best CX", "You'll Ever Create"],
					content:
						"Potential clients can be found anywhere. The difference between a lifelong customer and a missed chance can be made by delivering material that maintains brand consistency and efficient customer communication. With Blue.ai, you can connect with your clients wherever they are in the purchasing process. To ensure that you serve your international audience, we can assist you in translating information into more than 170 languages and offer customer assistance.",
					buttons: [
						{
							label: "Contact Us",
							href: PATHS.CONTACT_US,
						},
						{
							label: "Discover more",
							href: PATHS.PRODUCTS.CAMPAIGN_MANAGEMENT_SYSTEM,
						},
					],
					imgProps: { ...HeroImg, alt: "Hero section representing Feedback from two valuable customers" },
				},
			},
			{
				type: "MARQUEE_SECTION",
				header: {
					content: `# Our Trusted Companies & Partners`,
				},
				body: {
					topImages: [
						{
							...topImages.img1,
							alt: "Google",
						},
						{
							...topImages.img2,
							alt: "Saudi German Health UAE",
						},
						{
							...topImages.img3,
							alt: "enoc",
						},
						{
							...topImages.img4,
							alt: "La Senza",
						},
						{
							...topImages.img5,
							alt: "Popeyes",
						},
						{
							...topImages.img6,
							alt: "Viber",
						},
					],
					bottomImages: [
						{
							...bottomImages.img1,
							alt: "airtel",
						},
						{
							...bottomImages.img2,
							alt: "du",
						},
						{
							...bottomImages.img3,
							alt: "KDDI",
						},
						{
							...bottomImages.img4,
							alt: "Etisalat",
						},
						{
							...bottomImages.img5,
							alt: "China Mobile",
						},
						{
							...bottomImages.img6,
							alt: "Orange",
						},
						{
							...bottomImages.img7,
							alt: "VinaPhone",
						},
					],
					width: 150,
					height: 100,
				},
			},
			{
				type: "FLEX_SECTION",
				header: {
					content: `# Our Products`,
				},
				body: {
					cards: [
						{
							content: `
							### Flow builder
	
							## Without writing a single line of code, put automation to work for you
	
							Are operational snags impeding your growth? Use automated workflows and conversations to collect critical data in advance, reduce manual labor, implement self-service flows, and route chats to the appropriate agent.
							`,
							imgProps: { ...homeProducts.img1, alt: "Flow builder" },
							flexDirection: "flex-row",
							textSectionClassName: "md:[&>h2]:max-w-[445px] md:[&>p]:max-w-[570px]",
						},
						{
							content: `
							### Campaign Management System
	
							## Utilize Conversational Marketing Cloud to increase conversions at every stage of the funnel.
	
							Increase real-time engagement on your website to increase sales with an inbound marketing strategy, site query resolution with real-time automation, and intelligent marketing automation for specific audiences.
							`,
							imgProps: { ...homeProducts.img2, alt: "Campaign management system illustration" },
							flexDirection: ROW_REVERSE,
							textSectionClassName: "md:[&>h2]:max-w-[570px] md:[&>p]:max-w-[550px]",
						},
						{
							content: `
							### Integrations
	
							## Effortless Integration with Blue.ai: Simplify Your Workflow Automation
	
							With a single click, you can integrate and plug-and-play. Organize your data on a single platform to allow teams in engagement, sales, marketing, advertising, and care to collaborate seamlessly. Automate processes in your CRM, contact center platforms, ticketing, or live agent systems in real time.
							`,
							imgProps: { ...homeProducts.img3, alt: "Integrations illustration" },
							flexDirection: "flex-row",
							textSectionClassName: "md:[&>h2]:max-w-[450px] md:[&>p]:max-w-[580px]",
						},
						{
							content: `
							### Ticketing System
	
							## Unified Client Management with Omnichannel Support and Multi-Brand Help Center
	
							Organize your helpdesk according to the organizational structure of your company. Track customer requests from multiple departments, brands, and platforms. Make yourself available to your customers, regardless of their preferred contact method. Optimize your helpdesk's interaction with social networks.
							`,
							imgProps: { ...homeProducts.img4, alt: "Ticketing system illustration" },
							flexDirection: ROW_REVERSE,
							textSectionClassName: "md:[&>h2]:max-w-[520px] md:[&>p]:max-w-[580px]",
						},
						{
							content: `
							### NLP (Rich intents and entities)
	
							## Adaptive NLP: Revolutionizing Conversational AI with Zero-Shot Learning and Pre-Trained Models
	
							With intent accuracy of 85% and higher, Blue.ai is a pioneer in the conversational AI business. You can avoid the time-consuming, challenging, and error-prone model training process by using zero-shot learning. Without having to manually enter training data, companies can be up and running in minutes instead of months.
							`,
							imgProps: { ...homeProducts.img5, alt: "NLP (Rich intents and entities) illustration" },
							flexDirection: "flex-row",
							textSectionClassName: "md:[&>h2]:max-w-[550px] md:[&>p]:max-w-[640px]",
						},
					],
					classNames: { sectionClassName: "bg-[#F6FBFD]", innerClassName: "max-w-[1600px]" },
				},
			},
			{
				type: "INFO_CARDS_SECTION",
				header: {
					content: `# Our Values`,
				},
				body: {
					cards: [
						{
							label: "Make use of AI-powered listening to your advantage",
							content:
								"With the help of Blue.ai, you can better understand client opinions of your goods and services as well as gain important insights into the strategies and products used by your rivals. This allows you to spot important market trends and take advantage of unmet customer needs.",
							imgProps: { ...homeValues.img1, alt: "AI-powered listening" },
						},
						{
							label: "Respect and Empower",
							content:
								"Due to our open culture and respectful workplace employees feel valued, heard, treated fairly and are empowered to do their best work. On the other hand, we support our customers with their goals, whatever they may be and we want them to be able to achieve those confidently.",
							imgProps: { ...homeValues.img2, alt: "Respect and Empower" },
						},
						{
							label: "Reduce risk and safeguard your reputation",
							content:
								"In order to make proactive, well-informed decisions about your owned media plans and tactics, Modern Research provides your team with real-time data on trending events, current events, and brand problems before they become significant.",
							imgProps: { ...homeValues.img3, alt: "Safeguarded reputation" },
						},
					],
				},
			},
			{
				type: "IMAGE_SECTION",
				header: {
					content: `
					# Unified Platform
					
					## Learn About Unified-CX Solutions
	
					There is a better approach to keep up with the rapid expansion of data across dozens of contemporary channels — and satisfy customers' growing expectations. The way out of the point solution chaos is the Unified-CX solution.
					`,
					className: "w-[800px]",
				},
				body: {
					width: 849,
					height: 742,
					src: homeUnifiedPlatform.src,
					alt: "Blue.ai unified platform",
					blurDataURL: homeUnifiedPlatform.blurDataURL,
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "SLIDES_CAROUSEL_SECTION",
				header: {
					content: `# Case Study`,
				},
				body: {
					slides: [
						{
							content: `
							# Estafeta Mexicana: Streamlining Omnichannel Customer Experience with AI-Powered Logistics
							
							Estafeta Mexicana's size has nearly doubled in response to the growing demand for logistics services due to the pandemic. The company aims to integrate all of its digital platforms and provide an omnichannel customer experience. Estafeta has introduced a unified customer experience system (Unified-CX solution). Estafeta is one of the top three companies in the industry in terms of SLA performance, having achieved a 60 percent improvement in its customer service SLA in just two years. The goal of the company in its development is to increase visibility in the international market and expand the reach of its social platform. [Keep reading](${PATHS.CASE_STUDIES.ESTAFETA})
							`,
							imgProps: { ...Estafeta.img, alt: "Estafeta Mexicana" },
						},
						{
							content: `
							# Wells Fargo Enhances Social Media Marketing with Unified Customer Experience Management System

							Wells Fargo is a leading global financial services company and one of the most recognized brands in the banking industry. David Encizo, vice president of marketing technology for social media, wanted to help the company manage the risks and responsibilities associated with its social media activities. He tried to reduce the number of tools and gadgets used in the company and make it easier to work together. Wells Fargo has introduced a 'Unified Customer Experience Management' (UCX) system. The bank's social marketers and social workers now work together on a unified platform where they create and monitor advertising campaigns, plan and publish content aggregation, and listen to online discussions. [Keep Reading](${PATHS.CASE_STUDIES.WELLS_FARGO})
							`,
							imgProps: { ...Wells.img, alt: "Wells Fargo" },
						},
						{
							content: `
							# YG Entertainment Elevates Fan Engagement with AI-Powered Customer Experience Management

							YG Entertainment is a South Korean entertainment company responsible for creating popular music groups like BIGBANG, BLACKPINK, etc. The company was founded in 1996 with the goal of finding and developing local performers. To better understand their followers, YG Entertainment deployed a market-leading customer experience management platform in May 2020 to monitor fan conversations on over 30 social media and online platforms. The adoption of the platform has allowed YG Entertainment to organize their fan monitoring process in a more methodical manner, resulting in a better understanding of fan emotions and preferences. This helps the company provide its followers with the best experience and form a closer bond with them. [Keep Reading](${PATHS.CASE_STUDIES.YG_ENTERTAINMENT})
							`,
							imgProps: { ...Yg.img, alt: "YG Entertainment" },
						},
						{
							content: `
							# How Prada Group drives premium brand digital innovation

							The Prada Group has adopted a digital-first approach in order to stay ahead of cultural trends and offer customers a seamless shopping experience. They implemented the Unified-CX solution to bring together point solutions and provide a personalized, AI-powered experience for their Millennial and Gen Z customers. The platform allows sales representatives to interact with clients via social media, improve customer service with conversational marketing, and monitor the well-being of the brand. As a result, Prada Group can sell, serve, and maintain customers on a single platform, while compiling important data and achieving complete visibility into their campaigns. [Keep Reading](${PATHS.CASE_STUDIES.PRADA})
							`,
							imgProps: { ...Prada.img, alt: "Prada Group" },
						},
						{
							content: `
							# What Honda did to unify customer service in the new age of online auto sales

							Honda adopted the Unified-CX solution strategy to unify its customer service in the new age of online auto sales. Honda ON, Honda's first online automobile sales website, was positioned for success from the start. To integrate its customer experience management, Honda utilized the Unified-CX solution platform to handle multi-channel customer service offerings, plan and monitor marketing messages, and reduce brand hazards by monitoring social and online sources. With the addition of speech functionality, Honda ON can now provide seamless omnichannel customer service through voice, social media, chatbots, and live chat. The goal of Honda ON is to engage with younger generations of car buyers and provide filled-to-the-brim service quality through social publishing and engagement. [Keep Reading](${PATHS.CASE_STUDIES.HONDA})
							`,
							imgProps: { ...honda.img, alt: "Honda" },
						},
						{
							content: `
							# How Norse quickly introduced an omnichannel customer service program

							Norse Atlantic Airways, a new low-cost airline, introduced an omnichannel customer service program to provide seamless customer support through channels such as social media, voice, and email. The program is simple to use, with a unified inbox and access to a base of knowledge and prefabricated responses. This helps resolve most customer complaints via self-service and online communication, streamlining workflows and allowing for real-time data-driven customer assistance. The program was implemented quickly and easily, with a user-friendly design. [Keep Reading](${PATHS.CASE_STUDIES.NORSE})
							`,
							imgProps: { ...norse.img, alt: "Norse" },
						},
						{
							content: `
							# How AIDA Cruises maintains love even in the face of adversity

							AIDA Cruises, a German cruise line, is known as a 'love brand' with strong affection from both staff and customers. The company faced the challenge of keeping the romance alive during the epidemic when all of its 14 ships were halted for several weeks. In 2017, AIDA digital team uses social listening and engagement to monitor customer feedback in real-time and provide prompt responses. The company was able to withstand the slump in tourism in 2020 and maintain contact with its clients and residents through social media, notifications, and dashboard. [Keep Reading](${PATHS.CASE_STUDIES.AIDA_CRUISES})
							`,
							imgProps: { ...aida.img, alt: "AIDA" },
						},
					],
				},
			},
		],
	},
	[PATHS.PRODUCTS.CAMPAIGN_MANAGEMENT_SYSTEM]: {
		metaData: {
			title: "Campaign Management System Product",
			description:
				"Increase Real-Time Engagement On Your Website To Increase Sales, automate Outbound Efforts To Increase Interactions And Engagement Outside The Site, all of which will ultimately result in higher Client Lifetime Value Through Whole CX",
			openGraph: {
				title: "Blue.AI Products: Campaign Management System",
				description:
					"Increase Real-Time Engagement On Your Website To Increase Sales, automate Outbound Efforts To Increase Interactions And Engagement Outside The Site, all of which will ultimately result in higher Client Lifetime Value Through Whole CX",
			},
		},
		sections: [
			{
				type: "PAGE_HEADER_SECTION",
				body: {
					content: `
					# Campaign Management System
	
					Utilize Conversational Marketing Cloud to increase conversions at every stage of the funnel.
					`,
				},
			},
			{
				type: "STATS_SECTION",
				body: {
					cards: [
						{
							stat: "420%",
							text: "Increased Open Rates",
						},
						{
							stat: "75%",
							text: "More Channels Are Engaged Now",
						},
						{
							stat: "85%",
							text: "Increase In Lead Conversion",
						},
						{
							stat: "$130M",
							text: "Impact On Business",
						},
					],
					classNames: { sectionClassName: "bg-[#F6FBFD]" },
				},
			},
			{
				type: "FLEX_SECTION",
				header: {
					content: `# Increase Real-Time Engagement On Your Website To Increase Sales`,
				},
				body: {
					content: `
					1. Increase organic website conversions with an inbound marketing strategy:

					**Find and qualify the most relevant leads, then nurture their interest in real time through bot prompts.**

					2. Direct visitors with suggestions motivated by a specific purpose:

					**Determine the purpose of each visitor's visit to your website and guide them to the solutions they're looking for with timely recommendations for higher conversion rates.**

					3. Site Query Resolution with Real-Time Automation:

					**Use our intention-triggered inbound automation to engage visitors on interesting pages or recommend a more appropriate journey. Bring the visitor from "yes" to "absolutely" with just a few clicks.**
					`,
					imgProps: { ...CampaignImgs.img1, alt: "Campaign Management image 1" },
					textSectionClassName: "md:max-w-[680px]",
				},
			},
			{
				type: "FLEX_SECTION",
				header: {
					content: `# Automate Outbound Efforts To Increase Interactions And Engagement Outside The Site`,
					className: "w-[918px]",
				},
				body: {
					content: `
					1. Intelligent marketing automation for specific audiences: 
					
					**With just a few clicks, it's easy to design and automate highly engaging campaigns that precisely target specific audiences based on their intent, journey, and profiles.**

					2. Keep visitors engaged even after they leave your website:
					
					**Catch the attention of lost visitors to direct them to the service, goods, or item in their shopping cart they are looking for. Reconnect them to the network or interact with them whenever it suits you on your favorite channel. Automation of communication between channels from a single platform By enabling cross-channel, multilingual communication on a single platform with integrated translations, you can maximize the potential of your employees. Use our simple system to make your campaign more effective.**
					`,
					imgProps: { ...CampaignImgs.img2, alt: "Campaign management image 2" },
					flexDirection: ROW_REVERSE,
					classNames: { sectionClassName: "bg-[#F6FBFD]" },
				},
			},
			{
				type: "FLEX_SECTION",
				header: {
					content: `# Higher Client Lifetime Value Through Whole CX`,
				},
				body: {
					content: `**With great inbound interaction and targeted on-channel campaigns, you can enhance the overall experience of your visitors and customers to increase retention and life-time value.**
			
					**[Want to learn more? Check to see what we can achieve for your sector in the list of insutries pages](http://localhost:3000/industries)**
					`,
					imgProps: {
						...CampaignImgs.img3,
						alt: "Campaign management image 3",
						width: 410,
						height: 315,
					},
					textSectionClassName: "md:max-w-[550px]",
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					nextPage: { label: "Flow Builder", subLabel: "Products:", href: PATHS.PRODUCTS.FLOW_BUILDER },
					previousPage: { label: "Home", href: PATHS.HOME },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
		],
	},
	[PATHS.PRODUCTS.FLOW_BUILDER]: {
		metaData: {
			title: "Flow builder Product",
			description:
				"Because ordinary encounters aren't catchy enough, create engaging, personalized, and data-driven experiences and that's much better!",

			openGraph: {
				title: "Blue.AI Products: Flow Builder",
				description:
					"Because ordinary encounters aren't catchy enough, create engaging, personalized, and data-driven experiences and that's much better!",
			},
		},
		sections: [
			{
				type: "PAGE_HEADER_SECTION",
				body: {
					content: `
					# Flow Builder
	
					Because ordinary encounters aren't catchy enough, create engaging, personalized, and data-driven experiences and that's much better!
					`,
					classNames: { innerClassName: "max-w-[833px]" },
				},
			},
			{
				type: "INFO_CARDS_SECTION",
				header: {
					content: `
					# Interactions That Are Slow And Are Boring At The Same Time? Use Better Words And Statements Instead`,
					className: "w-[1096px]",
				},
				body: {
					cards: [
						{
							label: "Create scripts for small and large jobs",
							content:
								"Create basic autoresponders to get started, then move on to complete customer journeys. Any workflow can be automated.",
							imgProps: { ...FlowbuilderImgs.img1, alt: "Scripted document" },
						},
						{
							label: "Reduces data complexity",
							content:
								"The link between your organization's data silos is Flow Builder. Set up pipelines to automatically deliver your data to where it's needed.",
							imgProps: { ...FlowbuilderImgs.img2, alt: "Statistical chart" },
						},
						{
							label: "Build experiences across platforms",
							content:
								"Communicates with consumers through all available channels and provides comprehensive shopping, support, and other contextual information.",
							imgProps: { ...FlowbuilderImgs.img3, alt: "Building experiences" },
						},
					],
					classNames: { sectionClassName: "mt-0" },
				},
			},
			{
				type: "INFO_CARDS_SECTION",
				header: {
					content: `
					# Choose A Template Or Begin From Scratch

					Utilize template flows to create experiences that are ready for production and integrate data across applications.
					`,
				},
				body: {
					cards: [
						{
							label: "Loop from SMS to Email",
							content: "When a new SMS is received, send an email.",
							imgProps: { ...FlowbuilderImgs.img4, alt: "Email sent" },
						},
						{
							label: "Cart Abandonment Engagement",
							content: "Customers who leave items in their shopping carts should receive an SMS notification.",
							imgProps: { ...FlowbuilderImgs.img5, alt: "User engagement" },
						},
						{
							label: "SMS Customer Service",
							content: "The support workflow can be improved.",
							imgProps: { ...FlowbuilderImgs.img6, alt: "SMS Customer Service" },
						},
					],
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "FLEX_SECTION",
				header: {
					content: `# Utilize Data To Create Compelling Experiences`,
				},
				body: {
					content: `
					1. Choose a trigger, for example, a new order on your platform or an incoming message.

					2. Add mechanisms to route messages, process data (e.g., for speech recognition), and make relevant API calls.

					3. Create a personalized customer experience by leveraging planned interactions across all communication channels.

					4. Create data routing logic and system changes to reflect the latest information from customer communications.
					`,
					imgProps: { ...FlowbuilderImgs.img7, alt: "Omnichannel experiences" },
					textSectionClassName: "md:!max-w-[40%] [&>p]:font-normal",
				},
			},
			{
				type: "DUAL_SECTIONS",
				header: {
					content: `
					# Construction Of Omnichannel Experiences
					`,
				},
				body: {
					sections: [
						{
							type: "FLEX_SECTION",
							body: {
								content: `
								## Create new ways to interact with customers:

								With Flow Builder, you can create more meaningful interactions with your customers on the platforms they already use, for example, filling out registration forms on WhatsApp, exchanging media on Messenger, enabling SMS orders, or making Viber appointments.
								`,
								imgProps: { ...FlowbuilderImgs.img8, alt: "Flowbuilder representation illustartion" },
								classNames: {
									// sectionClassName: {
									// 	backgroundImage: "radial-gradient(circle, #707070 5%, transparent 0%)",
									// 	backgroundRepeat: "repeat",
									// 	backgroundSize: "25px 25px",
									// },
									sectionClassName: "bg-gradient-radial from-[#707070c] to-transparent bg-no-repeat bg-[25px_25px]",
								},
							},
						},
						{
							type: "INFO_CARDS_SECTION",
							body: {
								cards: [
									{
										label: "Abandoning And Restoring The Shopping Cart",
										content: "Create compelling experiences to automatically retarget those customers and drive sales.",
										imgProps: { ...FlowbuilderImgs.img9, alt: "Shopping Cart" },
									},
									{
										label: "Inbox Help",
										content:
											"Use the Inbox, your customers' conversation control panel, to forward messages to your support team.",
										imgProps: { ...FlowbuilderImgs.img10, alt: "Inbox Help" },
									},
									{
										label: "Reaction Menus",
										content: "Use numbers or phrases to direct your client to the appropriate resources.",
										imgProps: { ...FlowbuilderImgs.img5, alt: "Reaction Menus" },
									},
									{
										label: "Chatbots",
										content:
											"Automate repetitive, wordy answers or provide helpful links and information to solve common problems.",
										imgProps: { ...FlowbuilderImgs.img11, alt: "Chatbots" },
									},
									{
										label: "User Registration And Employee Onboarding",
										content:
											"Introduce your platform to users and collaborators using your chosen communication method.",
										imgProps: { ...FlowbuilderImgs.img12, alt: "User Registration And Employee Onboarding" },
									},
									{
										label: "Appointments",
										content:
											"By connecting to your programming software with Flow Builder, you can avoid manual reprogramming.",
										imgProps: { ...FlowbuilderImgs.img13, alt: "Appointments" },
									},
								],
							},
						},
					],
					classNames: { sectionClassName: "bg-[#F6FBFD]" },
				},
			},
			{
				type: "INFO_CARDS_SECTION",
				header: {
					content: `
					# Put Your Data To Use Wherever You Are

					Build data pipelines quickly
					Build marketing campaign pipelines, centralize context from support software,
					or empower your contact center with data from your CRM.
					`,
				},
				body: {
					cards: [
						{
							label: "Cross-Functional Data Connections",
							content:
								"Create data pipelines between various sales, marketing, and support applications using Flow Builder.",
							imgProps: { ...FlowbuilderImgs.img14, alt: "Cross-Functional Data Connections" },
						},
						{
							label: "Custom HTTP Requests and Webhooks",
							content:
								"Create data flows between sources that are not owned by you, such as point-of-sale (POS) systems, CRMs, fulfillment companies, order processing systems, and others.",
							imgProps: { ...FlowbuilderImgs.img15, alt: "Custom HTTP Requests and Webhooks" },
						},
						{
							label: "AI-Powered Consumer Insights",
							content: "Add details to client profiles, such as preferred language and communication method.",
							imgProps: { ...FlowbuilderImgs.img16, alt: "AI-Powered Consumer Insights" },
						},
					],
				},
			},
			{
				type: "FLEX_SECTION",
				header: {
					content: `
					# Insights And Simulation

					Test and simulate flows, comprehend real-time performance, and resolve problems
					`,
				},
				body: {
					content: `
					- To test programs or gauge user experience, simulate flows (without using credits)

					- View success rates and flow history execution records

					- Make versioned, iterative enhancements.
					`,
					imgProps: { ...FlowbuilderImgs.img17, alt: "Insights And Simulation" },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: {
						label: "Campaign Management System",
						subLabel: "Products:",
						href: PATHS.PRODUCTS.CAMPAIGN_MANAGEMENT_SYSTEM,
					},
					nextPage: { label: "Adaptive NLP", subLabel: "Products:", href: PATHS.PRODUCTS.ADAPTIVE_NLP },
				},
			},
		],
	},
	[PATHS.PRODUCTS.ADAPTIVE_NLP]: {
		metaData: {
			title: "Adaptive NLP Product",
			description:
				"Adaptive NLP provides 85% and better intent accuracy right out of the box while reducing the time to set up and train an NLP model from months to minutes. Accelerate Your Road Toward Conversational AI Automation. For A Frictionless Consumer Experience, All You Need Is Deeper Intent Coverage And Improved Accuracy",
			openGraph: {
				title: "Blue.AI Products: Adaptive NLP",
				description:
					"Adaptive NLP provides 85% and better intent accuracy right out of the box while reducing the time to set up and train an NLP model from months to minutes. Accelerate Your Road Toward Conversational AI Automation. For A Frictionless Consumer Experience, All You Need Is Deeper Intent Coverage And Improved Accuracy",
			},
		},
		sections: [
			{
				type: "PAGE_HEADER_SECTION",
				body: {
					content: `
					# Adaptive NLP
	
					Adaptive NLP provides 85% and better intent accuracy right out of the box while reducing the time to set up and train an NLP model from months to minutes.
					`,
					classNames: { innerClassName: "max-w-[766px]" },
				},
			},
			{
				type: "ACCORDION_FLEX_SECTION",
				header: {
					content: `# Accelerate Your Road Toward Conversational AI Automation`,
				},
				body: {
					content: [
						{
							label: "Zero-shot Learning training for NLP",
							content:
								"Blue.ai The revolutionary technology of Adaptive NLP, Zero-shot Learning, enables you to avoid the time-consuming, difficult, and error-prone model training process.",
						},
						{
							label: "Go live with a trained model in a matter of minutes:",
							content:
								"With the use of unsupervised learning and a pre-trained model, businesses can now go live more quickly, in minutes as opposed to months, without having to manually enter the training data. Companies can now get started faster, in minutes instead of months, without having to manually enter training data.",
						},
						{
							label: "Building on billions of conversational data points, stronger NLP:",
							content:
								"Blue.ai Adaptive NLP is not limited to a small number of specific intentions from a single domain but is pre-trained on millions of real-world conversations. This improves our understanding of intent in many fields. ",
						},
					],
					imgProps: { ...AdaptiveNlpImgs.img1, alt: "Conversational AI Automation" },
				},
			},
			{
				type: "ACCORDION_FLEX_SECTION",
				header: {
					content: `# For A Frictionless Consumer Experience, All You Need Is Deeper Intent Coverage And Improved Accuracy`,
					className: "w-[1012px]",
				},
				body: {
					content: [
						{
							label: "Effective understanding of intent from the start",
							content:
								"Our adaptive AI agents continuously improve intent performance using the NLP engine, ensuring your customers get the right answers instantly.",
						},
						{
							label: "Improved intent coverage across all conversation types",
							content:
								"With the help of billions of conversational data points, our NLP has 'seen' all possible syntactic variations of sentences. Your clients experience a smooth interaction thanks to a better comprehension of the context and purpose of their enquiries.",
						},
						{
							label: "Increased industry-wide intended accuracy",
							content:
								"Blue.ai With our Dynamic AI Agents having consumed billions of talks from various businesses, adaptive NLP is industry-neutral and produces greater sentence embedding. This contributes to a 65% reduction in unidentified utterances!",
						},
					],
					imgProps: {
						...AdaptiveNlpImgs.img2,
						width: 478,
						height: 339,
						alt: "Frictionless Consumer Experience",
					},
					flexDirection: "flex-row-reverse",
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: { label: "Flow Builder", subLabel: "Products:", href: PATHS.PRODUCTS.FLOW_BUILDER },
					nextPage: { label: "API's", subLabel: "Products:", href: PATHS.PRODUCTS.API },
				},
			},
		],
	},
	[PATHS.PRODUCTS.API]: {
		metaData: {
			title: "API's as a Product",
			description:
				"Our Developers portal contains s robust list of RESTful web service APIs to integrate data with any external system. Developers can create applications to interact directly with data found within the Blue.ai platform.",

			openGraph: {
				title: "Blue.AI Products: API's",
				description:
					"Our Developers portal contains s robust list of RESTful web service APIs to integrate data with any external system. Developers can create applications to interact directly with data found within the Blue.ai platform.",
			},
		},
		sections: [
			{
				type: "PAGE_HEADER_SECTION",
				body: {
					content: `
					# API's
	
					**Welcome to the Blue.ai Developer Portal**
	
					A robust list of RESTful web service APIs to integrate data with any external system. Developers can create applications to interact directly with data found within the Blue.ai platform.
					`,
					classNames: { innerClassName: "max-w-[831px]" },
				},
			},
			{
				type: "FEATURES_CARDS_SECTION",
				header: {
					content: `
					# Get Started Using Blue.ai APIs
	
					Follow these steps to register for access keys, setup and test, subscribe to Webhooks, and review the documentation and tutorials.
					`,
					className: "max-w-[831px]",
				},
				body: {
					cards: [
						{
							label: "Register",
							content: "Developers must have a BlueAI Enterprise License and a known environment.",
							imgProps: { ...ApiImages.img1, alt: "Register User" },
						},
						{
							label: "Access Token",
							content:
								"After creating an app and getting the API key, you need to follow step-by-step the instructions of the authentication process to generate an access token and make your first API call.",
							imgProps: { ...ApiImages.img2, alt: "Access Token Key" },
						},
						{
							label: "Examine The Documents",
							content:
								"Blue.ai offers a variety of robust, convenient, and simple RESTful Web service APIs to integrate data from Blue.ai with any external system. Review the documentation or use the interactive API.",
							imgProps: { ...ApiImages.img3, alt: "Document" },
						},
						{
							label: "API Tutorials",
							content:
								"These tutorials will cover the basics of connecting to the Blue.ai APIs as well as some common use cases for extracting data.",
							imgProps: { ...ApiImages.img4, alt: "Code Tutorial" },
						},
						{
							label: "BETA APIS",
							content:
								"Blue.ai beta APIs are a great way to test the latest Blue.ai features. These APIs are still being tweaked by our teams to meet BlueAI's high quality standards for general availability (GA) releases",
							imgProps: { ...ApiImages.img5, alt: "Beta" },
						},
						{
							label: "Changelog",
							content:
								"API changelogs provide minute-byminute API change details to ensure API developers and consumers are aware of any upgrades or changes to endpoints.",
							imgProps: { ...ApiImages.img6, alt: "Changelog" },
						},
						{
							label: "Get Support",
							content: "Ask questions and get advice by sending an email to our support team.",
							imgProps: { ...ApiImages.img7, alt: "Support" },
						},
						{
							label: "Blue.ai Community",
							content:
								"A safe and collaborative environment where customers are encouraged to ask questions, share ideas, and give each other advice.",
							imgProps: { ...ApiImages.img8, alt: "Community" },
						},
					],
					classNames: { cardClassName: "min-h-[286px]" },
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: { label: "Adaptive NLP", subLabel: "Products:", href: PATHS.PRODUCTS.ADAPTIVE_NLP },
					nextPage: { label: "Insight Engine", subLabel: "Products:", href: PATHS.PRODUCTS.INSIGHT_ENGINE },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
		],
	},
	[PATHS.PRODUCTS.INSIGHT_ENGINE]: {
		metaData: {
			title: "Insight Engine Product",
			description:
				"In Minutes, Train Your Bot on Thousands of Pages. Seems impossible, doesn't it? It isn't. Connecting our platform to your knowledge store is all that is necessary for our NLP models to intelligently generate questions, discern intent, and extract answers. It's time for your FAQ bot.",

			openGraph: {
				title: "Blue.AI Products: Insight Engine",
				description:
					"In Minutes, Train Your Bot on Thousands of Pages. Seems impossible, doesn't it? It isn't. Connecting our platform to your knowledge store is all that is necessary for our NLP models to intelligently generate questions, discern intent, and extract answers. It's time for your FAQ bot.",
			},
		},
		sections: [
			{
				type: "PAGE_HEADER_SECTION",
				body: {
					content: `
					# Insight Engine
	
					**In Minutes, Train Your Bot on Thousands of Pages**
	
					Seems impossible, doesn't it? It isn't. Connecting our platform to your knowledge store is all that is necessary for our NLP models to intelligently generate questions, discern intent, and extract answers. It's time for your FAQ bot.
					`,
					classNames: { innerClassName: "max-w-[1031px]" },
				},
			},
			{
				type: "STATS_SECTION",
				body: {
					cards: [
						{
							stat: "55K+",
							text: "Answers Retrieved",
						},
						{
							stat: "<4 Minutes",
							text: "The Bot Will Be Launched",
						},
						{
							stat: "20%",
							text: "More Queries Were Answered",
						},
					],
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "ACCORDION_FLEX_SECTION",
				header: {
					content: `# From Thousands Of Knowledge Sources, A Precise And Appropriate Search`,
				},
				body: {
					content: [
						{
							label: "Use artificial intelligence to direct people to the precise sentence in your publications",
							content:
								"In order to guarantee that search results are always accurate and relevant to your user's query, our cognitive search algorithm leverages ML models.",
						},
						{
							label: "Allowing users to manage a large number of automatically created FAQs",
							content:
								"Questions that are automatically produced help you avoid spending hundreds of hours creating FAQs. Before training the bot, your company's users can create these FAQs directly from the site.",
						},
						{
							label: "You can break down silos with a contextual seek interface",
							content:
								"The Insights Interface enables customers to discover information from various departments and sources in a multifunctional location, primarily based on the context of their query, whether or not it is related to your website, help portal, or internal know-how.",
						},
						{
							label: "Set up in a matter of minutes the use of more than 20 technological resources",
							content:
								"It deploys quickly and easily without the need for any coding. We'll cope with syncing and routinely indexing your papers as they are replaced, as soon as we have gotten the related knowledge base.",
						},
					],
					imgProps: { ...EnsightEngineImgs.img1, alt: "Artificial Intelligence board with person" },
				},
			},
			{
				type: "ACCORDION_FLEX_SECTION",
				header: {
					content: `
					# Take Charge To Improve The Relevancy And Quality Of Your Searches
					`,
				},
				body: {
					content: [
						{
							label: "Active learning using user feedback from the widget",
							content:
								"Our document reader enables users to quickly and easily provide input on the results displayed, and this feedback is then put to use to better your search results through self-learning.",
						},
						{
							label: "Utilize the labeling studio to train and test the model",
							content:
								"To increase search accuracy and gain more control, give your business teams the ability to curate results and provide direct feedback to the model.",
						},
						{
							label: "Obtain in-depth information on document quality and inquiry topics",
							content:
								"Check out the questions that your users are asking, their degree of satisfaction, and the documents or subjects that require your team's attention.",
						},
						{
							label: "For more accurate results, include the taxonomy for your organization",
							content:
								"Each institution and sector has its own specialized jargon. To further enhance the model, you can include antonyms and stop words relevant to your sector.",
						},
					],
					flexDirection: ROW_REVERSE,
					imgProps: { ...EnsightEngineImgs.img2, alt: "Improving relevancy And quality Of search results" },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: { label: "API's", subLabel: "Products:", href: PATHS.PRODUCTS.API },
					nextPage: { label: "Livechat", subLabel: "Products:", href: PATHS.PRODUCTS.LIVECHAT },
				},
			},
		],
	},
	[PATHS.PRODUCTS.LIVECHAT]: {
		metaData: {
			title: "Live Chat Widget Product",
			description:
				"Live chat software makes it 82% faster to respond to clients. Customers anticipate brands to respond to their inquiries right away. With the AI-enhanced live chat software from Blue.ai, you can engage with clients more quickly, anticipate their needs, proactively provide 1:1 assistance, handle incoming requests, and gather useful information to guide better agent-led resolutions.",

			openGraph: {
				title: "Blue.AI Products: Live Chat Widget",
				description:
					"Live chat software makes it 82% faster to respond to clients. Customers anticipate brands to respond to their inquiries right away. With the AI-enhanced live chat software from Blue.ai, you can engage with clients more quickly, anticipate their needs, proactively provide 1:1 assistance, handle incoming requests, and gather useful information to guide better agent-led resolutions.",
			},
		},
		sections: [
			{
				type: "PAGE_HEADER_SECTION",
				body: {
					content: `
					# Live Chat Widget
	
					**Live Chat Application**
	
					Live chat software makes it 82% faster to respond to clients.
					
					Customers anticipate brands to respond to their inquiries right away. With the AI-enhanced live chat software from Blue.ai, you can engage with clients more quickly, anticipate their needs, proactively provide 1:1 assistance, handle incoming requests, and gather useful information to guide better agent-led resolutions.
					`,
					classNames: { innerClassName: "max-w-[1023px]" },
				},
			},
			{
				type: "FEATURES_CARDS_SECTION",
				header: {
					content: `
					# From Thousands Of Knowledge Sources, A Precise And Appropriate Search
					`,
				},
				body: {
					cards: [
						{
							label: "Cost Of Customer Support Is Reduced By 55%.",
							content:
								"Utilize video calling, co-browsing, screen sharing, and AI-powered smart responses from Blue.ai Live Chat to do away with the need for repeated follow-ups, reduce your support expenditures, and provide clients with individualized, quick service.",
							imgProps: { ...LiveChatImgs.tiny1, alt: "Reduced cost" },
						},
						{
							label: "220+% More CSAT Points In Less Than A Year.",
							content:
								"Utilize video calling, co-browsing, screen sharing, and AI-powered smart responses from Blue.ai Live Chat to do away with the need for repeated follow-ups, reduce your support expenditures, and provide clients with individualized, quick service.",
							imgProps: { ...LiveChatImgs.tiny2, alt: "Chain" },
						},
						{
							label: "45% More Online Conversions Are Needed.",
							content:
								"High-value clients are identified by Blue.ai Live Chat's real-time behavioral data, targeted pop-up chats, and customized processes, who then proactively interact with them to increase conversions.",
							imgProps: { ...LiveChatImgs.tiny3, alt: "Conversations" },
						},
					],
					classNames: { cardClassName: "min-h-[352px]" },
				},
			},
			{
				type: "TEXT_SECTION",
				header: {
					content: `
					# 33% Of Clients Want Live Chat. How Can Live Chat Software Assist You In Fulfilling These Demands?
	
					Customers want prompt responses to their inquiries. Additionally, they need customized service. How can your contact center use live chat to give clients the quick service they demand in this day and age?
					
					The solution is chatbots powered by AI that react quickly, offer clear solutions, and collect data throughout the full client relationship - including chat and more than 30 contemporary digital channels. Your teams can concentrate on more complicated issues that require a human touch thanks to Live Chat from Blue.ai, which also shares insights from customer data so agents can personalize and humanize communications. Live Chat also speeds up on-the-spot resolution of complex issues with video calls, co-browsing, and screen sharing.
					`,
					className: "[&>h1]:max-w-[850px] [&>h1]:mb-3",
				},
				body: { classNames: { sectionClassName: "bg-[#F6FBFD]" } },
			},
			{
				type: "INFO_CARDS_SECTION",
				header: {
					content: `
					# Blue.Ai Live Chat Can Help You Handle Client Queries More Quickly
	
					Discuss the precise objectives and use cases of your customer service center with our specialists to learn how
					`,
				},
				body: {
					cards: [
						{
							label: "Give each visitor to your website a tailored experience",
							imgProps: { ...LiveChatImgs.tiny4, alt: "Tailored experience" },
						},
						{
							label: "AI-enhanced features can increase efficiency while lowering the cost of customer assistance",
							imgProps: { ...LiveChatImgs.tiny5, alt: "AI-enhanced features" },
						},
						{
							label: "Enhance client happiness and automatically gather feedback",
							imgProps: { ...LiveChatImgs.tiny6, alt: "Client happiness" },
						},
					],
					classNames: { cardClassName: "max-w-[324px]" },
				},
			},
			{
				type: "ACCORDION_FLEX_SECTION",
				header: {
					content: `# Enhance Customer Engagement By Personalizing Experiences`,
				},
				body: {
					content: [
						{
							label: "Create a unique chat experience for a consistent, global brand experience",
							content:
								"The style and feel, theme, language, logo, chat position, and fonts may all be customized to match your brand when integrating Live Chat into any website or mobile application.",
						},
						{
							label:
								"Determine the needs of the customers in advance and direct them to the appropriate representative",
							content:
								"Understanding critical variables such as time spent on a page, page URL, scroll depth, cart content, and agent availability can help you know when to contact customers. You may then utilize skill-based routing and AI-powered prioritization to allocate the right agent to the right customer immediately.",
						},
						{
							label: "Personalized, interactive chats can raise response rates",
							content:
								"Use customized chat templates to target conversations to particular consumer segments or page URLs in order to respond promptly, collect customer satisfaction data, and securely request personal information.",
						},
					],
					imgProps: { ...LiveChatImgs.img1, alt: "Personalizing Experiences" },
					classNames: { sectionClassName: "bg-[#F6FBFD]" },
				},
			},
			{
				type: "ACCORDION_FLEX_SECTION",
				header: {
					content: `# Using AI, Increase Operational Savings By 300% Over The Course Of Four Years`,
					className: "md:!max-w-[824px]",
				},
				body: {
					content: [
						{
							label: "Address basic customer issues and simply direct consumers to agents",
							content:
								"Use Blue.ai AI-powered chatbots to give customers self-serve alternatives and human support for more complicated problems.",
						},
						{
							label: "Boost productivity, time savings, and agent effectiveness",
							content:
								"Utilize live chat macros, video calling, co-browsing, screen sharing, smart responses, and screen sharing to improve customer service and speed up resolutions while relieving support staff of tedious tasks.",
						},
						{
							label: "Identify potential customers based on website traffic in general",
							content:
								"Automated processes can handle traffic during off-peak hours, boost conversions, and gather customer information. They can then automatically route the correct consumer to the proper agent and give the lead priority.",
						},
					],
					imgProps: { ...LiveChatImgs.img2, alt: "AI usage for Operational savings" },
					flexDirection: ROW_REVERSE,
				},
			},
			{
				type: "ACCORDION_FLEX_SECTION",
				header: {
					content: `# 5.4 Times More Customers Will Be Satisfied`,
				},
				body: {
					content: [
						{
							label: "Create unique workflows to accomplish company objectives and increase customer satisfaction",
							content:
								"Utilize Live Chat to gather visitor information, monitor user behavior, and design unique experiences to lower cart abandonment rates and boost conversions.",
						},
						{
							label: "Analyze agent performance, gather comments, and monitor traffic",
							content:
								"Using unique triggers that automatically send surveys to consumers via chat, you may receive real-time, actionable data that show customer intent, give CSAT predictions, capture context for your agents, and collect useful performance feedback.",
						},
						{
							label: "Deliver improved security, and safeguard the private information of your clients",
							content:
								"Utilize Live Chat to securely capture consumer data, stop malicious or unauthorized website traffic, and enforce best-in-class security procedures.",
						},
					],
					imgProps: { ...LiveChatImgs.img3, alt: "Customer satisfaction" },
					classNames: { sectionClassName: "bg-[#F6FBFD]" },
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: { label: "Insight Engine", subLabel: "Products:", href: PATHS.PRODUCTS.INSIGHT_ENGINE },
					nextPage: { label: "CRM", subLabel: "Products:", href: PATHS.PRODUCTS.CRM },
				},
			},
		],
	},
	[PATHS.PRODUCTS.CRM]: {
		metaData: {
			title: "CRM Product",
			description:
				"Our omnichannel platform boasts seamless integration with three of the most popular customer relationship management (CRM) solutions in the market today: Hubspot CRM, Salesforce, and Pipedrive. This means that our clients can easily manage their customer interactions across various channels, including email, social media, chat, and phone, while keeping all their data organized in one central location. With this integration, our clients can take advantage of the powerful sales and marketing features of these CRMs, such as lead management, pipeline tracking, and analytics, to optimize their sales processes and achieve better customer engagement and conversion rates. Additionally, our platform provides real-time updates and analytics that are synced across all three CRMs, ensuring that our clients have access to accurate, up-to-date data at all times.",

			openGraph: {
				title: "Blue.AI Products: CRM",
				description:
					"Our omnichannel platform boasts seamless integration with three of the most popular customer relationship management (CRM) solutions in the market today: Hubspot CRM, Salesforce, and Pipedrive. This means that our clients can easily manage their customer interactions across various channels, including email, social media, chat, and phone, while keeping all their data organized in one central location. With this integration, our clients can take advantage of the powerful sales and marketing features of these CRMs, such as lead management, pipeline tracking, and analytics, to optimize their sales processes and achieve better customer engagement and conversion rates. Additionally, our platform provides real-time updates and analytics that are synced across all three CRMs, ensuring that our clients have access to accurate, up-to-date data at all times.",
			},
		},
		sections: [
			{
				type: "PAGE_HEADER_SECTION",
				body: {
					content: `
					# CRM
	
					**"Seamless Omnichannel Integration with Hubspot CRM, Salesforce, and Pipedrive"**
	
					Our omnichannel platform boasts seamless integration with three of the most popular customer relationship management (CRM) solutions in the market today: Hubspot CRM, Salesforce, and Pipedrive. This means that our clients can easily manage their customer interactions across various channels, including email, social media, chat, and phone, while keeping all their data organized in one central location. With this integration, our clients can take advantage of the powerful sales and marketing features of these CRMs, such as lead management, pipeline tracking, and analytics, to optimize their sales processes and achieve better customer engagement and conversion rates. Additionally, our platform provides real-time updates and analytics that are synced across all three CRMs, ensuring that our clients have access to accurate, up-to-date data at all times.
					`,
					classNames: { innerClassName: "max-w-[1600px]" },
				},
			},
			{
				type: "ATTRIBUTES_CARDS_SECTION",
				header: {
					content: `# Popular Attributes`,
				},
				body: {
					cards: [
						{
							label: "Marketing",
							attributes: ["Generating Leads", "Automation In Marketing", "Attribution Of Many Revenue Sources"],
							imgProps: { ...CrmImgs.img1, alt: "Marketing" },
						},
						{
							label: "Sales",
							attributes: ["Advanced CRM for Sales", "Automated sales", "Tools for generating sales"],
							imgProps: { ...CrmImgs.img2, alt: "Sales" },
						},
						{
							label: "Customer Support",
							attributes: ["Know-how base", "Automating the help desk", "Customer satisfaction polls"],
							imgProps: { ...CrmImgs.img3, alt: "Customer Support" },
						},
					],
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: { label: "Livechat", subLabel: "Products:", href: PATHS.PRODUCTS.LIVECHAT },
					nextPage: { label: "Payment Gateway", subLabel: "Products:", href: PATHS.PRODUCTS.PAYMENT_GATEWAY },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
		],
	},
	[PATHS.PRODUCTS.PAYMENT_GATEWAY]: {
		metaData: {
			title: "Payment Gateway Product",
			description:
				"We assemble every type needed to create websites and applications that collect payments and transfer payouts over the world. The tools from Blue.ai enable payments for every type of business, including marketplaces, software platforms, subscription services, and physical and online merchants. We also assist businesses in a variety of other ways, including preventing fraud, managing business spending, issuing virtual and physical cards, reducing checkout friction, and getting financing.",

			openGraph: {
				title: "Blue.AI Products: Payment Gateway",
				description:
					"We assemble every type needed to create websites and applications that collect payments and transfer payouts over the world. The tools from Blue.ai enable payments for every type of business, including marketplaces, software platforms, subscription services, and physical and online merchants. We also assist businesses in a variety of other ways, including preventing fraud, managing business spending, issuing virtual and physical cards, reducing checkout friction, and getting financing.",
			},
		},
		sections: [
			{
				type: "PAGE_HEADER_SECTION",
				body: {
					content: `
					# Payment Gateway
	
					**An all-encompassing collection of payment tools**
					
					We assemble every type needed to create websites and applications that collect payments and transfer payouts over the world. The tools from Blue.ai enable payments for every type of business, including marketplaces, software platforms, subscription services, and physical and online merchants.
					
					We also assist businesses in a variety of other ways, including preventing fraud, managing business spending, issuing virtual and physical cards, reducing checkout friction, and getting financing.
					`,
					classNames: { innerClassName: "max-w-[1252px]" },
				},
			},
			{
				type: "FLEX_SECTION",
				header: {
					content: `
					# Why Blue.ai
	
					A technology-first approach to payments and finance
					`,
				},
				body: {
					content: `
					1. Close to the Metal:
					
					From direct integrations with card networks and banks to checkout flows in the browser, we operate on and optimize at every level of the financial stack.

					2. Fastest-Improving Platform:

					We release hundreds of features and improvements each year to help you stay ahead of industry shifts. (On average, we deploy our production API 16x per day.)

					3. Battle-Tested Reliability:

					Our systems operate with 99.99%+ uptime and are highly scalable and redundant. Stripe is certified to the highest compliance standards.

					4. Intelligent optimizations:

					Our machine learning models train on billions of data points and help increase revenue across conversion, fraud, revenue recovery, and more.

					`,
					imgProps: { ...paymentImg, alt: "Online and Offline Payments and finance systems" },
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: { label: "CRM", subLabel: "Products:", href: PATHS.PRODUCTS.CRM },
					nextPage: { label: "Integrations", subLabel: "Products:", href: PATHS.PRODUCTS.INTEGRATIONS },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
		],
	},
	[PATHS.PRODUCTS.INTEGRATIONS]: {
		metaData: {
			title: "Integrations as a Product",
			description:
				"Blue.ai can be integrated with existing programs you work with. Organize your data on a single platform to facilitate seamless collaboration between teams in engagement, sales, marketing, advertising, and care.",

			openGraph: {
				title: "Blue.AI Products: Integrations",
				description:
					"Blue.ai can be integrated with existing programs you work with. Organize your data on a single platform to facilitate seamless collaboration between teams in engagement, sales, marketing, advertising, and care.",
			},
		},
		sections: [
			{
				type: "PAGE_HEADER_SECTION",
				body: {
					content: `
					# Blue.ai Integrations
	
					Blue.ai can be integrated with existing programs you work with. Organize your data on a single platform to facilitate seamless collaboration between teams in engagement, sales, marketing, advertising, and care.
					`,
					classNames: { innerClassName: "max-w-[800px]" },
				},
			},
			{
				type: "ACCORDION_FLEX_SECTION",
				header: {
					content: `# Integrations Simplified`,
				},
				body: {
					content: [
						{
							label: "Seamless workflow automation integration",
							content:
								"Automate processes in real-time within your CRM, Contact Center Platforms, Ticketing, or Live Agent systems to boost team efficiency for your employees and customer experience for your clients.",
						},
						{
							label: "Integrate with one click and plug and play",
							content:
								"The integration procedure has been incredibly simplified by us. The ability to seamlessly integrate all of your business apps and systems is now just a click away. Your app or channel connection is completed by simply selecting the platform from your tech stack and tools, clicking connect, and voilà!",
						},
						{
							label: "Support and upkeep for integration",
							content:
								"We've got you covered if you run across any integration-related problems. For assistance with integration support and maintenance, we have a specialized team.",
						},
					],
					imgProps: { ...IntegrationsImgs.img1, alt: "24/7 Support for integrations" },
				},
			},
			{
				type: "IMAGE_SECTION",
				header: {
					content: `
					# Interested In Bespoke Integrations? We Have Your Back.
	
					No issue if the tool you use lacks integrated APIs. Blue.ai will be smoothly integrated with your own product, tech stack, and other tools thanks to the unique integrations we'll design for you.
					`,
					className: "max-w-[1114px]",
				},
				body: {
					...IntegrationsImgs.img2,
					alt: "Custom Bespoke Integrations",
					width: 445,
					height: 449,
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: { label: "Payment Gateway", subLabel: "Products:", href: PATHS.PRODUCTS.PAYMENT_GATEWAY },
					nextPage: { label: "Ticketing System", subLabel: "Products:", href: PATHS.PRODUCTS.TICKETING_SYSTEM },
				},
			},
		],
	},
	[PATHS.PRODUCTS.TICKETING_SYSTEM]: {
		metaData: {
			title: "Ticketing System Product",
			description: "Keep track of client requests from various departments, brands, and platforms.",

			openGraph: {
				title: "Blue.AI Products: Ticketing System",
				description: "Keep track of client requests from various departments, brands, and platforms.",
			},
		},
		sections: [
			{
				type: "PAGE_HEADER_SECTION",
				body: {
					content: `
					# Ticketing System
	
					Organize tickets and other tasks in a single location.
					`,
				},
			},
			{
				type: "FEATURES_CARDS_SECTION",
				header: {
					content: `# Keep Track Of Client Requests From Various Departments, Brands, And Platforms`,
				},
				body: {
					cards: [
						{
							label: "Omnichannel",
							content: "Be Accessible To Your Clients, Regardless Of The Method Of Contact They Prefer.",
							imgProps: { ...TicketImgs.img1, alt: "Omnichannel" },
						},
						{
							label: "Instant Messaging",
							content: "Integrate Popular Instant Messaging Channels Into Your Customer Service.",
							imgProps: { ...TicketImgs.img2, alt: "Instant Messaging" },
						},
						{
							label: "Multi-Brand Help Center",
							content: "A Unique Self-Service Portal Should Be Made For Each Brand's Clients.",
							imgProps: { ...TicketImgs.img3, alt: "Help Center" },
						},
						{
							label: "Multi-Department",
							content: "Organize Your Support Desk To Match The Organizational Structure Of Your Business.",
							imgProps: { ...TicketImgs.img4, alt: "Multi-Department" },
						},
						{
							label: "Email",
							content: "Enable Straightforward Email Conversation That Is Context-Driven.",
							imgProps: { ...TicketImgs.img5, alt: "Email" },
						},
						{
							label: "Calls",
							content: "Here Are Some Classic Phone Calls With A Side Of Background Information.",
							imgProps: { ...TicketImgs.img6, alt: "Calls" },
						},
						{
							label: "Social Media",
							content: "Streamline Your Help Desk's Interaction With Social Media.",
							imgProps: { ...TicketImgs.img7, alt: "Social Media" },
						},
						{
							label: "Live Talk",
							content: "Be Instantly Accessible To Your Consumers.",
							imgProps: { ...TicketImgs.img8, alt: "Live Talk" },
						},
					],
					classNames: { cardClassName: "min-h-[201px]" },
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: { label: "Integrations", subLabel: "Products:", href: PATHS.PRODUCTS.INTEGRATIONS },
					nextPage: { label: "Billing System", subLabel: "Products:", href: PATHS.PRODUCTS.BILLING_SYSTEM },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
		],
	},
	[PATHS.PRODUCTS.BILLING_SYSTEM]: {
		metaData: {
			title: "Billing System Product",
			description:
				"With Blue.ai for your business, a full range of accounting and invoicing tools are included. Take the tour to find out why you'll enjoy it as much as we do.",

			openGraph: {
				title: "Blue.AI Products: Billing System",
				description:
					"With Blue.ai for your business, a full range of accounting and invoicing tools are included. Take the tour to find out why you'll enjoy it as much as we do.",
			},
		},
		sections: [
			{
				type: "PAGE_HEADER_SECTION",
				body: {
					content: `
					# Billing System
	
					With Blue.ai for your business, a full suite of accounting and billing tools is included. Take the tour to find out why you'll enjoy it as much as we did.
					`,
					classNames: { innerClassName: "max-w-[840px]" },
				},
			},
			{
				type: "FEATURES_CARDS_SECTION",
				header: {
					content: `# Features`,
				},
				body: {
					cards: [
						{
							label: "Uncomplicated Invoicing",
							content:
								"In a matter of seconds, you may quickly and easily produce estimates and invoices with a sophisticated appearance in any language or currency and send them to your clients.",
							imgProps: { ...BillingImgs.img1, alt: "Invoicing" },
						},
						{
							label: "Accept Payments Online",
							content:
								"Customers can pay immediately on your invoice and you will receive instant online payment from anywhere, from any customer, and in any currency.",
							imgProps: { ...BillingImgs.img2, alt: "Online payments" },
						},
						{
							label: "Monitor Time, Costs, And Mileage",
							content:
								"With the press of a button, convert hours, miles, and expenses into invoices and bills to make sure you are fairly paid for the services your company performs.",
							imgProps: { ...BillingImgs.img3, alt: "Monitoring" },
						},
						{
							label: "Increase Brand Recognition",
							content:
								"Make invoicely uniquely yours by customizing your control panel, login screens, and statements with a look and feel that is appropriate for your company.",
							imgProps: { ...BillingImgs.img4, alt: "Brand Recognition" },
						},
						{
							label: "Organize Several Businesses",
							content:
								"Do you run many enterprises with different employees and customers? Setting up several businesses has never been this easy, so you're at the correct place.",
							imgProps: { ...BillingImgs.img5, alt: "Business Organization" },
						},
						{
							label: "You Can Manage Your Money Here",
							content:
								"With the help of automatically generated reports, yearly and monthly statements, summaries of your income and expenses, and accounts receivable and payable, you can keep an eye on your money.",
							imgProps: { ...BillingImgs.img6, alt: "Monetization management" },
						},
					],
					classNames: { cardClassName: "min-h-[260px]" },
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: { label: "Ticketing System", subLabel: "Products:", href: PATHS.PRODUCTS.TICKETING_SYSTEM },
					nextPage: { label: "Unified Platform", href: PATHS.UNIFIED_PLATFORM },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
		],
	},
	[PATHS.UNIFIED_PLATFORM]: {
		metaData: {
			title: "Unified Platform Product",
			description:
				"Businesses that follow the Unified-CX solution path will see faster growth, cheaper costs, improved risk management, and increased customer loyalty. And Blue.ai is the only partner that can tie it all together because it has the only purpose-built Unified-CX solution platform in the world.",
			openGraph: {
				title: "Blue.AI Products: Blue.AI Unified Platform",
				description:
					"Businesses that follow the Unified-CX solution path will see faster growth, cheaper costs, improved risk management, and increased customer loyalty. And Blue.ai is the only partner that can tie it all together because it has the only purpose-built Unified-CX solution platform in the world.",
			},
		},
		sections: [
			{
				type: "FLEX_SECTION",
				header: {
					content: `
					# The Best CX
					# You'll Ever Create`,
					className: "gap-1",
				},
				body: {
					cards: [
						{
							content: `
							## The world now communicates differently
	
							With the advent of contemporary digital and social platforms, the consumer journey has changed and become much more engaging, faster, and more personalized. However, the world's largest companies have struggled to adapt to this new situation.
							`,
							imgProps: { ...UnifiedPlatformImgs.img1, alt: "Worldwide communication" },
							flexDirection: "flex-row",
							textSectionClassName: "[&>p]:max-w-[600px]",
						},
						{
							content: `
							## The amount of customer data has multiplied. Traditional systems are unable to keep up.
							
							Every day, 2.5 quintillion bytes of unstructured consumer data are generated on channels that businesses do not own and cannot manage. Point solutions cannot provide seamless consumer experiences because they do not integrate. The result was chaos.
							`,
							imgProps: { ...UnifiedPlatformImgs.img2, alt: "Customer data over social media" },
							flexDirection: ROW_REVERSE,
							textSectionClassName: "[&>h2]:max-w-[600px] [&>p]:max-w-[575px]",
						},
						{
							content: `
							## Now, customers can connect. Additionally, their goals have changed.
							
							Consumers today expect a consistent brand experience across all channels. one that recognizes their relationships and offers prompt, individualized care.
							`,
							imgProps: {
								...UnifiedPlatformImgs.img3,
								width: 722,
								height: 584,
								alt: "Customer connecting across all channels",
							},
							flexDirection: "flex-row",
							textSectionClassName: "[&>h2]:max-w-[455px] [&>p]:max-w-[600px]",
						},
					],
					classNames: { innerClassName: "gap-0" },
				},
				footer: {
					content: `**There is a better way forward for the unifiers: unified customer experience management (Unified-CX solution).**`,
					className: "max-w-[688px] font-black",
				},
			},
			{
				type: "FLEX_SECTION",
				header: {
					content: `# The Path to Unified-CX solution`,
				},
				body: {
					cards: [
						{
							content: `
							## Customer-centricity will rule business in the future
							Nowadays, consumers interact with brands on a variety of platforms around the clock, generating massive amounts of unstructured data that provide critical insights into their motivations and expectations.
							
							This shift emphasizes the need for individualized experiences that place the customer, rather than the brand or product, at the center of every discussion and necessitates an evolution in how brands interact with consumers. Businesses that prioritize their customers will succeed in any industry.
							`,
							imgProps: { ...UnifiedPlatformImgs.img4, alt: "Customer-centricity" },
							flexDirection: "flex-row",
							textSectionClassName: "[&>p]:max-w-[600px]",
						},
						{
							content: `
							## Be there. Be involved
	
							Customers expect you to be attentive and ready to act no matter where they are—live in stores, online at your website, or conversing with others about your company, its products, or competitors on more than 30 digital channels. Furthermore, when switching from one channel to another, people expect continuity. That cannot be accomplished through a patchwork of isolated point solutions. Unified-CX solution, on the other hand, automatically adjusts to whatever channels they use, both now and in the future, ensuring that you are always involved and ready to satisfy your clients.
							`,
							imgProps: { ...UnifiedPlatformImgs.img5, alt: "Meet your cusotmers in their preferred channel" },
							flexDirection: ROW_REVERSE,
							textSectionClassName: "[&>p]:max-w-[552px]",
						},
						{
							content: `
							## AI focuses on customer intent to identify needles in haystacks
	
							It is not enough to collect data from individual channels. The secret is to collect relevant data from each channel and turn it into information your team can use to communicate with customers in meaningful ways.
							
							The cure is artificial intelligence. Petabytes of structured and unstructured consumer data across multiple platforms, markets, and languages are collected by a unified AI-powered CX. After that, he actively interprets everything, looking for a needle in a haystack so his company can spot and understand every clue to customer intent.
							`,
							imgProps: { ...UnifiedPlatformImgs.img6, alt: "AI-powered CX" },
							flexDirection: "flex-row",
							textSectionClassName: "[&>p]:max-w-[578px]",
						},
					],
					classNames: {
						// section: {
						// 	background: `#F6FBFD url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1529.913 1705.315"><defs><clipPath id="a"><path fill="%236abdea" d="M242.262 572.061c0 181.842 147.941 329.8 329.8 329.8 181.936 0 329.878-147.957 329.878-329.8 0-181.858-147.941-329.8-329.878-329.8-181.858 0-329.8 147.941-329.8 329.8M0 572.061C0 256.615 256.615 0 572.061 0S1144.2 256.615 1144.2 572.061c0 315.43-256.694 572.061-572.139 572.061S0 887.49 0 572.061" data-name="Path 1772"/></clipPath><clipPath id="b"><path fill="%236abdea" d="M149.641 299.314a149.657 149.657 0 1 1 149.673-149.642 149.644 149.644 0 0 1-149.673 149.642Z" data-name="Path 1773"/></clipPath></defs><g data-name="Group 23572" opacity=".06"><g data-name="Group 23534"><g clip-path="url(%23a)" data-name="Group 23533" transform="rotate(116 553.465 816.456)"><path fill="%236abdea" d="M219.477-450.512 1594.69 219.503l-670 1375.18L-450.521 924.67z" data-name="Rectangle 5381"/></g></g><g data-name="Group 23536"><g clip-path="url(%23b)" data-name="Group 23535" transform="rotate(116 231.973 236.175)"><path fill="%236abdea" d="M57.413-117.855 417.166 57.419 241.89 417.172-117.86 241.898z" data-name="Rectangle 5382"/></g></g></g></svg>') no-repeat 50%`,
						// 	backgroundSize: "80%",
						// 	backgroundPositionY: 40,
						// },
						sectionClassName: `bg-[url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1529.913 1705.315"><defs><clipPath id="a"><path fill="%236abdea" d="M242.262 572.061c0 181.842 147.941 329.8 329.8 329.8 181.936 0 329.878-147.957 329.878-329.8 0-181.858-147.941-329.8-329.878-329.8-181.858 0-329.8 147.941-329.8 329.8M0 572.061C0 256.615 256.615 0 572.061 0S1144.2 256.615 1144.2 572.061c0 315.43-256.694 572.061-572.139 572.061S0 887.49 0 572.061" data-name="Path 1772"/></clipPath><clipPath id="b"><path fill="%236abdea" d="M149.641 299.314a149.657 149.657 0 1 1 149.673-149.642 149.644 149.644 0 0 1-149.673 149.642Z" data-name="Path 1773"/></clipPath></defs><g data-name="Group 23572" opacity=".06"><g data-name="Group 23534"><g clip-path="url(%23a)" data-name="Group 23533" transform="rotate(116 553.465 816.456)"><path fill="%236abdea" d="M219.477-450.512 1594.69 219.503l-670 1375.18L-450.521 924.67z" data-name="Rectangle 5381"/></g></g><g data-name="Group 23536"><g clip-path="url(%23b)" data-name="Group 23535" transform="rotate(116 231.973 236.175)"><path fill="%236abdea" d="M57.413-117.855 417.166 57.419 241.89 417.172-117.86 241.898z" data-name="Rectangle 5382"/></g></g></g></svg>')] bg-no-repeat bg-[length:80%]`,
						innerClassName: "gap-[100px]",
					},
				},
				footer: {
					content: `Businesses that follow the Unified-CX solution path will see faster growth, cheaper costs, improved risk management, and increased customer loyalty. And Blue.ai is the only partner that can tie it all together because it has the only purpose-built Unified-CX solution platform in the world.`,
					className: "max-w-[822px]",
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: { label: "Billing System", subLabel: "Products:", href: PATHS.PRODUCTS.BILLING_SYSTEM },
					nextPage: {
						label: "Customer Support Automation",
						subLabel: "Solutions:",
						href: PATHS.SOLUTIONS.CUSTOMER_SUPPORT_AUTOMATION,
					},
				},
			},
		],
	},
	[PATHS.SOLUTIONS.CUSTOMER_SUPPORT_AUTOMATION]: {
		metaData: {
			title: "Customer Support Automation Solution",
			description:
				"Keep your customers informed of progress. Use an AI-chatbot to instantly and continuously answer questions in any language via text or voice. 70% of questions are self-serve, and live agents are seamlessly looped in as necessary. literally the best of both worlds.",

			openGraph: {
				title: "Blue.AI Solutions: Customer Support Automation",
				description:
					"Keep your customers informed of progress. Use an AI-chatbot to instantly and continuously answer questions in any language via text or voice. 70% of questions are self-serve, and live agents are seamlessly looped in as necessary. literally the best of both worlds.",
			},
		},
		sections: [
			{
				type: "TEXT_SECTION",
				header: {
					content: `
					## Customer Support Automation
	
					Keep your customers informed of progress. Use an AI-chatbot to instantly and continuously answer questions in any language via text or voice. 70% of questions are self-serve, and live agents are seamlessly looped in as necessary. literally the best of both worlds.
					`,
					className: "max-w-[865px]",
				},
				body: {},
			},
			{
				type: "ACCORDION_FLEX_SECTION",
				header: { content: `# Flip Your Client's Scowl Upside Down` },
				body: {
					content: [
						{
							label: "Pay attention to what your customers say",
							content:
								"To fully understand your customers' needs, our conversational AI platform observes customer patterns and analyzes sentiment. Additionally, it uses intent and sentiment detection to provide a fast and accurate solution while enhancing the user experience. Effortlessly send.",
						},
						{
							label: "Questions for the live agent from the bot",
							content:
								"AI cannot completely replace humans. We understand. Most queries can be answered by our dynamic AI agents, who also alert live agents when needed,combining the best of human and AI intelligence. a learning cycle between man and machine,not just a simple live agent handover. What's left after? Customers are happier, and staff are even happier.",
						},
						{
							label: "Go where the customers are:",
							content:
								"Go where the customers are: Support your customers around the world, 24 hours a day, in 135+ languages, through 35+ text and voice channels. Need more? Blue.ai offers a ton of integrations that make your interactions more efficient, complete and fruitful from the start.",
						},
					],
					imgProps: { ...CustomerSupportImgs.img1, alt: "Customers' needs and experiences" },
					classNames: { sectionClassName: "bg-[#F6FBFD]" },
				},
			},
			{
				type: "ACCORDION_FLEX_SECTION",
				header: { content: `# Instead Of Treating Customer Service As A Cost Center, Turn It Into A Profit Center` },
				body: {
					content: [
						{
							label: "70% Decrease the overall cost of operations",
							content:
								"Our self-learning chatbots automate about 80% of your customers' demands, leaving your live employees to handle only the most urgent ones. 'Choc on top Our bots proactively learn from the live agents through a self-learning loop.",
						},
						{
							label: "Investigate product insights and upsell",
							content:
								"Customer service is no longer required to be a cost center. Support bots can assist in upselling to boost revenue by providing comprehensive insights and data on customer intent and sentiment.",
						},
						{
							label: "Increase CSAT through personalizing communications",
							content:
								"Automatically comprehend your customer data profile and customize actions, responses, and conversations depending on persona, intent, and sentiment. Create magic in every conversation to increase CSAT.",
						},
					],
					flexDirection: ROW_REVERSE,
					imgProps: { ...CustomerSupportImgs.img2, alt: "Customer Service" },
				},
			},
			{
				type: "TEXT_SECTION",
				header: {
					content: `
					# It's Not Magic; It's Artificial Intelligence Using Our Unique Natural Language Processing "Brain."
	
					Our Natural Language Understanding (NLU) and Natural Language Processing (NLP) "brain" engine enhances the self-learning of speech and text chatbots through multi-factor intent identification, efficient consumer engagement, and on-point resolution — all of it in real-time and with a 98% accuracy rate.
					`,
					className: "[&>p]:max-w-[960px]",
				},
				body: {
					classNames: { sectionClassName: "bg-[#F6FBFD]" },
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: { label: "Unified Platform", href: PATHS.UNIFIED_PLATFORM },
					nextPage: {
						label: "Text Automation",
						subLabel: "Solutions:",
						href: PATHS.SOLUTIONS.TEXT_AUTOMATION,
					},
				},
			},
		],
	},
	[PATHS.SOLUTIONS.TEXT_AUTOMATION]: {
		metaData: {
			title: "Text Automation Solution",
			description:
				"5 billion social media users text. Create a bot for 35+ messaging apps. Automate CX workflows, improve conversions, and delight customers.",

			openGraph: {
				title: "Blue.AI Solutions: Text Automation",
				description:
					"5 billion social media users text. Create a bot for 35+ messaging apps. Automate CX workflows, improve conversions, and delight customers.",
			},
		},
		sections: [
			{
				type: "TEXT_SECTION",
				header: {
					content: `
					## Text Automation
	
					### Personalize 35+ Channel Conversations
	
					5 billion social media users text. Create a bot for 35+ messaging apps. Automate CX workflows, improve conversions, and delight customers.
					`,
					className: "max-w-[865px]",
				},
				body: {},
			},
			{
				type: "ACCORDION_FLEX_SECTION",
				header: { content: `# Omnichannel CX From Blue.Ai Use Your Funnel` },
				body: {
					content: [
						{
							label: "Built once, deployed anywhere",
							content:
								"Blue.ai's build once, deploy anywhere approach lets you add channels to your customer engagement stack and let our chatbot handle conversations.",
						},
						{
							label: "Smart Campaigns",
							content:
								"Campaign management and analytics tool generates quality leads and higher conversions from targeted marketing and re-targeting campaigns across channels.",
						},
						{
							label: "Market faster",
							content:
								"Blue.Ai's technology and years of experience in various domains can launch your first chatbot in less than 7 days.",
						},
						{
							label: "Personal and contextual",
							content:
								"Our chatbots enable contextualized, personalized interactions 24/7. We have 135-language chatbots.",
						},
					],
					imgProps: { ...TextAutomationImg, width: 526, height: 487, alt: "Omnichannel CX" },
					classNames: { sectionClassName: "bg-[#F6FBFD]" },
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: {
						label: "Customer Support Automation",
						subLabel: "Solutions:",
						href: PATHS.SOLUTIONS.CUSTOMER_SUPPORT_AUTOMATION,
					},
					nextPage: {
						label: "Dashboard and Analytics",
						subLabel: "Solutions:",
						href: PATHS.SOLUTIONS.DASHBOARD_AND_ANALYTICS,
					},
				},
			},
		],
	},
	[PATHS.SOLUTIONS.DASHBOARD_AND_ANALYTICS]: {
		metaData: {
			title: "Dashboard And Analytics Solution",
			description:
				"Connect our platform to your knowledge source, let our NLP models intelligently formulate queries, analyze intent, and extract answers, and voila! FAQ bot ready.",

			openGraph: {
				title: "Blue.AI Solutions: Dashboard And Analytics",
				description:
					"Connect our platform to your knowledge source, let our NLP models intelligently formulate queries, analyze intent, and extract answers, and voila! FAQ bot ready.",
			},
		},
		sections: [
			{
				type: "TEXT_SECTION",
				header: {
					content: `
					## Dashboard And Analytics
	
					### Train Your Bot on 1000 Pages in Minutes
	
					Right? Not. Connect our platform to your knowledge source, let our NLP models intelligently formulate queries, analyze intent, and extract answers, and voila! FAQ bot ready.
					`,
					className: "max-w-[865px]",
				},
				body: {},
			},
			{
				type: "ACCORDION_FLEX_SECTION",
				header: { content: `# Search Thousands Of Knowledge Sources Precisely And Relevantly` },
				body: {
					content: [
						{
							label: "AI can help users find the right phrase in their posts",
							content:
								"Our cognitive search algorithm uses Transformer ML models to provide accurate and relevant search results",
						},
						{
							label: "Allow business users to choose from hundreds of auto-generated FAQs",
							content:
								"Automated FAQs save hundreds of hours. Business users can curate FAQs on the site before training the bot.",
						},
						{
							label: "Contextual search breaks down silos",
							content:
								"The Insights Interface enables consumers find information from across departments and repositories on your website, support portal, or internal knowledge based on their query.",
						},
						{
							label: "Deploy 20+ knowledge sources in minutes",
							content: "No-code, fast, and simple deployment. We sync and auto-index your documents as they update.",
						},
					],
					imgProps: { ...DashboardImgs.img1, alt: "Precise And Relevant Knowledge Sources" },
					classNames: { sectionClassName: "bg-[#F6FBFD]" },
				},
			},
			{
				type: "ACCORDION_FLEX_SECTION",
				header: {
					content: `# Take Charge To Improve Search Results`,
				},
				body: {
					content: [
						{
							label: "Active learning based on user feedback",
							content:
								"Our document reader allows users to quickly and easily input results used to improve research results through self-learning. Labeling Studio tests and trains the model.",
						},
						{
							label: "Labelling studio tests and trains the model",
							content:
								"Allow your business teams to curate results and directly input the model for enhanced search accuracy and control.",
						},
						{
							label: "See query topics and document quality",
							content:
								"Check your users' queries, satisfaction, and the documents or topics that need your team's attention.",
						},
						{
							label: "Your organization's taxonomy will improve results",
							content:
								"Every industry has its own lingo. Add industry-specific synonyms and stop words to improve the model.",
						},
					],
					imgProps: { ...DashboardImgs.img2, alt: "Improved searched results" },
					flexDirection: ROW_REVERSE,
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: { label: "Text Automation", subLabel: "Solutions:", href: PATHS.SOLUTIONS.TEXT_AUTOMATION },
					nextPage: {
						label: "Artificial Intelligence",
						subLabel: "Solutions:",
						href: PATHS.SOLUTIONS.ARTIFICIAL_INTELLIGENCE,
					},
					classNames: { sectionClassName: BLUE_BG },
				},
			},
		],
	},
	[PATHS.SOLUTIONS.ARTIFICIAL_INTELLIGENCE]: {
		metaData: {
			title: "Artificial Intelligence Solution",
			description:
				"Process and understand messages faster and efficiently, optimizing customer care resources. This feature works across corporate, commercial, economic, academic, and scientific issues.",

			openGraph: {
				title: "Blue.AI Solutions: Artificial Intelligence",
				description:
					"Process and understand messages faster and efficiently, optimizing customer care resources. This feature works across corporate, commercial, economic, academic, and scientific issues.",
			},
		},
		sections: [
			{
				type: "TEXT_SECTION",
				header: {
					content: `
					## Artificial Intelligence
	
					### Process and understand messages faster and efficiently, optimizing customer care resources
	
					This feature works across corporate, commercial, economic, academic, and scientific issues.
					`,
					className: "w-[980px]",
				},
				body: {},
			},
			{
				type: "FEATURES_CARDS_SECTION",
				header: {
					content: `# AI Technology Can Improve Agent Productivity`,
				},
				body: {
					cards: [
						{
							label: "Speed And Efficiency",
							content:
								"AI answers customer questions faster and better than humans. Free up time and resources for agents.",
							imgProps: { ...AiImgs.img1, alt: "Speed And Efficiency" },
						},
						{
							label: "Improve Customer Service",
							content: "Respond to customer inquiries immediately. improve customer service.",
							imgProps: { ...AiImgs.img2, alt: "Customer Service" },
						},
						{
							label: "24-Hour Service",
							content:
								"Businesses in different time zones or with 24-hour customer service can benefit from answering client questions 24/7.",
							imgProps: { ...AiImgs.img3, alt: "24-Hour Service" },
						},
						{
							label: "Customization",
							content:
								"Empathize to humanize your responses. An agent may say 'Hi Sarah, I'm sorry you have a problem but we'll fix it, the bot will say. Possible solution' ",
							imgProps: { ...AiImgs.img4, alt: "Customization" },
						},
					],
					classNames: {
						// section: {
						// 	background: `#F6FBFD url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="659"><defs><clipPath id="a"><path fill="%23f6fbfd" d="M0 469h1920v659H0Z" data-name="Path 51787"/></clipPath><clipPath id="b"><path fill="%236abdea" d="M164.955 389.515c0-123.816 100.733-224.559 224.559-224.559 123.88 0 224.613 100.744 224.613 224.559S513.395 614.074 389.515 614.074c-123.826 0-224.559-100.733-224.559-224.559M0 389.515C0 604.3 174.729 779.03 389.515 779.03S779.083 604.3 779.083 389.515 604.3 0 389.515 0 0 174.739 0 389.515" data-name="Path 1772"/></clipPath><clipPath id="c"><path fill="%236abdea" d="M101.89 0A101.9 101.9 0 1 0 203.8 101.89 101.892 101.892 0 0 0 101.89 0Z" data-name="Path 1773"/></clipPath></defs><g clip-path="url(%23a)" data-name="Mask Group 21" transform="translate(0 -469)"><g data-name="Group 69447" opacity=".06"><g data-name="Group 23534"><g clip-path="url(%23b)" data-name="Group 23533" transform="scale(-1) rotate(-82 -997.936 413.903)"><path fill="%236abdea" d="m-306.727 149.436 936.38-456.212 456.2 936.357-936.38 456.212z" data-name="Rectangle 5381"/></g></g><g data-name="Group 23536"><g clip-path="url(%23c)" data-name="Group 23535" transform="scale(-1) rotate(-82 -1086.983 531.977)"><path fill="%236abdea" d="M-80.243 39.097 164.712-80.247l119.344 244.955L39.101 284.052z" data-name="Rectangle 5382"/></g></g></g></g></svg>') no-repeat`,
						// 	backgroundSize: "cover",
						// 	paddingBottom: 130,
						// },
						cardClassName: "min-h-[250px] max-w-[427px]",
						gridClassName: "grid-cols-4",
					},
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: {
						label: "Dashboard and Analytics",
						subLabel: "Solutions:",
						href: PATHS.SOLUTIONS.DASHBOARD_AND_ANALYTICS,
					},
					nextPage: { label: "Ecommerce", subLabel: "Industries:", href: PATHS.INDUSTRIES.ECOMMERCE },
				},
			},
		],
	},
	[PATHS.INDUSTRIES.ECOMMERCE]: {
		metaData: {
			title: "E-Commerce Industry",
			description:
				"Enhance The Value Of A Customer's Lifetime, Modern Retail With Efficient Processes, while Supporting Clients Using Inbox",

			openGraph: {
				title: "Blue.AI Industries: E-Commerce",
				description:
					"Enhance The Value Of A Customer's Lifetime, Modern Retail With Efficient Processes, while Supporting Clients Using Inbox",
			},
		},
		sections: [
			{
				type: "INFO_CARDS_SECTION",
				header: {
					content: `
					## E-Commerce
	
					### Fly with your company
	
					Unique do-it-yourself solutions to increase sales, optimize processes, and improve customer service
					`,
					className: "max-w-[675px]",
				},
				body: {
					cards: [
						{
							label: "Recovery of An Abandoned Cart",
							content: "Reconnect with clients who have left their carts unattended.",
							imgProps: { ...EcommerceImgs.img1, alt: "Abandoned Cart" },
						},
						{
							label: "Emails Confirming Orders",
							content: "Automate order updates via the preferred channel of the consumer.",
							imgProps: { ...EcommerceImgs.img2, alt: "Confirming Emails" },
						},
						{
							label: "FAQ And Support Chatbots",
							content: "Create a chatbot to respond to often requested inquiries.",
							imgProps: { ...EcommerceImgs.img3, alt: "FAQ And Support" },
						},
					],
				},
			},
			{
				type: "FLEX_SECTION",
				header: {
					content: `# Enhance The Value Of A Customer's Lifetime`,
				},
				body: {
					content: `
						## Engagement of an abandoned cart
						Connect with customers who have stopped mid-checkout with automated, omnichannel communications that can offer deals, product details, and more to entice them back and increase sales.

						## Read up on customized shopping
						With chatbots, you can implement conversational commerce in your company by providing answers to frequently asked questions and designing unique interactions, such as replenishment notifications that inform customers when an item is back in stock.

						## Advertising with a click-to-message
						Throughout their route to purchase, enable ordering, tailored content, and more with click-to-message adverts to expand interactions with your customers to messaging platforms.
						`,
					imgProps: { ...EcommerceImgs.img4, alt: "Customized shopping" },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "FLEX_SECTION",
				header: { content: `# Modern Retail With Efficient Processes` },
				body: {
					content: `
						## Customer feedback
						Through a customer's selected channel, provide automated order updates. Share order confirmations, replenishment alerts, fulfillment notifications, and other information. Additionally, give customers the option to demand updates to increase involvement.

						## Automated surveys
						Create surveys that are delivered to clients after they make a purchase or visit your website. Automate Net Promoter Score (NPS) surveys to collect feedback on your products and reviews.
						`,
					imgProps: { ...EcommerceImgs.img5, alt: "Modern Retailing" },
					flexDirection: ROW_REVERSE,
				},
			},
			{
				type: "FLEX_SECTION",
				header: {
					content: `# Support Clients Using Inbox`,
				},
				body: {
					content: `
						## Interactions in the full context
						Utilize Inbox to centralize all client communications from all channels. Give your employees access to the complete history of client interactions so they may provide more effective and individualized service.

						## Become familiar with Inbox
						Take action throughout your company. Integrating Inbox with your business solutions will enable your support team to swiftly offer refunds or discounts without having to leave their support platform. To reduce context switching and automate procedures, use Inbox and Flow Builder.

						## Q&A chatbots
						Create a chatbot to automatically respond to frequently requested queries. Reduce the amount of work your live support crew has to do and respond to client inquiries quickly.
						`,
					imgProps: { ...EcommerceImgs.img6, alt: "Inbox client support" },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: {
						label: "Artificial Intelligence",
						subLabel: "Solutions:",
						href: PATHS.SOLUTIONS.ARTIFICIAL_INTELLIGENCE,
					},
					nextPage: { label: "Customized", subLabel: "Industries:", href: PATHS.INDUSTRIES.CUSTOMIZED },
				},
			},
		],
	},
	[PATHS.INDUSTRIES.CUSTOMIZED]: {
		metaData: {
			title: "Customized Industry",
			description:
				"Customer-Centricity On A New Level with Interactions that are multichannel and programmable, Personalized shopping experiences, Ads with a Click to Messaging, Onboarding based on messages, Messages on practical platforms, and last but not least safeguarding the data of both customers and employees.",

			openGraph: {
				title: "Blue.AI Industries: Customized",
				description:
					"Customer-Centricity On A New Level with Interactions that are multichannel and programmable, Personalized shopping experiences, Ads with a Click to Messaging, Onboarding based on messages, Messages on practical platforms, and last but not least safeguarding the data of both customers and employees.",
			},
		},
		sections: [
			{
				type: "TEXT_SECTION",
				header: {
					content: `
					## Customized
	
					### Bring (more) magic
	
					Better professional connections, better consumer experiences, and better assistance for everyone.
					`,
					className: "max-w-[673px]",
				},
				body: {},
			},
			{
				type: "FLEX_SECTION",
				header: {
					content: `# Customer-Centricity On A New Level`,
				},
				body: {
					content: `
						## Interactions that are multichannel and programmable
						Programmatic communications, such as texting users who leave their carts empty, can help you stay in touch with your customers. To re-engage customers and increase sales, automated, omnichannel messages can provide product details, discounts, and more.

						## Personalized shopping experiences
						Chatbots for modern interactions like new item notifications, new restaurants, and platform-based services can help you introduce conversational commerce to your business.

						## Ads with a Click to Messaging
						Utilize click-to-message ads to increase ad conversion by allowing ordering, personalized content, and other features along the buyer's journey.
						`,
					imgProps: { ...CustomizedImgs.img1, alt: "Customer-Centricity" },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "FLEX_SECTION",
				header: {
					content: `# Encourage Strong Professional Connections`,
				},
				body: {
					content: `
						## Onboarding based on messages
						Use programmatic communications to reach out to customers, such as texting cart abandoners. Automated, omnichannel messages can re-engage customers and increase sales by offering discounts, product details, and other things.

						## Messages on practical platforms
						Re-engage drivers and send alerts via already-used platforms and channels to ramp up staff members quickly without requiring them to learn new skills or download new software.

						## Safeguard the data of both customers and employees
						Utilize number masking and two factor authentication (2FA) to safeguard the information of both employees and customers. allowing for verified phone calls using anonymous numbers.
						`,
					flexDirection: ROW_REVERSE,
					imgProps: { ...CustomizedImgs.img2, alt: "Strong Professional Connections" },
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: { label: "Ecommerce", subLabel: "Industries:", href: PATHS.INDUSTRIES.ECOMMERCE },
					nextPage: { label: "Logistics", subLabel: "Industries:", href: PATHS.INDUSTRIES.LOGISTICS },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
		],
	},
	[PATHS.INDUSTRIES.LOGISTICS]: {
		metaData: {
			title: "Logistics Industry",
			description:
				"Conversations from the point of purchase until delivery while Boosting modern fulfillment experiences with communication tools to increase delivery success.",

			openGraph: {
				title: "Blue.AI Industries: Logistics",
				description:
					"Conversations from the point of purchase until delivery while Boosting modern fulfillment experiences with communication tools to increase delivery success.",
			},
		},
		sections: [
			{
				type: "TEXT_SECTION",
				header: {
					content: `
					## Logistics
	
					### Conversations from the point of purchase until delivery
	
					Boosting modern fulfillment experiences with communication tools to increase delivery success.
					`,
					className: "max-w-[673px]",
				},
				body: {},
			},
			{
				type: "FLEX_SECTION",
				header: { content: `# Increased Delivery Success` },
				body: {
					content: `
						## Home delivery confirmation
						By automatically verifying that recipients are at home to receive packages, failed deliveries can be avoided.
						
						## Masking of Omnichannel Account & Number
						Open a line of communication between delivery personnel and final customers while maintaining security and privacy.

						## Human-to-human connections in the final mile
						In order to facilitate successful deliveries, you can securely connect end-customers and delivery drivers by using account and number masking to share details like preferred drop-off times, locations, and more.
						`,
					imgProps: { ...LogisticsImgs.img1, alt: "Delivery Stores" },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "FLEX_SECTION",
				header: {
					content: `# For Recipients, On-Demand Insights`,
				},
				body: {
					content: `
						## Transparency in delivery can be automated using bots
						Messaging bots that can respond to queries about the location of orders or the estimated time of delivery can increase transparency to end users.							

						## Adapt communication encounters to the individual
						In order to give end users the ability to choose the frequency, category, and channel of notifications they want to receive, connect to customer platforms.

						## Alerts on preferred platforms
						Use the messaging platforms your customers prefer to let them know when a package has arrived or the anticipated time of delivery.`,
					flexDirection: ROW_REVERSE,
					imgProps: { ...LogisticsImgs.img2, alt: "Transparent deliveries" },
				},
			},
			{
				type: "FLEX_SECTION",
				header: {
					content: `# Support With Inbox Across The Board`,
				},
				body: {
					content: `
						## Comprehensive context for each conversation
						View all the pertinent information about a customer, including past interactions and order history. Support package senders in using their preferred communication channels, and make mention of delivery-related conversations.

						## Take action throughout your company
						Integrating Inbox with your business tools will allow your support team to quickly offer refunds or discounts, view the status of a delivery, and take action without leaving their support software.

						## Automated surveys
						Create surveys that are sent to customers right away after a delivery. Automate Net Promoter Score (NPS) surveys to collect testimonials and feedback on your offerings.
						`,
					imgProps: { ...LogisticsImgs.img3, alt: "Delivery support" },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: { label: "Customized", subLabel: "Industries:", href: PATHS.INDUSTRIES.CUSTOMIZED },
					nextPage: { label: "Healthcare", subLabel: "Industries:", href: PATHS.INDUSTRIES.HEALTHCARE },
				},
			},
		],
	},
	[PATHS.INDUSTRIES.HEALTHCARE]: {
		metaData: {
			title: "Healthcare Industry",
			description:
				"Bring new communication methods to your work where automated, omnichannel communication can assist patients and empower physicians.",

			openGraph: {
				title: "Blue.AI Industries: Healthcare",
				description:
					"Bring new communication methods to your work where automated, omnichannel communication can assist patients and empower physicians.",
			},
		},
		sections: [
			{
				type: "TEXT_SECTION",
				header: {
					content: `
					## Healthcare
	
					### Bring new communication methods to your work
	
					Automated, omnichannel communication can assist patients and empower physicians.`,
					className: "max-w-[673px]",
				},
				body: {},
			},
			{
				type: "FLEX_SECTION",
				header: {
					content: `# Bring New Communication Methods To Your Work`,
				},
				body: {
					content: `
						## Using preferred channels for communication
						Give patients the option to communicate with medical staff via the most widely used and user-friendly channels, including SMS, Viber, WhatsApp, and more.

						## Online diagnosis
						Patients can quickly receive care through remote interactions using images and audio clips.

						## Human-to-human connections in the final mile
						Short, message-based interactions can quickly reassure patients while giving doctors more time to concentrate on challenging cases.`,
					imgProps: { ...HealthcareImgs.img1, alt: "Custom patients communication" },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "FLEX_SECTION",
				header: { content: `# Simplify Access To Healthcare For Patients` },
				body: {
					content: `
						## Remote interactions
						Via WhatsApp, Messenger, Viber, and others decrease time and risk. Share photos and audio without meeting.

						## Chatbots answer inquiries
						Chatbots help your personnel focus on urgent work by automating manual communications. Answer frequent symptoms, measurements, and best practices queries immediately.

						## 2FA protects patient data
						2FA verifies patient identity and protects patient data.`,
					imgProps: { ...HealthcareImgs.img2, alt: "Remote interactions with healthcare patients" },
					flexDirection: ROW_REVERSE,
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: { label: "Logistics", subLabel: "Industries:", href: PATHS.INDUSTRIES.LOGISTICS },
					nextPage: { label: "Financial Services", subLabel: "Industries:", href: PATHS.INDUSTRIES.FINANCIAL_SERVICES },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
		],
	},
	[PATHS.INDUSTRIES.FINANCIAL_SERVICES]: {
		metaData: {
			title: "Financial Services Industry",
			description:
				"Establish lasting relationships based on trust. With omnichannel support and communication, you can establish connections with customers, stop fraud, and grow your network.",

			openGraph: {
				title: "Blue.AI Industries: Financial Services",
				description:
					"Establish lasting relationships based on trust. With omnichannel support and communication, you can establish connections with customers, stop fraud, and grow your network.",
			},
		},
		sections: [
			{
				type: "TEXT_SECTION",
				header: {
					content: `
					## Financial-Services
	
					### Establish lasting relationships based on trust
	
					With omnichannel support and communication, you can establish connections with customers, stop fraud, and grow your network.`,
					className: "max-w-[673px]",
				},
				body: {},
			},
			{
				type: "FLEX_SECTION",
				header: {
					content: `# Modern Client Interaction`,
				},
				body: {
					content: `
						## Programmable, cross-channel interactions:
						Connect with customers on the platforms they prefer, whether that's SMS, WhatsApp, Messenger, Viber, or any other from our expanding list.

						## Reminders and notifications about upcoming payments
						Send clients automated bills-due reminders or notifications of payments and transfers that have been successful.`,
					imgProps: { ...FinancialImgs.img1, alt: "Different Payments and transfers methods" },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "FLEX_SECTION",
				header: {
					content: `# Encourage Meaningful Client Interactions`,
				},
				body: {
					content: `
						## Complete context from all channels
						Utilize Inbox to centralize all customer communications from all channels. Give your teams access to the complete history of client interactions so they can respond to requests more effectively and personally.

						## Ensure prompt client response
						Automate conversation flows that can connect clients to the information they're looking for by using Flow Builder and Inbox.
						
						## Q&A chatbots
						Create a chatbot to automatically respond to frequently asked questions. Reduce the amount of work your live support team has to do and give customers prompt answers to their inquiries.
						`,
					imgProps: { ...FinancialImgs.img2, alt: "Different and customzied Client Interactions" },
					flexDirection: ROW_REVERSE,
				},
			},
			{
				type: "FLEX_SECTION",
				header: {
					content: `# Safeguarding Client Information`,
				},
				body: {
					content: `
						## Channel security and encryption
						Messages can be kept private using secure end-to-end encryption on platforms like WhatsApp.`,
					imgProps: { ...FinancialImgs.img3, alt: "Safe and private system" },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: { label: "Healthcare", subLabel: "Industries:", href: PATHS.INDUSTRIES.HEALTHCARE },
					nextPage: { label: "Insurance", subLabel: "Industries:", href: PATHS.INDUSTRIES.INSURANCE },
				},
			},
		],
	},
	[PATHS.INDUSTRIES.INSURANCE]: {
		metaData: {
			title: "Insurance Industry",
			description:
				"Make sure you connect with customers on their preferred channels. To increase sales for your company, make quotes and claims simpler for your customers.",

			openGraph: {
				title: "Blue.AI Industries: Insurance",
				description:
					"Make sure you connect with customers on their preferred channels. To increase sales for your company, make quotes and claims simpler for your customers.",
			},
		},
		sections: [
			{
				type: "TEXT_SECTION",
				header: {
					content: `
					## Insurance
	
					### Make sure you connect with customers on their preferred channels.
	
					To increase sales for your company, make quotes and claims simpler for your customers.`,
					className: "max-w-[740px]",
				},
				body: {},
			},
			{
				type: "FLEX_SECTION",
				header: {
					content: `# As Quickly As Possible, Quotes`,
				},
				body: {
					content: `
						## Convenience of omnichannel
						Offer customers quotes for your policies by connecting with them on the channels and gadgets they prefer to use.

						## Sharing of information at a high bandwidth:
						Reduce the time it takes to present a quote by allowing potential clients to send images, videos, locations, and more.

						## Make challenging claims simpler
						When someone makes an insurance claim, it typically indicates that times are more difficult than normal. Meet your clients where it is most convenient for them to communicate.`,
					imgProps: { ...InsuranceImgs.img1, alt: "Convenient and private omnichannel connection" },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "FLEX_SECTION",
				header: {
					content: `# Support Clients With Inbox`,
				},
				body: {
					content: `
						## Interactions in the full context
						Utilize Inbox to centralize all customer communications from all channels. View all information, from the time the quote was obtained to the most recent claim.

						## Q&A chatbots
						Create a chatbot to automatically respond to frequently asked questions. Reduce the amount of work your live support team has to do and respond to customer questions quickly.`,
					imgProps: { ...InsuranceImgs.img2, alt: "Full context interactions" },
					flexDirection: ROW_REVERSE,
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: {
						label: "Financial Services",
						subLabel: "Industries:",
						href: PATHS.INDUSTRIES.FINANCIAL_SERVICES,
					},
					nextPage: {
						label: "Sales and Marketing",
						subLabel: "Industries:",
						href: PATHS.INDUSTRIES.SALES_AND_MARKETING,
					},
					classNames: { sectionClassName: BLUE_BG },
				},
			},
		],
	},
	[PATHS.INDUSTRIES.SALES_AND_MARKETING]: {
		metaData: {
			title: "Sales & Marketing Industry",
			description:
				"With only calls and emails, you won't achieve your aims. In order to get more qualified leads and quick sales interaction, use omnichannel marketing initiatives.",

			openGraph: {
				title: "Blue.AI Industries: Sales & Marketing",
				description:
					"With only calls and emails, you won't achieve your aims. In order to get more qualified leads and quick sales interaction, use omnichannel marketing initiatives.",
			},
		},
		sections: [
			{
				type: "TEXT_SECTION",
				header: {
					content: `
					## Sales & Marketing
	
					### With only calls and emails, you won't achieve your aims.
	
					In order to get more qualified leads and quick sales interaction, use omnichannel marketing initiatives.`,
					className: "max-w-[673px]",
				},
				body: {},
			},
			{
				type: "FLEX_SECTION",
				header: {
					content: `# Make Magic With Blue.AI`,
				},
				body: {
					content: `
						## There are discussions on every channel
						Engage your contacts on the platforms they choose, and you'll watch conversion rates rise and the number of qualified leads entering your pipeline increase.

						## Include omnichannel in your toolkit already
						Send omnichannel communications to your lists via a native integration or by integrating with any tool using webhooks and HTTP requests.

						## Automation with personalization
						Create intricate, personalized journeys for your contacts using Flow Builder that respond to their actions and contain sensitive information.`,
					imgProps: { ...SalesImgs.img1, alt: "Contacts engagement tools" },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "FLEX_SECTION",
				header: {
					content: `# Connect With Leads Quickly`,
				},
				body: {
					content: `
						## Instantaneous engagement
						Notify representatives whenever a marketing conversation results in a qualified lead. Let the customer continue using whichever channel they like and pass the lead directly to the representative.

						## Entire context and knowledge
						View the prospect's whole conversation history across all platforms to better understand their needs.

						## Using bots for automation:
						Leads can be qualified via automated chatbots or live chat, and connections to account personnel can be made quickly.`,
					imgProps: { ...SalesImgs.img2, alt: "Connecting with leads" },
					flexDirection: ROW_REVERSE,
				},
			},
			{
				type: "FLEX_SECTION",
				header: {
					content: `# A Unified Inbox To Assist Your Clients`,
				},
				body: {
					content: `
						## Detailed context to demonstrate your attentiveness
						Have a threaded client discussion that has a record of all conversations from every channel (including WhatsApp, SMS, Messenger, Viber, Line, and more). This gives both the marketing team and your sales team context for what has been sent and received.`,
					imgProps: { ...SalesImgs.img3, alt: "Unified Inbox" },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: { label: "Insurance", subLabel: "Industries:", href: PATHS.INDUSTRIES.INSURANCE },
					nextPage: { label: "Automotive", subLabel: "Industries:", href: PATHS.INDUSTRIES.AUTOMOTIVE },
				},
			},
		],
	},
	[PATHS.INDUSTRIES.AUTOMOTIVE]: {
		metaData: {
			title: "Automotive Industry",
			description:
				"Bring the whole (digital) package to your clients. With contemporary communication tools for your dealership, you can generate leads, engage customers, and send useful service reminders.",

			openGraph: {
				title: "Blue.AI Industries: Automotive",
				description:
					"Bring the whole (digital) package to your clients. With contemporary communication tools for your dealership, you can generate leads, engage customers, and send useful service reminders.",
			},
		},
		sections: [
			{
				type: "TEXT_SECTION",
				header: {
					content: `
					## Automotive
	
					### Bring the whole (digital) package to your clients.
	
					With contemporary communication tools for your dealership, you can generate leads, engage customers, and send useful service reminders.`,
					className: "max-w-[673px]",
				},
				body: {},
			},
			{
				type: "FLEX_SECTION",
				header: {
					content: `# Promote Your Stock With Clever Communication`,
				},
				body: {
					content: `
						## Reach across all channels
						Increase conversion rates and customer engagement by connecting with your contacts on the platforms they prefer.

						## More than a campaign - Marketing dialogues
						Use conversational marketing to showcase your inventory and solicit feedback from customers over their desired purchases. When a prospect is qualified, automatically link them to a salesperson.

						## Automation with personalization
						Use conversational marketing to showcase your inventory and solicit feedback from customers over their desired purchases. When a prospect is qualified, automatically link them to a salesperson.`,
					imgProps: { ...AutomotiveImgs.img1, alt: "Automotive Image" },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "FLEX_SECTION",
				header: {
					content: `# Better Connect With Automobile Buyers`,
				},
				body: {
					content: `
						## Rapid interaction
						Notify representatives whenever a marketing conversation results in a qualified lead. Directly transfer the conversation to your sales staff.

						## Favorite channels
						Review the entire conversation history from all channels to determine what the buyer is seeking. Utilize SMS, Messenger, Viber, WhatsApp, and other channels that they choose to use to communicate with them and answer to them.

						## Using bots for automation
						Create logic to filter leads and intelligently direct prospective customers to the relevant sales team members.`,
					imgProps: { ...AutomotiveImgs.img2, alt: "Automotive Image" },
					flexDirection: ROW_REVERSE,
				},
			},
			{
				type: "FLEX_SECTION",
				header: {
					content: `# Inbox Can Help Your Service Department`,
				},
				body: {
					content: `
						## Complete customer context
						Give customer support agents complete access to customer chat histories (across SMS, WhatsApp, Messenger, and more) so they can wow clients with context and guarantee that the proper services are provided.

						## Automated appointment and service reminders
						Create automated service and appointment reminders with Flow Builder and send them to clients via their preferred channels.

						## Q&A chatbots
						Create a chatbot to respond to frequently requested queries about things like service pricing or opening hours. Reduce the workload for your live support staff while providing consumers with prompt responses to their inquiries.`,
					imgProps: { ...AutomotiveImgs.img3, alt: "Automotive Image" },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: {
						label: "Sales and Marketing",
						subLabel: "Industries:",
						href: PATHS.INDUSTRIES.SALES_AND_MARKETING,
					},
					nextPage: { label: "Real Estate", subLabel: "Industries:", href: PATHS.INDUSTRIES.REAL_ESTATE },
				},
			},
		],
	},
	[PATHS.INDUSTRIES.REAL_ESTATE]: {
		metaData: {
			title: "Real Estate Industry",
			description:
				"Sell properties more quickly with less work. With multichannel communication, you can automate FAQs, promote listings, and develop client connections.",

			openGraph: {
				title: "Blue.AI Industries: Real Estate",
				description:
					"Sell properties more quickly with less work. With multichannel communication, you can automate FAQs, promote listings, and develop client connections.",
			},
		},
		sections: [
			{
				type: "TEXT_SECTION",
				header: {
					content: `
					## Real Estate
	
					### Sell properties more quickly with less work.
	
					With multichannel communication, you can automate FAQs, promote listings, and develop client connections.`,
					className: "max-w-[673px]",
				},
				body: {},
			},
			{
				type: "FLEX_SECTION",
				header: {
					content: `# Long-Term Client Partnerships`,
				},
				body: {
					content: `
						## On chosen platforms, reach
						Use SMS, Messenger, WhatsApp, Viber, or any other preferred way to connect with buyers and sellers.

						## Improved client interactions
						By expanding your toolkit for communication, you may strengthen your relationships with others by getting in touch with clients on their preferred channels, never missing a message, and knowing the complete context of every engagement.

						## Automated personalized advertising
						With the help of Flow Builder, you can automatically connect with buyers, ascertain what they are looking for, and begin sending listings.`,
					imgProps: { ...RealEstateImgs.img1, alt: "Real Estate Image" },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "FLEX_SECTION",
				header: {
					content: `# Connecting People To Property With Robots`,
				},
				body: {
					content: `
						## Promote the listings in areas where customers are already looking
						Buyers are more likely to read messages, look at listings, and respond to what you've sent if you use their preferred channels.

						## Reminders for open houses and appointment notifications
						Automated notifications and reminders can be used to inform potential purchasers about future or existing open houses.

						## Automated FAQ
						To save time and give your clients quick service, create bots that automatically respond to FAQs regarding your listings.`,
					imgProps: { ...RealEstateImgs.img2, alt: "Real Estate Image" },
					flexDirection: ROW_REVERSE,
				},
			},
			{
				type: "TEXT_SECTION",
				header: {
					content: `
					# One Single Inbox
			
					For complete context for every interaction, Inbox establishes a single client thread that collects all messages from all channels, including those from bots.
					`,
					className: "w-[806px]",
				},
				body: {
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: { label: "Automotive", subLabel: "Industries:", href: PATHS.INDUSTRIES.AUTOMOTIVE },
					nextPage: { label: "Food and Beverage", subLabel: "Industries:", href: PATHS.INDUSTRIES.FOOD_AND_BEVERAGE },
				},
			},
		],
	},
	[PATHS.INDUSTRIES.FOOD_AND_BEVERAGE]: {
		metaData: {
			title: "Food Beverage Industry",
			description:
				"Communicate flavorfully, To reach more hungry diners and customers, share your meals, beverages, and other offerings across all platforms.",

			openGraph: {
				title: "Blue.AI Industries: Food Beverage",
				description:
					"Communicate flavorfully, To reach more hungry diners and customers, share your meals, beverages, and other offerings across all platforms.",
			},
		},
		sections: [
			{
				type: "TEXT_SECTION",
				header: {
					content: `
					## Food Beverage
	
					### Communicate flavorfully
	
					To reach more hungry diners and customers, share your meals, beverages, and other offerings across all platforms.`,
					className: "max-w-[673px]",
				},
				body: {},
			},
			{
				type: "FLEX_SECTION",
				header: {
					content: `# Make People Famished (And Thirsty)`,
				},
				body: {
					content: `
						## Connect people to your brand on all available channels
						Increase conversion rates and customer engagement by connecting with your contacts on the platforms they prefer.

						## Multichannel marketing that is more efficient
						Use conversational marketing to reach customers on the channels they frequent most and showcase top sellers, new flavors, and flash specials.

						## Automation with personalization
						Create intricate, personalized journeys for your contacts using Flow Builder based on their actions and interactions with your brand.

						`,
					imgProps: { ...FoodBeverageImgs.img1, alt: "Food Beverage Image" },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "INFO_CARDS_SECTION",
				header: {
					content: `
					# Never Again Put Somebody On Hold
	
					Automate manual operations so that your personnel may concentrate on customers at your restaurant or harder support inquiries.
					`,
					className: "[&>span]:max-w-[688px]",
				},
				body: {
					cards: [
						{
							label: "Reserving Procedures",
							content: "Automate the processing of reservation requests, modifications, and cancellations.",
							imgProps: { ...FoodBeverageImgs.img2, alt: "Reserving Procedures" },
						},
						{
							label: "Electronic Queues",
							content: "Send consumers notifications on their favourite messaging platforms when their table is ready.",
							imgProps: { ...FoodBeverageImgs.img3, alt: "Electronic Queues" },
						},
						{
							label: "Taking Orders",
							content:
								"To increase sales, make it simple for clients to place orders via their favorite messaging services.",
							imgProps: { ...FoodBeverageImgs.img4, alt: "Taking Orders" },
						},
						{
							label: "Scripted Faqs",
							content:
								"Automate formulaic, repetitious responses or give beneficial links and information to handle frequent issues.",
							imgProps: { ...FoodBeverageImgs.img5, alt: "Scripted Faqs" },
						},
					],
				},
			},
			{
				type: "TEXT_SECTION",
				header: {
					content: `
					# One Single Inbox
			
					Customers who require support should be contacted by a customer service staff that has access to all of their past orders and support tickets.
					`,
					className: "w-[846px]",
				},
				body: {
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: { label: "Real Estate", subLabel: "Industries:", href: PATHS.INDUSTRIES.REAL_ESTATE },
					nextPage: { label: "Case Studies", href: PATHS.CASE_STUDIES.HOME },
				},
			},
		],
	},
	[PATHS.CASE_STUDIES.HOME]: {
		metaData: {
			title: "Case Studies",
			description:
				"Here we showcase all case studies of very successfull companies that had great stories and experiences with Campaign management systems, Flowbuilders, and similar services",

			openGraph: {
				title: "Blue.AI Case Studies",
				description:
					"Here we showcase all case studies of very successfull companies that had great stories and experiences with Campaign management systems, Flowbuilders, and similar services",
			},
		},
		sections: [
			{
				type: "CARDS_CAROUSEL_SECTION",
				header: {
					content: `
					# Case Studies
	
					See how Blue.AI helps brands across the globe manage their digital channels.
					`,
				},
				body: {
					cards: [
						{
							label: "Estafeta",
							content:
								"Estafeta Optimizes Omnichannel Experiences With Best-In-Class Logistics Operations And A 60% Boost Incustomer Support SLA.",
							imgProps: {
								src: Estafeta.img.src,
								alt: "estafa image",
								blurDataURL: Estafeta.img.blurDataURL,
							},
							cta: {
								href: "/case-studies/estafeta",
							},
						},
						{
							label: "Wells Fargo",
							content:
								"Wells Fargo Ensures That Customers Have A Consistent Experience And Input On All Social Media Platforms.",
							imgProps: {
								src: Wells.img.src,
								alt: "Wells fargo image",
								blurDataURL: Wells.img.blurDataURL,
							},
							cta: {
								href: "/case-studies/wells-fargo",
							},
						},
						{
							label: "YG Entertainment",
							content: "YG Entertainment Elevates Fan Engagement With AI-Powered Customer Experience Management.",
							imgProps: {
								src: Yg.img.src,
								alt: "Yg image",
								blurDataURL: Yg.img.blurDataURL,
							},
							cta: {
								href: "/case-studies/yg-entertainment",
							},
						},
						{
							label: "Prada",
							content: "How Prada Group Drives Premium Brand Digital Innovation.",
							imgProps: {
								src: Prada.img.src,
								alt: "prada image",
								blurDataURL: Prada.img.blurDataURL,
							},
							cta: {
								href: "/case-studies/prada",
							},
						},
						{
							label: "Honda",
							content: "What Honda did to unify customer service in the new age of online auto sales.",
							imgProps: {
								src: honda.img.src,
								alt: " image",
								blurDataURL: honda.img.blurDataURL,
							},
							cta: {
								href: "/case-studies/honda",
							},
						},
						{
							label: "Norse",
							content: "How Norse quickly introduced an omnichannel customer service program",
							imgProps: {
								src: norse.img.src,
								alt: " image",
								blurDataURL: norse.img.blurDataURL,
							},
							cta: {
								href: "/case-studies/norse",
							},
						},
						{
							label: "AIDA Cruises",
							content: "How AIDA Cruises maintains love even in the face of adversity.",
							imgProps: {
								src: aida.img.src,
								alt: " image",
								blurDataURL: aida.img.blurDataURL,
							},
							cta: {
								href: "/case-studies/aida-cruises",
							},
						},
					],
					classNames: { sectionClassName: "pb-[200px]" },
				},
			},
		],
	},
	[PATHS.CASE_STUDIES.ESTAFETA]: {
		metaData: {
			title: "Estafeta Case Study",
			description:
				"Estafeta optimizes omnichannel experiences with best-in-class logistics operations and a 60% boost incustomer support SLA.",

			openGraph: {
				title: "Blue.AI Case studies: Estafeta",
				description:
					"Estafeta optimizes omnichannel experiences with best-in-class logistics operations and a 60% boost incustomer support SLA.",
			},
		},
		sections: [
			{
				type: "PAGE_HEADER_SECTION",
				body: {
					content: `
					# Estafeta

					## Estafeta optimizes omnichannel experiences with best-in-class logistics operations and a 60% boost incustomer support SLA.
					`,
					breadcrumbPages: [{ label: "Case Studies", href: PATHS.CASE_STUDIES.HOME }, { label: "Estafeta" }],
					classNames: { innerClassName: "max-w-[701px]" },
				},
			},
			{
				type: "BLOG_SECTION",
				body: {
					content: `
					# Challenge

					Established in Mexico City, Estafeta Mexicana is a logistics provider. It competes with significant worldwide logistics operators like DHL, FedEx, and UPS by providing top-notch logistical services to clients and suppliers in Mexico and myriad regions of the United States. Since 2020, Estafeta's size has nearly doubled in response to the pandemic's growing demands for logistics services. The company set out on a mission to integrate all of its digital platforms and provide an omnichannel customer experience in order to live up to growing customer demands with a small team. Additionally, the company's marketing team sought to enhance the efficiency of responding to and handling customer complaints using contemporary media, while nonetheless sustaining a personal touch across all forms of communication.
		
					Substantially, Estafeta was seeking an all-encompassing technology solution that included: Optimizing the integration of all social media platforms with the company&#39;s present tech.
					
					Deliver improved agreements by fostering performance measurements and analytics (SLAs).
					
					Offer users, followers, and potential customers an authentic omnichannel experience.
					`,
					blogCard: {
						customer: "Estafeta Mexicana",
						imgProps: Estafeta.img,
						logoProps: Estafeta.logo,
						details: {
							industry: "Logistics and Transportation",
							"company size": "+12,000",
							location: "Mexico City, Mexico",
						},
					},
				},
			},
			{
				type: "BLOG_SECTION",
				body: {
					content: `
					# Solution

					By adopting a unified customer experience management (Unified-CX) system, Estafeta managed to bring its entire customer experience approach in-house. Due to the omnichannel system, Fasterling is now able to combine many social media networks, like Facebook, Twitter, Instagram, LinkedIn, and, shortly, TikTok, into a single platform.
		
					Consequently, managing incoming requests from all channels and locations while enhancing SLAs with a modest team of three community managers is a possibility.
					
					**The process is as Follows:**

					To ensure always-on response, intelligent case management routes requests to the appropriate agent at the appropriate time. Customer service teams can offer immediate, functionalized responses with some personalization courtesy to scripted responses. Estafeta can assess the mindset of its customers and adjust its assistance strategy in real-time due to timely data provided by AI engine. Additionally, Estafeta uses competitive benchmarking to promptly filter requests and analyse how it operates in relation to other international logistics firms on three metrics: the amount of followers, the number of impressions, and the number of interactions with postings.
					
					The product suite for social publishing and engagement makes it simple for the marketing team to work together on social content. Before posting to Estafeta&#39;s social media channels, team members use a shared platform to put all material through approval protocols to ensure strong, on-brand communication.
					`,
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "BLOG_SECTION",
				body: {
					content: `
					# Outcome

					Estafeta is currently one of the top three companies in the industry for SLA performance having making a 60% improvement in their customer service SLA in just two years. Furthermore, the AI capabilities have demonstrated a 95% accuracy rate in detecting future brand upheavals and brand loyalty. Estafeta currently administers end-to-end digital marketing internally with the help of powered support, social publishing, and scheduling, which minimizes the company&#39;s operating expenses. The company&#39;s objective as it develops is to enhance visibility in the international market, increase automation processes, and broaden its social platform reach.
					`,
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: { label: "Case Studies", href: PATHS.CASE_STUDIES.HOME },
					nextPage: { label: "Wells Fargo", subLabel: "Case Study:", href: PATHS.CASE_STUDIES.WELLS_FARGO },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
		],
	},
	[PATHS.CASE_STUDIES.WELLS_FARGO]: {
		metaData: {
			title: "Wells Fargo Case Study",
			description:
				"Wells Fargo Ensures That Customers Have A Consistent Experience And Input On All Social Media Platforms",

			openGraph: {
				title: "Blue.AI Case studies: Wells Fargo",
				description:
					"Wells Fargo Ensures That Customers Have A Consistent Experience And Input On All Social Media Platforms",
			},
		},
		sections: [
			{
				type: "PAGE_HEADER_SECTION",
				body: {
					content: `
					# Wells Fargo

					## Wells Fargo Ensures That Customers Have A Consistent Experience And Input On All Social Media Platforms
					`,
					breadcrumbPages: [{ label: "Case Studies", href: PATHS.CASE_STUDIES.HOME }, { label: "Wells Fargo" }],
					classNames: { innerClassName: "max-w-[780px]" },
				},
			},
			{
				type: "BLOG_SECTION",
				body: {
					content: `
					# Challenge

					Wells Fargo is a global leader in financial services and one of the most recognizable names in banking. The bank, which has its main office in San Francisco, California, is committed to improving the economy while delivering the greatest calibre of customer service. As vice president of social media marketing technology and operations at Wells Fargo, David Encizo&#39;s objective was to assist the business in better managing the risk and governance related to social media marketing. In order to accomplish this, he sought to reduce the number of tools and gadgets utilized throughout the company and improve collaboration amongst Wells Fargo teams. Encizo claimed that although high-performing teams were working in separate technological silos, there was increased friction and redundant data. He explains, &quot;We wanted to change it. We wanted to use the minimum technologies possible while still providing the enterprise teams concentrating on social with top-notch capacities and performance characteristics. &quot; Encizo sought a comprehensive answer that: Would enable publishing and advertising, social media monitoring, customer support, tracking, and data for Wells Fargo by combining many social media marketing processes and governing bodies into a unified, strategic system. Could carry out crucial intelligence tasks to minimize brand risk and adhered to industry rules and guidelines.
		
					Integrated reporting and industry trends across promoted, organic, and acquired social media operations were made possible by unified data across all online activities. Improved prioritizing and channelling of incoming customer support questions while enabling the team to more fully humanize the bank&#39;s online brand. Wells Fargo would innovate leveraging scale and AI as it seeks to address miscommunications for other industry verticals.
					`,
					blogCard: {
						customer: "Wells Fargo",
						imgProps: Wells.img,
						logoProps: Wells.logo,
						details: {
							industry: "Financial Services",
							"company size": "249,435 Employees",
							location: "San Francisco, CA",
						},
					},
				},
			},
			{
				type: "BLOG_SECTION",
				body: {
					content: `
					# Solution

					Wells Fargo substituted 4 individual solutions upon adopting a unified customer experience management (Unified-CX) system. By taking this route, the bank is able to offer a standardized, swivelling user experience at mass in a way that is both compatible with the law and secure for the business. The bank&#39;s social marketing and social care staff today collaborate on an unified platform where they create and oversee ad campaigns, plan and post content aggregation, listen to internet discussions to gather useful information, and assist the company&#39;s 70 million plus clients. By utilizing the Unified-CX platform to implement administrating throughout all of their functional areas, Wells Fargo's social personnel can assure a cohesive brand message within all social platforms while operating from a unique and unified platform. All four of the platform's product suites have been installed by the bank, fully providing socially engaged teams throughout the whole organization. The bank uses Unified-CX in the following four main ways: 
		
					1. Wells Fargo&#39;s social media messages are amplified by online networking professionals and associates: 
					
					Encizo first had to make sure that all social media promotion was legal and secure for the Wells Fargo name. The platform's Social Engagement and Sales product suite includes Social Posting and Interaction, which gives Encizo&#39;s online networking staff the ability to effectively develop, post, and oversee brand content across numerous social mediums from a common network with corporate governance. They then employ analytics models and interaction monitors that can be disseminated amongst groups to effectively assess and communicate with customers. Additionally, Wells Fargo makes use of the Employee Advocacy platform, which gives staff members access to a selection of material from the company that has been authorized for social media posting. The bank has the capacity to amplify its brand and cultural online content and boost constructive conversation taking place around the Wells Fargo brand by inspiring and mobilizing its most outspoken and informed brand ambassadors - its workforce. Encizo claims that &quot;some of our best advocates are our staff. &quot;We can amplify and validate the Wells Fargo brand in a truly authentic way by enabling people to go to the Wells Fargo Advocate Portal select content that they can simply send out on their privateonline profiles.&quot; 
					
					2. Social advertising allows for legal and trustworthy brand efforts:
					
					The staff additionally utilize Social Advertising, Advertising product suite, to reduce image hazard while maximizing return on ad expenditure with accurate data and technology integrations. All activities associated with sponsored media campaign effort are computerized and handled in one location using online advertising. All profiles on social media and the whole publication process for advertisements are subject to less business risk due to standardized and uniform practices and explicit authorizations. Whereas the project directors have quite a consolidated view to plan, monitor, and implement projects that contribute to funnel and financial targets, Encizo is able to permit the staff to sustain transparency and responsibility throughout all promotional activities and platforms. 
					
					3. Offering omnichannel, smooth customer experience:
					
					With the support of Social Care, which Wells Fargo installed, employees are now capable of supporting customers promptly and effectively irrespective of the method they choose to communicate with the bank. The AI automates a large variety of choices and activities on the Agent Console, where employees usually spend all of their time working. This aids Wells Fargo in increasing income potential, lowering expenses, and mitigating risks. AI- powered automated labelling distributes situations to available workers, allowing them to respond swiftly with prior authorized, recommended messages. The Smart Responses functionality, which allows customer relations personnel to deal with situations accurately and thoroughly while providing customers with the more individualized services they want, includes these messaging ideas. After that, the Smart Compliance verifies each reply to make sure it is correct and compatible. Lastly, the Intuition Moderation function aids in the categorization and storage of client enquiries for later traceability. Wells Fargo employees can swiftly respond to consumer concerns across eight managed, brand-specific social platforms while maintaining a consistent message.
					
					4. Utilizing competitive benchmarking to outperform opponents:
					
					The Wells Fargo Social staff may regularly monitor the company&#39;s social effectiveness and compare it to that of rivals and certain other best-in-class brands courtesy to Competitive Insights &amp; Benchmarking. According to Encizo, benchmarking provides detailed data that extend beyond interaction analytics and the quantity of postings to pinpoint possibilities and tactics that aid Wells Fargo in staying one step ahead of rivals. The bank is now able to examine ambitious businesses even outside the banking industry and learn about their social media platforms and customer service initiatives thanks to Benchmarking. Benchmarking, in Encizo's opinion, is a subtle victory. Monitoring systems are an efficient method of providing information to management since they are simple utilise. The convenience with which we can add new brands instantly is why adoption has become so huge. We frequently get asked, “How do we compare to this or that?”
					`,
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "BLOG_SECTION",
				body: {
					content: `
					# Outcome

					With the aim of using the fewest tools feasible while yet providing business groups that prioritize social with top-notch advanced features, Wells Fargo streamlined from four single-point solutions down to Unified-CX. Currently, Wells Fargo&#39;s support staff and social team work together to engage with customers and prospects on social media while still providing customer service. Currently, Wells Fargo&#39;s support staff and social team work together to engage with customers and prospects while still providing customer service. The digital team uses social media analytics to respond to vast numbers of discussions per year and to keep track of dozens of social media profiles for benchmarking. Additionally, hundreds of personnel endorsers who publish content using their own social profiles amplify the bank&#39;s own messages to consumers.
					`,
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: { label: "Estafeta", subLabel: "Case Study:", href: PATHS.CASE_STUDIES.ESTAFETA },
					nextPage: { label: "YG Entertainment", subLabel: "Case Study:", href: PATHS.CASE_STUDIES.YG_ENTERTAINMENT },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
		],
	},
	[PATHS.CASE_STUDIES.YG_ENTERTAINMENT]: {
		metaData: {
			title: "YG Entertainment Case Study",
			description: "YG Entertainment Elevates Fan Engagement With AI-Powered Customer Experience Management.",

			openGraph: {
				title: "Blue.AI Case studies: YG Entertainment",
				description: "YG Entertainment Elevates Fan Engagement With AI-Powered Customer Experience Management.",
			},
		},
		sections: [
			{
				type: "PAGE_HEADER_SECTION",
				body: {
					content: `
					# YG Entertainment

					## YG Entertainment Elevates Fan Engagement With AI-Powered Customer Experience Management.
					`,
					breadcrumbPages: [{ label: "Case Studies", href: PATHS.CASE_STUDIES.HOME }, { label: "YG Entertainment" }],
					classNames: { innerClassName: "max-w-[700px]" },
				},
			},
			{
				type: "BLOG_SECTION",
				body: {
					content: `
					# Challenge

					You may be familiar with BIGBANG, 2NE1, WINNER, iKON, AKMU, BLACKPINK, and TREASURE from their string of hit singles. YG Entertainment Inc. (YG Entertainment), founded by creative producer Yang Hyun-Suk 25 years ago, is responsible for creating these bands. In order to find and develop a core of outstanding local performers and song artists, YG Entertainment was founded in 1996. After giving these individuals expertise, the company then unveiled them as &quot;idol group&quot; to millions of fans all around globe. The current market capitalization of YG Entertainment is 1.16 trillion Korean won. YG Entertainment need a response to the following issues in order to stay relevant and guarantee that it can still reach its millions of fans worldwide: Determine the worldwide effect of viral news in numbers. Assist in discovering new markets to grow the company More effectively communicate with individual fans worldwide
					`,
					blogCard: {
						customer: "YG Entertainment",
						imgProps: Yg.img,
						logoProps: Yg.logo,
						details: {
							industry: "Entertainment, Music",
							"company size": "343+ Employees, 19 subsidiaries in 4 regions (South Korea, Japan, Hong Kong, and USA)",
							location: "Seoul, South Korea (HQ)",
						},
					},
				},
			},
			{
				type: "BLOG_SECTION",
				body: {
					content: `
					# Solution

					The YG Entertainment management was aware that it needed access to conversations occurring on social media and other digital platforms in order to better comprehend its followers and their preferences. To gain a single perspective of the various digital dialogues taking place throughout the globe, the organization chose to deploy a market-leading unified customer experience management (Unified-CX) platform, in May 2020. It currently keeps an eye on more than 30 social media and online outlets throughout its seven idol groups, and tallying. Real-time monitoring of fan conversations.
					
					The South Korean entertainment powerhouse had grand intentions to reorganize its operations so it might more efficiently commercialize from products, with more than 97 million members on YouTube solely. According to Ethan Sunguk Song, Head of Platform Group at YG Entertainment, &quot;We must initially understand our fans and their preferences better before we properly alter the way we manage the business.&quot; Despite the fact that the business is not a newcomer to social media monitoring, the business wished to enhance the method they monitored fan chats in order to produce more precise data. YG Entertainment sought to comprehend fan emotions and feelings in addition to the talks that are conducted. As it discovers new, rising marketplaces like Brazil, for instance, YG Entertainment may broaden its business model by utilizing the capacity to compile findings from all over the globe on an unified platform. Receiving AI notifications for early warning indicators Song is aware of the value of patron and fan devotion as a previous marketing executive at a credit card firm. He acknowledges the smart alerts as a crucial tool for reducing company hazards. The adoption of that feature at YG Entertainment instantly yielded rewards. For instance, when UK admirers criticized local distributors of YG Entertainment-licensed goods on online platforms for their customer service, Smart Alerts promptly captured the complaints and notified the headquarters in Korea. &quot;We instantly noticed the discussion on social networks and started an investigation into the regional distribution networks as well as other distributors to make sure the goods were in good shape. We were indeed able to help consumers who were in need right away, &quot; says Song.
					`,
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "BLOG_SECTION",
				body: {
					content: `
					# Outcome

					With the aid of Unified-CX solution, YG Entertainment was able to organize their fan dialogue monitoring process for a more methodical method that supports its data-driven business strategy.
					"Fans determine whether an industry succeeds or fails. By treating our followers like VIPs, we can guarantee they consistently receive the finest experience with us and probably evolve a more intimate bond with them."
					
					The main concern for this South Korean entertainment powerhouse has been, and will continue to be, how to keep YG artist fans fantasies alive round-the-clock without drawing their attention to other alluring rivals. More critically, how can they continue to provide fans with enjoyable, customized, and distinctive consumer experiences? As the firm develops, Song says,". We anticipate looking at additional offerings to grow and stabilize the complete business, from beginning to finish."
					`,
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: { label: "Wells Fargo", subLabel: "Case Study:", href: PATHS.CASE_STUDIES.WELLS_FARGO },
					nextPage: { label: "Prada", subLabel: "Case Study:", href: PATHS.CASE_STUDIES.PRADA },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
		],
	},
	[PATHS.CASE_STUDIES.PRADA]: {
		metaData: {
			title: "Prada Case Study",
			description: "How Prada Group drives premium brand digital innovation",

			openGraph: {
				title: "Blue.AI Case studies: Prada",
				description: "How Prada Group drives premium brand digital innovation",
			},
		},
		sections: [
			{
				type: "PAGE_HEADER_SECTION",
				body: {
					content: `
					# Prada

					## How Prada Group drives premium brand digital innovation
					`,
					breadcrumbPages: [{ label: "Case Studies", href: PATHS.CASE_STUDIES.HOME }, { label: "Prada" }],
					classNames: { innerClassName: "max-w-[680px]" },
				},
			},
			{
				type: "BLOG_SECTION",
				body: {
					content: `
					# Challenge

					The Prada Group, which owns a number of the most renowned brands of luxury around the world, is continuously working to increase their value by broadening their reach and exposure. In order to translate the very same entrepreneurial thinking that has driven the brand since 1913 — and into the digital realm — The Group We reckon that the destiny of our premium brands will be determined by the experiences we build for our customers, as Prada Group Marketing Director Lorenzo Bertelli puts it. According to Bertelli, "each brand within the Prada Group will be unified throughout in-person and social media to assist customers wherever and whenever they desire the best possible experience." This includes personalized interactions in stores as well as humanizing experiential and interactive experiences across digital / online shop windows.
		
					The Prada Group set out on an ambitious path when it first adopted such method to combine a number of point solutions onto the unified customer experience management (Unified-CX) platform. For the purpose of identifying, contacting, and engaging its Millennial and Gen Z demographic, the Group desired a unified platform equipped with artificial intelligence to manage benchmarking, analytics, marketing, and service. With its digital-first approach, the business would continue to be at the forefront of bigger cultural discussions and trends that affected their brand while offering the all-encompassing shopping experience that today 's customers desire.
					`,
					blogCard: {
						customer: "Prada Group",
						imgProps: Prada.img,
						logoProps: Prada.logo,
						details: {
							industry: "Retail / Fashion",
							"company size": "13,197 Employees",
							location: "Milan, Italy",
						},
					},
				},
			},
			{
				type: "BLOG_SECTION",
				body: {
					content: `
					# Solution

					After the beginning of the global pandemic, when online platforms became, in many circumstances, the only means of engaging with customers, The Prada Group embarked on a journey to create a unified online marketing in April 2020. The Prada Group sought complete insight into campaign conception, execution, and effectiveness across contemporary platforms with six brands (Prada, Miu Miu, Church's, Marchesi 1824, Car Shoe, and Fondazione Prada) as part of its network. With Unified-CX solution, the Italian luxury group achieved this swiftly and integrated its digital interaction plan. The online marketers at the Prada Group were able to acquire insight into effective promotional material as well as more accurately predict and attract specific people as a result.
					
					Benchmarking and Competitive Insights has given its analytics and Communications personnel the authority to examine pertinent location- and product-based info in order to acquire invaluable insight into the sustainability of brands and into significant events, such as Fashion Week. Most crucially, the Prada Group's employees were now capable to adequately manage developing issues and avoid possible brand upheavals thanks to this specific skill. In order to gain insightful information this year, its employees monitored 92 million mentions over 183 themes and over 70 unique displays.
					
					This makes it possible for sales representatives to offer their clients the best and most comprehensive online sales journey presently offered. Agents now interact with clients via Facebook, Instagram, and live chat. The quality of service that representatives offer is improved even further with conversational marketing capabilities because they can now close deals via the same social media platforms where they interact with clients. With the advent of Unified-CX solution platform, the Prada Group has given its clients a completely smooth integration, elevating their existing favourable encounter with group brands.
					`,
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "BLOG_SECTION",
				body: {
					content: `
					# Outcome

					For the upcoming generation of affluent customers, the Prada Group's top firms offer world-class customer interaction and service. To deliver a seamless experience with their clients, from communication and interaction to assistance and purchases, they connect with their clients in their chosen mediums.
		
					**The Prada Group benefits from this platform:**
					
					- Sell to, serve, and maintain customers on a single Unified-CX platform at a worldwide level
					
					- Compile important data about the well-being of the brand and events that are important to it. They monitored millions of mentions this year over almost 200 themes and more than 70 unique displays
					
					- Achieve complete visibility into the development, publication, and success of campaigns across contemporary mediums in order to more effectively target and connect with the right consumers and to obtain knowledge of powerful marketing materials.
					`,
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: {
						label: "YG Entertainment",
						subLabel: "Case Study:",
						href: PATHS.CASE_STUDIES.YG_ENTERTAINMENT,
					},
					nextPage: { label: "Honda", subLabel: "Case Study:", href: PATHS.CASE_STUDIES.HONDA },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
		],
	},
	[PATHS.CASE_STUDIES.HONDA]: {
		metaData: {
			title: "Honda Case Study",
			description: "What Honda did to unify customer service in the new age of online auto sales",

			openGraph: {
				title: "Blue.AI Case studies: Honda",
				description: "What Honda did to unify customer service in the new age of online auto sales",
			},
		},
		sections: [
			{
				type: "PAGE_HEADER_SECTION",
				body: {
					content: `
					# Honda

					## What Honda did to unify customer service in the new age of online auto sales
					`,
					breadcrumbPages: [{ label: "Case Studies", href: PATHS.CASE_STUDIES.HOME }, { label: "Honda" }],
					classNames: { innerClassName: "max-w-[620px]" },
				},
			},
			{
				type: "BLOG_SECTION",
				body: {
					content: `
					# Challenge

					Yoshiaki Inoue was confident that he would be able to reach agreements with a wide range of technology providers and hire people in order to meet the goals of the new website as he prepared to launch Honda's first on-line automobile sales website, Honda ON. Honda would first need to move even further with the fancier millenial and info-Z consumers, who anticipate complete responsiveness across all media. 
					According to Honda Chief Executive Inoue, it was expected that a large amount of technology and human resources would be required to implement large-scale communications initiatives and a unified technology solution for all Honda Customer Experience Management needs.
					
					When the site launched in October 2021, Honda joined other automakers from around the world in driving a change in the way cars are marketed. The online sales revolution, led by younger customers, is already occupying the minds of the auto industry. The global pandemic accelerated this shift as consumers quickly moved to buy products online, from laundry detergent to clothing to takeaways and even cars.
					
					Our goal is to engage genuinely with this younger generation of car purchasers, says Inoue of Honda ON.
					<br />
					**This required Lnoue to:** 

					- To maximize cost savings, combine various point solutions.

					- Streamline the platform where all client engagement data is stored.

					- Using enterprise-class governance and a uniform platform, establish brand voice consistency.
					`,
					blogCard: {
						customer: "Honda",
						imgProps: honda.logo1,
						logoProps: honda.logo2,
						details: {
							industry: "Automotive",
							"company-size": "211,374 employees",
							location: "Tokyo, Japan",
						},
					},
				},
			},
			{
				type: "BLOG_SECTION",
				body: {
					content: `
					# Solution

					Honda ON was on the road to success from the start. To integrate customer experience management and enter a modern era of digital car sales in 2021, Honda has introduced the Unified-CX solution. Honda's data science team used social listening capabilities for the first time. in 2016 to gather insights from the millions of relevant discussions taking place on social media platforms and uncover valuable brand-related insights. Then they added a display feature that was made available to users for dynamic and intelligent encounters with this data. Currently, more than 100 users in Honda's data analysis, public relations, and marketing departments are actively using current research to monitor it. You control more than 100 car models. They do this by assessing the business effectiveness of these models, comparing their usage and social media footage to that of the competition, and continuously focusing on contingencies before they develop and cause complications.

					**Honda benefits from the unified CX platform in the following ways:**

					- Use a single platform to effortlessly manage customer service offerings across multiple channels (phone and digital).

					- A unified system is used to plan, produce, and monitor marketing messages across multiple mediums.

					- Effectively track and address consumer engagement with automated workflows, intuitive moderation, and engagement dashboards made available to your departments.

					- Reduce brand threats by monitoring 30+ online and social feeds.
					`,
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "BLOG_SECTION",
				body: {
					content: `
					# Outcome

					As Honda ON gains traction, the business introduced speech functionality in Q3 of the year, expanding its capacity to interact with customers. The incorporation of voice allows employees to provide flawless, swiveling service by connecting with clients anytime and anywhere they choose to engage with Honda.
					
					According to Inoue, Honda On's long-term viability will be determined by its ability to provide high-quality service through social publishing and engagement. This implies that, according to Inoue, we actively participate in pertinent conversations while listening to the thoughts of people around the world. A complete omnichannel contact center is enabled by having a single process across platforms, including voice, social media, chat bots, and live chat.
					`,
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: { label: "Prada", subLabel: "Case Study:", href: PATHS.CASE_STUDIES.PRADA },
					nextPage: { label: "Norse", subLabel: "Case Study:", href: PATHS.CASE_STUDIES.NORSE },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
		],
	},
	[PATHS.CASE_STUDIES.NORSE]: {
		metaData: {
			title: "Norse Case Study",
			description: "How Norse quickly introduced an omnichannel customer service program",

			openGraph: {
				title: "Blue.AI Case studies: Norse",
				description: "How Norse quickly introduced an omnichannel customer service program",
			},
		},
		sections: [
			{
				type: "PAGE_HEADER_SECTION",
				body: {
					content: `
					# Norse

					## How Norse quickly introduced an omnichannel customer service program
					`,
					breadcrumbPages: [{ label: "Case Studies", href: PATHS.CASE_STUDIES.HOME }, { label: "Norse" }],
					classNames: { innerClassName: "max-w-[660px]" },
				},
			},
			{
				type: "BLOG_SECTION",
				body: {
					content: `
					# Challenge

					New airline Norse Atlantic Airways offers cheap long-haul fares, especially between the United States and European countries. Efficiency is Norse's business focus as a low-cost provider in the dynamic and unpredictable travel and tourism industries. Norse strives to control costs while providing unparalleled customer service and enabling more travel.
					
					The new airline Norse Atlantic Airways offers cheap long-haul fares, especially between the United States and European countries. Efficiency is Norse's business focus as a low-cost provider in the dynamic and unpredictable travel and tourism industries. customer service and enable more trips.
					
					It offers seamless omnichannel customer service, enabling users to contact customer service before, during, and after the flight through channels such as social media, voice, and email, and integrates seamlessly with Norse's online marketing solution.
					`,
					blogCard: {
						customer: "Norse Atlantic Airways",
						imgProps: norse.img,
						logoProps: norse.logo,
						details: {
							industry: "Travel",
							location: "Norway",
						},
					},
				},
			},
			{
				type: "BLOG_SECTION",
				body: {
					content: `
					# Solution

					Norse implemented an omnichannel customer service solution that saves time and is easy to use for employees with little or no training. Regardless of which channel the consumer used to communicate with Norse, customer service agents can respond to customer queries instantly through a single, consolidated channel inbox.
					"We chose this solution because it would give us a single tool to interact with and receive messages from clients," explains Hodges. that we would be capable of receiving those communications and, crucially, promptly replying to them on whatever contact medium is best for our clients.
					Hodge wants the majority of consumer complaints to be resolved via self-service, utilizing integrated skill sets, and through online communication, saving voice for trickier situations.
					
					Furthermore, employees have access to a knowledge base and are aided by prefabricated responses, which provide them with pre-written answers to frequently asked questions in a single click, saving them time by eliminating the need to create new responses from scratch.In addition, this makes it simple for the customer service, commercial, and advertising departments to work together and exchange insights, resulting in a seamless, integrated customer journey for Norse passengers.
					According to Hodges, we keep emphasizing that Norse is a people company; we remain in control of our consumers. We placed great importance on selecting a provider that would give us excellent customer service and make it easy for us to manage digital customer service and advertising on one integrated platform.
					Hodges says that with proactive communication skills, he and his staff have a deep understanding of what consumers are saying about Norse and what customers are saying about Norse. As a result, you can work with your team to develop a customer and support approach based on real-time data collected from the social media platforms where brand advocates are chatting.
					`,
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "BLOG_SECTION",
				body: {
					content: `
					# Outcome

					**Norse was capable of streamlining workflow and establish a structured procedure by:**

					- Implementing a cutting-edge customer care offering across all of its main customer interaction touchpoints in less than ten minutes.

					- Allowing staff to access all tickets on a single dashboard, including those from email and social media platforms.

					- Provide consumers and employees with a trusted self-service option through SEO-friendly capabilities to help them resolve issues faster. "I was able to get the program, access it over the internet, and start using it essentially right away as if I were an experienced user," he added, demonstrating how easy the application is to use. It was really easy and simple to use. Imagine it resembling an email inbox.
					`,
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: { label: "Honda", subLabel: "Case Study:", href: PATHS.CASE_STUDIES.HONDA },
					nextPage: { label: "Aida Cruises", subLabel: "Case Study:", href: PATHS.CASE_STUDIES.AIDA_CRUISES },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
		],
	},
	[PATHS.CASE_STUDIES.AIDA_CRUISES]: {
		metaData: {
			title: "AIDA Cruises Case Study",
			description: "How AIDA Cruises maintains love even in the face of adversity",

			openGraph: {
				title: "Blue.AI Case studies: AIDA Cruises",
				description: "How AIDA Cruises maintains love even in the face of adversity",
			},
		},
		sections: [
			{
				type: "PAGE_HEADER_SECTION",
				body: {
					content: `
					# AIDA Cruises

					## How AIDA Cruises maintains love even in the face of adversity
					`,
					breadcrumbPages: [{ label: "Case Studies", href: PATHS.CASE_STUDIES.HOME }, { label: "AIDA Cruises" }],
					classNames: { innerClassName: "max-w-[630px]" },
				},
			},
			{
				type: "BLOG_SECTION",
				body: {
					content: `
					# Challenge

					Kea Hansen became addicted to cruising after just one week on board the AIDA Nova in the Mediterranean. According to Hansen, "What you see on the internet and what you encounter on social media do not give it enough credit."
					
					As a member of the German cruise social media marketing team, Hansen took his mother on her maiden voyage in 2019 to celebrate their birthdays and experience AIDA Cruises' offerings. Although she manages numerous social media profiles and interacts with visitors, Hansen's day job is to photograph them as they share some of their most memorable moments. not yet experienced anything first-hand. She describes it as an emotional event.
					Hansen is not alone in feeling this way, either. AIDA has developed itself into what it describes as a "love brand," with much more than 84% name recognition in German-speaking nations. Both employees and customers have strong feelings for the company. A large number of AID followers have designated themselves into dozens of virtual communities, and AIDA has more than a million supporters who follow its authorized online profiles. As a result of the epidemic, all 14 AIDA ships were grounded for at least a few weeks, so the firm had to seek methods for keeping the romance digitally alive. Dream vacations had to be postponed as AIDA shifted its attention toward boosting customer involvement in an attempt to better comprehend customers' wants, issues, and overall thinking.
					
					Hansen advises keeping your beloved in mind at all times. And not only the positive tales AIDA has to pay great attention to its beloved ones in order to connect consumers and community members more intimately. Keep visitors up to date on developments in the cruise business, particularly at AIDA.
					`,
					blogCard: {
						customer: "AIDA",
						imgProps: aida.img,
						logoProps: aida.logo,
						details: {
							industry: "Travel & Hospitality",
							"company-size": "15,000 employees",
							location: "Rostock, Germany",
						},
					},
				},
			},
			{
				type: "BLOG_SECTION",
				body: {
					content: `
					# Solution

					In order to foster enduring interactions with visitors, AIDA first collaborated on their key emphasis of network development because they were a well-known and adored company with a sizable, vibrant internet community. The company's welcoming social environment and the omnichannel concept were used by the group to better control its web workflow content and to monitor incoming messages and mentions across online channels pertaining to a wide range of amenities on board AIDA's ships, including dining establishments, pubs, entertainment, ship operations, and guided tours.
					Since then, social listening, social publishing, and engagement have been used by AIDA's commercial team. With the assistance of computer-aided operations, the digital team can oversee brand posting and content throughout social media platforms, as well as respond promptly to customer involvement as required. They are able to accurately gauge client needs and community sentiment in real time thanks to social media monitoring. They can gain insightful information from AI-enriched datasets as they pay attention to pertinent issues on various social media platforms. The crew closely monitors guest feedback and digital chats for possible pitfalls, such as an accident on deck or during a hiking expedition, for each ship that is currently at sea.
					`,
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "BLOG_SECTION",
				body: {
					content: `
					# Outcome

					Throughout the epidemic, it was even more important to be able to respond to and interact with the AIDA community residents. The organization attempted to ensure that its service users were satisfied. Even if they weren't cruising, they felt recognized and acknowledged; their treasured ships were moored, and vacations were postponed.
					AIDA stood in a better position than others to withstand the slump in tourism that began in early 2020. Because of the involvement capacity it had previously established, AIDA was able to maintain contact with its clients and residents.They were able to keep track of COVID-related information and soothe visitors' worries when yachts were halted—and when ships started cruising again under new laws—with the aid of dashboards, social listening, notifications, and an enhanced labeling mechanism.
					The majority of consumer reviews have historically been favorable, but according to Hansen, there was a substantial change throughout most of the pandemic. Although people continued to adore AIDA, they were also concerned about the COVID-19 guidelines for testing and immunizations, and daily life on AIDA's cruise lines' social media platforms saw a substantial rise in service-related subjects.
					`,
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: { label: "Norse", subLabel: "Case Study:", href: PATHS.CASE_STUDIES.NORSE },
					nextPage: { label: "Company", href: PATHS.COMPANY },
					classNames: { sectionClassName: BLUE_BG },
				},
			},
		],
	},
	[PATHS.COMPANY]: {
		metaData: {
			title: "Company",
			description:
				"Using the best in AI and human intelligence, Blue.ai was built with the goal of automating customer and employee interactions across channels to deliver on-demand fulfillment. Simply put, our goal is to improve every organization's business-to-consumer interactions by making them real-time, more intuitive, and more personalized.",
			openGraph: {
				title: "Blue.AI Company: The Who, What, and Where?",
				description:
					"Using the best in AI and human intelligence, Blue.ai was built with the goal of automating customer and employee interactions across channels to deliver on-demand fulfillment. Simply put, our goal is to improve every organization's business-to-consumer interactions by making them real-time, more intuitive, and more personalized.",
			},
		},
		sections: [
			{
				type: "PAGE_HEADER_SECTION",
				body: {
					content: `
					# About Us
		
					Using the best in AI and human intelligence, Blue.ai was built with the goal of automating customer and employee interactions across channels to deliver on-demand fulfillment. Simply put, our goal is to improve every organization's business-to-consumer interactions by making them real-time, more intuitive, and more personalized.
					`,
					classNames: {
						innerClassName: "max-w-[820px]",
						// sx: {
						// 	"span.md-text": {
						// 		fontSize: 20,
						// 		lineHeight: "26px",
						// 	},
						// },
					},
				},
			},
			{
				type: "MAP_SECTION",
				header: {
					content: `# Where we are?`,
				},
				body: {
					locations: [
						{
							countryTitle: "Cyprus (Headquarter)",
							value: "cyprus",
							address: "KALYMNOU 1, Q MERITO BUILDING, AGIOS NIKOLAOS, KAMARES 6037, LARNACA, CYPRUS",
							href: "https://goo.gl/maps/r7N2Q3Qx7d1rrugU7",
						},
						{
							countryTitle: "United Arab Emirates",
							value: "uae",
							address: "Business Bay, The Exchange Tower, Floor 15 , DUBAI",
							href: "https://goo.gl/maps/QNBUVzKLsKqr7MWVA",
						},
						{
							countryTitle: "Lebanon",
							value: "lebanon",
							address: "Mint El Hoson-Omar Daouk Street- Saint Charles City Center- Floor7 - Beirut.",
							href: "https://goo.gl/maps/gY8uAkjfjJmokx9d9",
						},
					],
					classNames: { sectionClassName: BLUE_BG },
				},
			},
			{
				type: "TOGGLE_PAGE_SECTION",
				body: {
					previousPage: { label: "Case Studies", href: PATHS.CASE_STUDIES.HOME },
					nextPage: { label: "Contact Us!", href: PATHS.CONTACT_US },
				},
			},
		],
	},
	[PATHS.CONTACT_US]: {
		metaData: {
			title: "Contact Us",
			description:
				"Reach us now for any question, inquiry, or even a though you have in mind. We'll get in touch quickly at your ease and comfort!",

			openGraph: {
				title: "Get In Touch!",
				description:
					"Reach us now for any question, inquiry, or even a though you have in mind. We'll get in touch quickly at your ease and comfort!",
			},
		},
		sections: [
			{
				type: "CONTACT_FORM_SECTION",
				header: {
					content: `
					# Contact Us
	
					We'd love to here from you
					`,
					// sx: {
					// 	".md-title-1": {
					// 		fontWeight: 900,
					// 		fontSize: 35,
					// 	},
					// 	".md-text": {
					// 		fontSize: 28,
					// 		lineHeight: "35px",
					// 	},
					// },
				},
				body: {
					classNames: {
						// sectionClassName: {
						// 	// background: `#F6FBFD url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1529.913 1705.315"><defs><clipPath id="a"><path fill="%236abdea" d="M242.262 572.061c0 181.842 147.941 329.8 329.8 329.8 181.936 0 329.878-147.957 329.878-329.8 0-181.858-147.941-329.8-329.878-329.8-181.858 0-329.8 147.941-329.8 329.8M0 572.061C0 256.615 256.615 0 572.061 0S1144.2 256.615 1144.2 572.061c0 315.43-256.694 572.061-572.139 572.061S0 887.49 0 572.061" data-name="Path 1772"/></clipPath><clipPath id="b"><path fill="%236abdea" d="M149.641 299.314a149.657 149.657 0 1 1 149.673-149.642 149.644 149.644 0 0 1-149.673 149.642Z" data-name="Path 1773"/></clipPath></defs><g data-name="Group 23572" opacity=".06"><g data-name="Group 23534"><g clip-path="url(%23a)" data-name="Group 23533" transform="rotate(116 553.465 816.456)"><path fill="%236abdea" d="M219.477-450.512 1594.69 219.503l-670 1375.18L-450.521 924.67z" data-name="Rectangle 5381"/></g></g><g data-name="Group 23536"><g clip-path="url(%23b)" data-name="Group 23535" transform="rotate(116 231.973 236.175)"><path fill="%236abdea" d="M57.413-117.855 417.166 57.419 241.89 417.172-117.86 241.898z" data-name="Rectangle 5382"/></g></g></g></svg>') no-repeat 50%`,
						// 	// backgroundSize: "80%",
						// 	// backgroundPositionY: 40,
						// },
						innerClassName: "pb-[80px]",
					},
				},
			},
		],
	},
}
