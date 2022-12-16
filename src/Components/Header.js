import React from "react"
import { useTheme, styled } from "@mui/material/styles"

let HeaderStyled = styled("div")`
	background-color: ${(props) => {
		return props.theme.palette.primary.main
	}};
`

export function Header() {
	return <HeaderStyled>new heck</HeaderStyled>
}
