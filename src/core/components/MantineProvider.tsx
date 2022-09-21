import { ReactElement, useState } from "react";
//mantine
import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProviderProps,
	MantineProvider as MantineProviderCore,
} from "@mantine/core";

interface IMantineProvider extends MantineProviderProps {
    children: ReactElement | ReactElement[];
}

const MantineProvider = ({ children, theme } : IMantineProvider) => {
	const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");

	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

	return (
		<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
			<MantineProviderCore theme={{ ...theme, colorScheme}} withGlobalStyles withNormalizeCSS>
				{children}
			</MantineProviderCore>
		</ColorSchemeProvider>
	);
};

export default MantineProvider;
