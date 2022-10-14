import {
	Burger,
	MediaQuery,
	useMantineTheme,
	Header as HeaderMantine,
} from "@mantine/core";

import { Brand, ToggleTheme } from "core/components";
import styles                 from "./styles";

interface IHeader {
    opened : boolean;
    setOpened :  React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ opened, setOpened } : IHeader) {
	const { classes } = styles();
	const theme = useMantineTheme();

	return (
		<HeaderMantine height={70} className={classes.header}>
			<div className={classes.inner}>
				<div className={classes.brand}>
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
				<ToggleTheme />
			</div>
		</HeaderMantine>
	);
}
