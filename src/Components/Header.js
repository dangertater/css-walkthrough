import React from "react"
import { styled } from "@mui/material/styles"
import { useTheme } from "@mui/material/styles"

let TestHeader = styled("header")`
	background-color: ${({ theme, backgroundColor = theme.colors.header }) => {
		return backgroundColor
	}};
`

export function Header() {
	return <TestHeader backgroundColor="red">asdf</TestHeader>
}
