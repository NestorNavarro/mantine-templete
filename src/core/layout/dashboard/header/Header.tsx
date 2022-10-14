import {
	Burger,
	TextInput,
	MediaQuery,
	useMantineTheme,
	Header as HeaderMantine,
} from "@mantine/core";

import { IconSearch } from "@tabler/icons";

import { Brand, Notifications, ToggleTheme, UserDropDown } from "core/components";
import styles                                              from "./styles";
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

				<div id="brand" className={classes.brand}>
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

				<div className={classes.tools}>
					<div className={classes.searchContainer}>
						<TextInput
							className={classes.search}
							icon={<IconSearch size="12px" />}
							variant="filled"
							placeholder={"Buscar..."}
						/>
					</div>
					<div  className={classes.rightTools}>
						<ToggleTheme />
						<Notifications />
						<UserDropDown />
					</div>
				</div>
			</div>
		</HeaderMantine>
	);
}
