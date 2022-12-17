import React from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { Container } from "./Components/Container"
import Button from "./Components/Button"
import { Header } from "./Components/Header"
import { Nav } from "./Components/Nav" // import Logo from "./Components/Logo"
import Image from "mui-image"

function App() {
	let theme = createTheme({
		palette: { primary: { main: "#ADD8E6" }, secondary: { main: "#CBC3E3" } },
	})
	return (
		<ThemeProvider theme={theme}>
			<>
				{/* why won't thinks diplay if i try to embed them in the below Header */}
				<Header></Header>
				<Container>
					heck
					<Nav>
						{/* q4e idk how to load an image :*( */}
						<Image src="./Components/logo.svg" />
						<Button />
					</Nav>
				</Container>
			</>
		</ThemeProvider>
	)
}

export default App
