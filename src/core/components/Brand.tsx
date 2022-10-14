import { Group, useMantineColorScheme, Box } from "@mantine/core";
// core
import { Logo } from "core/components";


export default function Brand() {
	const { colorScheme } = useMantineColorScheme();
	return (
		<Box>
			<Group position="apart">
				<Logo colorScheme={colorScheme} />
			</Group>
		</Box>
	);
}
