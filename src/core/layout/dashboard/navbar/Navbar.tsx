import React, { Fragment, useState } from "react";

import {
	Text,
	Divider,
	ScrollArea,
	Navbar as NavBarMantine,
} from "@mantine/core";

import { useMediaQuery } from "@mantine/hooks";

import { LinksGroup } from "core/components";
import navigate       from "routes/navigate";
import styles         from "./styles";

const SM_SIDEBAR_WITH   = 85;
const BASE_SIDEBAR_WITH = 400;

const Navbar = ({ opened = false }) =>  {
	const { classes } = styles();

	const [active, setActive] = useState("");
	const [smSidebarWidth, setSmSidebarWidth] = useState(SM_SIDEBAR_WITH);

	const smMediaQuery = useMediaQuery("(max-width: 992px)");

	const toggleActive = (key : string) => setActive(key);

	const isHoveredSidebar = smSidebarWidth === BASE_SIDEBAR_WITH;

	const links = navigate.map((item, index) => {
		const isDivider = item.divider !== undefined;
		return (
			<Fragment key={`${index}-${item?.label ?? item.divider}`} >
				{
					isDivider ?
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
						:
						<LinksGroup
							{...item}
							active={active}
							toggleActive={toggleActive}
							isHoveredSidebar={isHoveredSidebar}
						/>
				}
			</Fragment>
		);
	});

	return (
		<NavBarMantine
			p="md"
			hidden={!opened}
			hiddenBreakpoint="sm"
			width={{ xs : BASE_SIDEBAR_WITH, sm : smSidebarWidth, md : BASE_SIDEBAR_WITH, lg : BASE_SIDEBAR_WITH }}
		>
			<NavBarMantine.Section
				grow
				component={ScrollArea}
				onMouseLeave={() => setSmSidebarWidth(SM_SIDEBAR_WITH)}
				onMouseEnter={() => setSmSidebarWidth(BASE_SIDEBAR_WITH)}
			>
				<div className={classes.linksInner}>{links}</div>
			</NavBarMantine.Section>
		</NavBarMantine>

	);
};
export default React.memo(Navbar);
