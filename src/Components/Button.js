import React from "react"
import MuiButton from "@mui/material/Button"
import { useTheme } from "@mui/material/styles"

export default function Button(props) {
	const theme = useTheme()
	console.log("theme", theme.palette.primary.main)
	return (
		<MuiButton
			variant="contained"
			color="primary"
			sx={{ "&:hover": { backgroundColor: "red" } }}
		>
			Try it for free
		</MuiButton>
	)
}
