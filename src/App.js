import React from "react"
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles"
import { Container } from "./Components/Container"
import { Header, Header1 } from "./Components/Header"
import Button from "./Components/Button"

function App() {
	let theme = createTheme({
		palette: { primary: { main: "#FF0000" }, secondary: { main: "#800080" } },
	})
	let backgroundColor = "green"
	return (
		<ThemeProvider theme={theme}>
			<>
				<Header>
					<h1>heack</h1>
				</Header>
				<Container>heck</Container>
				<Button></Button>
				<Button></Button>
				<Header1 backgroundColor={backgroundColor}>adsf</Header1>
			</>
		</ThemeProvider>
	)
}

export default App
