import React, { Fragment, useEffect, useState } from "react";

import {
	Text,
	Divider,
	ScrollArea,
	Navbar as NavBarMantine,
	Transition,
} from "@mantine/core";

import { useMediaQuery } from "@mantine/hooks";

import { LinksGroup }  from "core/components";
import navigate        from "routes/navigate";
import NavBarIconLinks from "core/components/NavBarIconLinks";
import styles          from "./styles";

const SM_SIDEBAR_WITH   = 85;
const BASE_SIDEBAR_WITH = 350;

const Navbar = ({ opened = false }) =>  {
	const { classes } = styles();

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
						<LinksGroup
							{...item}
							active={active}
							toggleActive={toggleActive}
							isHoveredSidebar={isHoveredSidebar}
						/>
					}
				</>
			</Fragment>
		);
	});

	const isMaxWidthSm = useMediaQuery("(max-width: 992px)");
	const isMinWidthSm = useMediaQuery("(min-width: 760px)");

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
					>
						<NavBarMantine.Section
							grow
							component={ScrollArea}
							onMouseLeave={() => setSmSidebarWidth(SM_SIDEBAR_WITH)}
							onMouseEnter={() => setSmSidebarWidth(BASE_SIDEBAR_WITH)}
						>
							<div className={classes.linksInner}>{iconsLinks}</div>
						</NavBarMantine.Section>
					</NavBarMantine>}
			</Transition>
		</>

	);
};

const NavDivider = ({ divider, isHoveredSidebar } : any) => {
	const { classes } = styles();

	const isMaxWidthSm = useMediaQuery("(max-width: 992px)");
	const isMinWidthSm = useMediaQuery("(min-width: 767px)");

	const isSmDisplay = () => (isMaxWidthSm && isMinWidthSm);
	return (
		<>
			{
				isSmDisplay() ?
					isHoveredSidebar ?
						<Text className={ classes.divider }>{ divider }</Text>
						:
						<Divider my="sm" />
					:
					<Text className={ classes.divider }>{ divider }</Text>
			}
		</>
	);
};
export default React.memo(Navbar);
