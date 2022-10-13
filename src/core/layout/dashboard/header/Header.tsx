import {
	Burger,
	MediaQuery,
	useMantineTheme,
	Header as HeaderMantine,
} from "@mantine/core";

import { Brand } from "core/components";

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
						mr="xl"
						size="sm"
						opened={opened}
						color={theme.colors.gray[6]}
						onClick={() => setOpened((o) => !o)}
					/>
				</MediaQuery>

				<Brand />

			</div>
		</HeaderMantine>
	);
}
