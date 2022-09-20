import { Navbar as NavBarMantine, ScrollArea } from "@mantine/core";
//core
import { Brand, MainLinks, User } from "core/components";

export default function Navbar({ opened = false }) {
	return (
		<NavBarMantine
			p="md"
			hidden={!opened}
			hiddenBreakpoint="sm"
			width={{ sm : 200, lg : 300 }}
		>
			<NavBarMantine.Section mt="xs">
				<Brand />
			</NavBarMantine.Section>
			<NavBarMantine.Section grow component={ScrollArea} mt="md">
				<MainLinks />
			</NavBarMantine.Section>
			<NavBarMantine.Section>
				<User />
			</NavBarMantine.Section>
		</NavBarMantine>
	);
}
