import React from "react"
import { styled } from "@mui/material/styles"

export const Logo = styled("img")`
	@media (max-width: ${({ theme }) => theme.mobile}) {
		margin-bottom: 40px;
	}
`
