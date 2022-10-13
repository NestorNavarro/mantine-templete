import { IconSun, IconMoonStars }                        from "@tabler/icons";
import { Group, ActionIcon, useMantineColorScheme, Box } from "@mantine/core";
// core
import { Logo } from "core/components";

export default function Brand() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	return (
		<Box>
			<Group position="apart" mt="xs">
				<Logo colorScheme={colorScheme} />
				<ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
					{colorScheme === "dark" ? <IconSun size={16} /> : <IconMoonStars size={16} />}
				</ActionIcon>
			</Group>
		</Box>
	);
}
