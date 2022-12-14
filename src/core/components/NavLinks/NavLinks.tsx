import { useState }                from "react";
import { NavLink as NavLinkReact } from "react-router-dom";

import { Group, Box, Collapse, UnstyledButton }                     from "@mantine/core";
import { TablerIcon, IconChevronLeft, IconChevronRight, IconPoint } from "@tabler/icons";

import styles from "./styles";

interface INavLinks {
	to ?: string;
    label: string;
    active : string;
    icon: TablerIcon;
    links?: { label: string; to: string }[];
    toggleActive : (v : string) => void;
}

export const NavLinks = ({
	to,
	links,
	label,
	active,
	icon : Icon,
	toggleActive,
} : INavLinks) => {
	const { classes, theme, cx } = styles();

	const [opened, setOpened] = useState(false);

	const hasLinks = Array.isArray(links);

	const ChevronIcon = theme.dir === "ltr" ? IconChevronRight : IconChevronLeft;

	const items = (hasLinks ? links : []).map((link) => (
		<NavChildLink
			link={link}
			key={link.label}
			className={cx(classes.control, { [classes.linkActive] : active === link.label })}
			toggleActive={toggleActive}
		/>
	));

	return (
		<>
			{
				hasLinks ?
					<>
						<UnstyledButton
							className={classes.control}
							onClick={() => setOpened((o) => !o)}
						>
							<Group position="apart" spacing={0}>
								<Box sx={{ display : "flex", alignItems : "center" }}>
									<Icon stroke={1.5} />
									<Box ml="md">{label}</Box>
								</Box>
								<ChevronIcon
									className={classes.chevron}
									size={14}
									stroke={1.5}
									style={{
										transform : opened ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)` : "none",
									}}
								/>
							</Group>
						</UnstyledButton>
						<Collapse in={opened}>{items}</Collapse>
					</>
					:
					<NavLink
						icon={Icon}
						link={{ to : to ?? "/", label }}
						toggleActive={toggleActive}
						className={cx(classes.control, { [classes.linkActive] : active === label })}
					/>
			}
		</>
	);
};



const NavLink = ({ link, className, toggleActive, icon : Icon } :
    {
        icon: TablerIcon;
        className : string;
        link : { to: string, label : string };
        toggleActive : (v : string) => void;
    }) => {

	return (
		<NavLinkReact
			to={link.to}
			className={className}
			onClick={() => toggleActive(link.label)}
		>
			<Group position="apart" spacing={0}>
				<Box sx={{ display : "flex", alignItems : "center" }}>
					<Icon stroke={1.5} />
					<Box ml="md">{link.label}</Box>
				</Box>
			</Group>
		</NavLinkReact>
	);
};


const NavChildLink = ({ link, className, toggleActive } :
    {
        className : string;
        link : {  to : string, label : string };
        toggleActive : (v : string) => void;
    }) => {
	return (
		<NavLinkReact
			className={className}
			to={link.to}
			key={link.label}
			onClick={() => toggleActive(link.label)}
		>
			<Group position="apart" spacing={0}>
				<Box sx={{ display : "flex", alignItems : "center" }}>
					<IconPoint stroke={1.5} />
					<Box ml="md">{link.label}</Box>
				</Box>
			</Group>
		</NavLinkReact>
	);
};

