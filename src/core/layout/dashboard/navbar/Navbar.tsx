import { useState } from "react";

import { Navbar as NavBarMantine, ScrollArea, Text, Divider } from "@mantine/core";
import { useMediaQuery }                                      from "@mantine/hooks";

import { LinksGroup } from "core/components";
import navigate       from "routes/navigate";
import styles         from "./styles";

const BASE_SIDEBAR_WITH = 300;
const SM_SIDEBAR_WITH   = 85;

export default function Navbar({ opened = false }) {
	const { classes } = styles();

	const smMediaQuery = useMediaQuery("(max-width: 992px)");

	const [active, setActive] = useState("");



	const [smSidebarWidth, setSmSidebarWidth] = useState(SM_SIDEBAR_WITH);

	const toggleActive = (key : string) => setActive(key);

	const isHoveredSidebar = smSidebarWidth === BASE_SIDEBAR_WITH;

	const links = navigate.map((item, index) => {
		return (
			<div
				key={`${index}-${item?.label ?? item.divider}`}
				onMouseLeave={() => setSmSidebarWidth(SM_SIDEBAR_WITH)}
				onMouseEnter={() => setSmSidebarWidth(BASE_SIDEBAR_WITH)}
			>
				{
					item.divider === undefined?
						<LinksGroup
							{...item}
							active={active}
							toggleActive={toggleActive}
							isHoveredSidebar={isHoveredSidebar}
						/>
						:
						<>
							{
								!smMediaQuery ?
									<Text className={ classes.divider }>{ item.divider }</Text>
									:
									isHoveredSidebar ?
										<Text className={ classes.divider }>{ item.divider }</Text>
										:
										<Divider my="sm" />
							}
						</>

				}
			</div>
		);
	});


	return (
		<NavBarMantine
			p="md"
			hidden={!opened}
			hiddenBreakpoint="sm"
			width={{ xs : BASE_SIDEBAR_WITH, sm : smSidebarWidth, md : BASE_SIDEBAR_WITH, lg : BASE_SIDEBAR_WITH }}
		>
			<NavBarMantine.Section grow component={ScrollArea}>
				<div className={classes.linksInner}>{links}</div>
			</NavBarMantine.Section>
		</NavBarMantine>
	);
}
