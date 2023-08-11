import React from "react"

import { Accordion } from "./Accordion"

describe("<Accordion />", () => {
	it("renders", () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<Accordion label='My Accordion' />)
	})
})
