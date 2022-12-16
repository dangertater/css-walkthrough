import React from "react"
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles"
import { Container } from "./Components/Container"
import { Header } from "./Components/Header"

function App() {
	let theme = createTheme({
		colors: { header: "red", body: "blue", footer: "green" },
	})

	return (
		<ThemeProvider theme={theme}>
			<>
				<Header>
					<h1>heack</h1>
				</Header>
				<Container>heck</Container>
			</>
		</ThemeProvider>
	)
}

export default App
