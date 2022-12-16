import React from "react"
import { ThemeProvider } from "@mui/material"
import { Container } from "./Components/Container"
import { Header } from "./Components/Header"
import { useTheme } from "@mui/material/styles"

let theme = { colors: "red" }
// { header: "red", body: "blue", footer: "green" }
function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<Header>
					<h1>heack</h1>
				</Header>{" "}
				<Container>heck</Container>
			</>
		</ThemeProvider>
	)
}

export default App
