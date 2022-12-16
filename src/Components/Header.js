import React from "react"
import { styled } from "@mui/material/styles"
import { useTheme } from "@mui/material/styles"

export const Header1 = styled("div")`
	background-color: ${(props) => {
		return props.backgroundColor
	}};
`

export function Header() {
	const theme = useTheme()
	console.log(theme)
	return <Header1 backgroundColor={theme.palette.primary.main}>asdf</Header1>
}
