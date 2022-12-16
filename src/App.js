import React from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { Container } from "./Components/Container"
import Button from "./Components/Button"
import { Header } from "./Components/Header"

function App() {
	let theme = createTheme({
		palette: { primary: { main: "#ADD8E6" }, secondary: { main: "#CBC3E3" } },
	})
	return (
		<ThemeProvider theme={theme}>
			<>
				<Header></Header>
				<Container>heck</Container>
			</>
		</ThemeProvider>
	)
}

export default App
