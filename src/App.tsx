import { useState }                                          from "react";
import { BrowserRouter }                                     from "react-router-dom";
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";

import Router    from "./routes";
import { theme } from "./theme";

export default function App() {

	const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");

	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

	return (
		<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
			<MantineProvider theme={{ ...theme, colorScheme}} withGlobalStyles withNormalizeCSS>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</MantineProvider>
		</ColorSchemeProvider>
	);
}
