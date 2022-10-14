import React, { Fragment, useEffect, useState } from "react";

import {
	ScrollArea,
	Navbar as NavBarMantine,
	Transition,
} from "@mantine/core";
//hooks
import { useMediaQuery } from "@mantine/hooks";

import navigate                               from "routes/navigate";
import { NavLinks, NavDivider }               from "core/components";
import NavBarIconLinks                        from "core/components/NavBarIconLinks";
import { BASE_SIDEBAR_WITH, SM_SIDEBAR_WITH } from "./NavbarConstants";
import styles                                 from "./styles";

interface INavbar {
	opened : boolean;
}

const Navbar = ({ opened } : INavbar) =>  {
	const { classes, theme } = styles();

	const [active, setActive] = useState("");
	const [smSidebarWidth, setSmSidebarWidth] = useState(BASE_SIDEBAR_WITH);


	const toggleActive = (key : string) => setActive(key);

	const isHoveredSidebar = smSidebarWidth === BASE_SIDEBAR_WITH;

	const iconsLinks = navigate.map((item, index) => {
		const isDivider = item.divider !== undefined;

		return (
			<Fragment key={`${index}-${item?.label ?? item.divider}`} >
				<>
					{isDivider ?
						<NavDivider divider={item.divider} isHoveredSidebar={isHoveredSidebar} />
						:
						item.divider === undefined &&
						<NavBarIconLinks
							to={item?.to ?? ""}
							icon={item?.icon}
							active={active === item.label}
							onClick={() => toggleActive(item.label)}
						/>
					}
				</>
			</Fragment>
		);
	});

	const links = navigate.map((item, index) => {
		const isDivider = item.divider !== undefined;

		return (
			<Fragment key={`${index}-${item?.label ?? item.divider}`} >
				<>
					{isDivider ?
						<NavDivider divider={item.divider} isHoveredSidebar={isHoveredSidebar} />
						:
						item.divider === undefined &&
						<NavLinks
							{...item}
							active={active}
							toggleActive={toggleActive}
						/>
					}
				</>
			</Fragment>
		);
	});

	const isMaxWidthSm = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
	const isMinWidthSm = useMediaQuery(`(min-width: ${theme.breakpoints.sm}px)`);

	const isSmDisplay = () => (isMaxWidthSm && isMinWidthSm);

	useEffect(() => {
		if (isSmDisplay()) {
			setSmSidebarWidth(SM_SIDEBAR_WITH);
			return;
		}
		setSmSidebarWidth(BASE_SIDEBAR_WITH);
	}, [isMaxWidthSm, isMinWidthSm]);

	return (
		<>
			<Transition mounted={BASE_SIDEBAR_WITH === smSidebarWidth} transition="fade" duration={400} timingFunction="ease">
				{(styles) =>
					<NavBarMantine
						p="md"
						style={styles}
						hidden={!opened}
						hiddenBreakpoint="sm"
						width={{ md : BASE_SIDEBAR_WITH, lg : BASE_SIDEBAR_WITH, sm : BASE_SIDEBAR_WITH }}
						onMouseLeave={() => {
							if (isSmDisplay()) {
								setSmSidebarWidth(SM_SIDEBAR_WITH);
							}
						}}
						onMouseEnter={() => {
							if (isSmDisplay()) {
								setSmSidebarWidth(BASE_SIDEBAR_WITH);
							}
						}}
					>
						<NavBarMantine.Section
							grow
							component={ScrollArea}
						>
							<div className={classes.linksInner}>{links}</div>
						</NavBarMantine.Section>
					</NavBarMantine>}
			</Transition>

			<Transition mounted={SM_SIDEBAR_WITH === smSidebarWidth} transition="fade" duration={400} timingFunction="ease">
				{(styles) =>
					<NavBarMantine
						p="md"
						style={styles}
						hidden={!opened}
						hiddenBreakpoint="sm"
						width={{ base : SM_SIDEBAR_WITH }}
						onMouseLeave={() => setSmSidebarWidth(SM_SIDEBAR_WITH)}
						onMouseEnter={() => setSmSidebarWidth(BASE_SIDEBAR_WITH)}
					>
						<NavBarMantine.Section
							grow
							component={ScrollArea}
						>
							<div className={classes.linksInner}>{iconsLinks}</div>
						</NavBarMantine.Section>
					</NavBarMantine>}
			</Transition>
		</>

	);
};

export default React.memo(Navbar);
