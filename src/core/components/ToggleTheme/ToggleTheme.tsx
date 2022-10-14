import { IconSun, IconMoonStars }            from "@tabler/icons";
import { useMantineColorScheme, ActionIcon } from "@mantine/core";

const ToggleTheme = () => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	return (
		<ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
			{colorScheme === "dark" ? <IconSun size={16} /> : <IconMoonStars size={16} />}
		</ActionIcon>
	);
};

export default ToggleTheme;
