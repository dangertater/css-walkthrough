import React from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { Container } from "./Components/Container"
import Button from "./Components/Button"
import { Header } from "./Components/Header"
import Nav from "./Components/Nav"
// import Logo from "./Components/Logo"
import Image from "material-ui-image"

function App() {
	let theme = createTheme({
		palette: { primary: { main: "#ADD8E6" }, secondary: { main: "#CBC3E3" } },
	})
	return (
		<ThemeProvider theme={theme}>
			<>
				<Header></Header>
				<Image></Image>
				<Container>
					heck
					<Nav>
						<Button />
					</Nav>
				</Container>
				<Button></Button>
			</>
		</ThemeProvider>
	)
}

export default App
