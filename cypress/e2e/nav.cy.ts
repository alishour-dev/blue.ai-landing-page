describe("Navigation", () => {
	// it("Navigate to home page", () => {
	// 	cy.visit("http://localhost:3000")
	// })

	// Products Pages
	it("Should navigate Products: Campaign Management System page", () => {
		cy.visit("http://localhost:3000/")

		// cy.get("[data-dropdown-target='products']").click()

		cy.get('a[href*="products/campaign-management-system"]').click({ multiple: true })

		cy.url().should("include", "/products/campaign-management-system")
	})
	// it("Should navigate Products: Flow builder page", () => {
	// 	cy.visit("http://localhost:3000/")

	// 	cy.get("[data-dropdown-target='products']").click()

	// 	cy.get('a[href*="products/flow-builder"]').click({ multiple: true })

	// 	cy.url().should("include", "/products/flow-builder")
	// })
	// it("Should navigate Products: Adaptive NLP page", () => {
	// 	cy.visit("http://localhost:3000/")

	// 	cy.get("[data-dropdown-target='products']").click()

	// 	cy.get('a[href*="products/adaptive-nlp"]').click({ multiple: true })

	// 	cy.url().should("include", "/products/adaptive-nlp")
	// })
	// it("Should navigate Products: API's page", () => {
	// 	cy.visit("http://localhost:3000/")

	// 	cy.get("[data-dropdown-target='products']").click()

	// 	cy.get('a[href*="products/api"]').click({ multiple: true })

	// 	cy.url().should("include", "/products/api")
	// })
	// it("Should navigate Products: Insight Engine page", () => {
	// 	cy.visit("http://localhost:3000/")

	// 	cy.get("[data-dropdown-target='products']").click()

	// 	cy.get('a[href*="products/insight-engine"]').click({ multiple: true })

	// 	cy.url().should("include", "/products/insight-engine")
	// })
	// it("Should navigate Products: Livechat page", () => {
	// 	cy.visit("http://localhost:3000/")

	// 	cy.get("[data-dropdown-target='products']").click()

	// 	cy.get('a[href*="products/live-chat"]').click({ multiple: true })

	// 	cy.url().should("include", "/products/live-chat")
	// })
	// it("Should navigate Products: CRM page", () => {
	// 	cy.visit("http://localhost:3000/")

	// 	cy.get("[data-dropdown-target='products']").click()

	// 	cy.get('a[href*="products/crm"]').click({ multiple: true })

	// 	cy.url().should("include", "/products/crm")
	// })
	// it("Should navigate Products: Payment Gateway page", () => {
	// 	cy.visit("http://localhost:3000/")

	// 	cy.get("[data-dropdown-target='products']").click()

	// 	cy.get('a[href*="products/payment-gateway"]').click({ multiple: true })

	// 	cy.url().should("include", "/products/payment-gateway")
	// })
	// it("Should navigate Products: Integrations page", () => {
	// 	cy.visit("http://localhost:3000/")

	// 	cy.get("[data-dropdown-target='products']").click()

	// 	cy.get('a[href*="products/integrations"]').click({ multiple: true })

	// 	cy.url().should("include", "/products/integrations")
	// })
	// it("Should navigate Products: Ticketing System page", () => {
	// 	cy.visit("http://localhost:3000/")

	// 	cy.get("[data-dropdown-target='products']").click()

	// 	cy.get('a[href*="products/ticketing-system"]').click({ multiple: true })

	// 	cy.url().should("include", "/products/ticketing-system")
	// })
	// it("Should navigate Products: Billing System page", () => {
	// 	cy.visit("http://localhost:3000/")

	// 	cy.get("[data-dropdown-target='products']").click()

	// 	cy.get('a[href*="products/billing-system"]').click({ multiple: true })

	// 	cy.url().should("include", "/products/billing-system")
	// })

	// // Solutions Pages
	// it("Should navigate Solutions: Customer Support Automation page", () => {
	// 	cy.visit("http://localhost:3000/")

	// 	cy.get("[data-dropdown-target='solutions']").click()

	// 	cy.get('a[href*="solutions/customer-support-automation"]').click({ multiple: true })

	// 	cy.url().should("include", "/solutions/customer-support-automation")
	// })
	// it("Should navigate Solutions: Text Automation page", () => {
	// 	cy.visit("http://localhost:3000/")

	// 	cy.get("[data-dropdown-target='solutions']").click()

	// 	cy.get('a[href*="solutions/text-automation"]').click({ multiple: true })

	// 	cy.url().should("include", "/solutions/text-automation")
	// })
	// it("Should navigate Solutions: Dashboard And Analytics page", () => {
	// 	cy.visit("http://localhost:3000/")

	// 	cy.get("[data-dropdown-target='solutions']").click()

	// 	cy.get('a[href*="solutions/dashboard-and-analytics"]').click()

	// 	cy.url().should("include", "/solutions/dashboard-and-analytics")
	// })
	// it("Should navigate Solutions: Artificial Intelligence page", () => {
	// 	cy.visit("http://localhost:3000/")

	// 	cy.get("[data-dropdown-target='solutions']").click()

	// 	cy.get('a[href*="solutions/artificial-intelligence"]').click({ multiple: true })

	// 	cy.url().should("include", "/solutions/artificial-intelligence")
	// })

	// // Industries
	// it("Should navigate Industries: Ecommerce page", () => {
	// 	cy.visit("http://localhost:3000/")

	// 	cy.get("[data-dropdown-target='industries']").click()

	// 	cy.get('a[href*="industries/ecommerce"]').click({ multiple: true })

	// 	cy.url().should("include", "/industries/ecommerce")
	// })
	// it("Should navigate Industries: Customized page", () => {
	// 	cy.visit("http://localhost:3000/")

	// 	cy.get("[data-dropdown-target='industries']").click()

	// 	cy.get('a[href*="industries/customized"]').click({ multiple: true })

	// 	cy.url().should("include", "/industries/customized")
	// })
	// it("Should navigate Industries: Logistics page", () => {
	// 	cy.visit("http://localhost:3000/")

	// 	cy.get("[data-dropdown-target='industries']").click()

	// 	cy.get('a[href*="industries/logistics"]').click({ multiple: true })

	// 	cy.url().should("include", "/industries/logistics")
	// })
	// it("Should navigate Industries: Healthcare page", () => {
	// 	cy.visit("http://localhost:3000/")

	// 	cy.get("[data-dropdown-target='industries']").click()

	// 	cy.get('a[href*="industries/healthcare"]').click({ multiple: true })

	// 	cy.url().should("include", "/industries/healthcare")
	// })
	// it("Should navigate Industries: Financial Services page", () => {
	// 	cy.visit("http://localhost:3000/")

	// 	cy.get("[data-dropdown-target='industries']").click()

	// 	cy.get('a[href*="industries/financial-services"]').click({ multiple: true })

	// 	cy.url().should("include", "/industries/financial-services")
	// })
	// it("Should navigate Industries: Insurance page", () => {
	// 	cy.visit("http://localhost:3000/")

	// 	cy.get("[data-dropdown-target='industries']").click()

	// 	cy.get('a[href*="industries/insurance"]').click({ multiple: true })

	// 	cy.url().should("include", "/industries/insurance")
	// })
	// it("Should navigate Industries: Sales And Marketing page", () => {
	// 	cy.visit("http://localhost:3000/")

	// 	cy.get("[data-dropdown-target='industries']").click()

	// 	cy.get('a[href*="industries/sales-and-marketing"]').click({ multiple: true })

	// 	cy.url().should("include", "/industries/sales-and-marketing")
	// })
	// it("Should navigate Industries: Automotive page", () => {
	// 	cy.visit("http://localhost:3000/")

	// 	cy.get("[data-dropdown-target='industries']").click()

	// 	cy.get('a[href*="industries/automotive"]').click({ multiple: true })

	// 	cy.url().should("include", "/industries/automotive")
	// })
	// it("Should navigate Industries: Real Estate page", () => {
	// 	cy.visit("http://localhost:3000/")

	// 	cy.get("[data-dropdown-target='industries']").click()

	// 	cy.get('a[href*="industries/real-estate"]').click({ multiple: true })

	// 	cy.url().should("include", "/industries/real-estate")
	// })
	// it("Should navigate Industries: food And Beverage page", () => {
	// 	cy.visit("http://localhost:3000/")

	// 	cy.get("[data-dropdown-target='industries']").click()

	// 	cy.get('a[href*="industries/food-and-beverage"]').click({ multiple: true })

	// 	cy.url().should("include", "/industries/food-and-beverage")
	// })

	// // Case Studies
	// it("Should navigate Case Studies page", () => {
	// 	cy.visit("http://localhost:3000/")

	// 	cy.get('a[href="/case-studies"]').click()

	// 	cy.url().should("include", "/case-studies")
	// })
	// it("Should navigate Case Studies: Estafeta page", () => {
	// 	cy.visit("http://localhost:3000/case-studies")

	// 	cy.get('a[href*="case-studies/estafeta"]').click({ multiple: true })

	// 	cy.url().should("include", "/case-studies/estafeta")
	// })
	// it("Should navigate Case Studies: Wells Fargo page", () => {
	// 	cy.visit("http://localhost:3000/case-studies")

	// 	cy.get('a[href*="case-studies/wells-fargo"]').click({ multiple: true })

	// 	cy.url().should("include", "/case-studies/wells-fargo")
	// })
	// it("Should navigate Case Studies: YG Entertainment page", () => {
	// 	cy.visit("http://localhost:3000/case-studies")

	// 	cy.get('a[href*="case-studies/yg-entertainment"]').click({ multiple: true })

	// 	cy.url().should("include", "/case-studies/yg-entertainment")
	// })
	// it("Should navigate Case Studies: YG Entertainment page", () => {
	// 	cy.visit("http://localhost:3000/case-studies")

	// 	cy.get('a[href*="case-studies/yg-entertainment"]').click({ multiple: true })

	// 	cy.url().should("include", "/case-studies/yg-entertainment")
	// })
	// it("Should navigate Case Studies: Prada page", () => {
	// 	cy.visit("http://localhost:3000/case-studies")

	// 	cy.get('a[href*="case-studies/prada"]').click({ multiple: true })

	// 	cy.url().should("include", "/case-studies/prada")
	// })
	// it("Should navigate Case Studies: Honda page", () => {
	// 	cy.visit("http://localhost:3000/case-studies")

	// 	cy.get('a[href*="case-studies/honda"]').click({ multiple: true })

	// 	cy.url().should("include", "/case-studies/honda")
	// })
	// it("Should navigate Case Studies: Norse page", () => {
	// 	cy.visit("http://localhost:3000/case-studies")

	// 	cy.get('a[href*="case-studies/norse"]').click({ multiple: true })

	// 	cy.url().should("include", "/case-studies/norse")
	// })
	// it("Should navigate Case Studies: Aida Cruises page", () => {
	// 	cy.visit("http://localhost:3000/case-studies")

	// 	cy.get('a[href*="case-studies/aida-cruises"]').click({ multiple: true })

	// 	cy.url().should("include", "/case-studies/aida-cruises")
	// })

	// it("Should navigate Unified Platform page", () => {
	// 	cy.visit("http://localhost:3000/")

	// 	cy.get('a[href*="unified-platform"]').click({ multiple: true })

	// 	cy.url().should("include", "/unified-platform")
	// })
	// it("Should navigate to Company page", () => {
	// 	cy.visit("http://localhost:3000/")

	// 	cy.get("[data-dropdown-target='company']").click()

	// 	cy.get('a[href*="company"]').each((link) => {
	// 		const href = link.attr("href")

	// 		// Assert that the href contains "/company" and does not include "www.linkedin.com"
	// 		if (href?.includes("/company") && !href.includes("www.linkedin.com")) {
	// 			// Click the link
	// 			cy.wrap(link).click()
	// 		}
	// 	})

	// 	cy.url().should("include", "/company")
	// })
	// it("Should navigate to Company page, Where we are Section", () => {
	// 	cy.visit("http://localhost:3000/")

	// 	cy.get("[data-dropdown-target='company']").click()

	// 	cy.get('a[href*="company#where-we-are"]').click()

	// 	cy.url().should("include", "/company#where-we-are")
	// })

	// it("Should navigate to contact us page", () => {
	// 	cy.visit("http://localhost:3000/")

	// 	cy.get('a[href*="contact-us"]').click({ multiple: true })

	// 	cy.url().should("include", "/contact-us")
	// })
})

export {}
