import React from "react"
import { styled } from "@mui/material/styles"
import { useTheme } from "@mui/material/styles"

export const Header = styled("header")`
	background-color: ${({ theme }) => {
		return theme.color
	}};
	padding: 40px 0;
`
