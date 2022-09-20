import {
	Text,
	Burger,
	MediaQuery,
	useMantineTheme,
	Header as HeaderMantine,
} from "@mantine/core";

interface Header {
    opened : boolean;
    setOpened :  React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ opened, setOpened } : Header) {

	const theme = useMantineTheme();

	return (
		<HeaderMantine height={70} p="md">
			<div style={{ display : "flex", alignItems : "center", height : "100%" }}>
				<MediaQuery largerThan="sm" styles={{ display : "none" }}>
					<Burger
						opened={opened}
						onClick={() => setOpened((o) => !o)}
						size="sm"
						color={theme.colors.gray[6]}
						mr="xl"
					/>
				</MediaQuery>

				<Text>Application header</Text>
			</div>
		</HeaderMantine>
	);
}
