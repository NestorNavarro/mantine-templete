import navigate       from "routes/navigate";
import { TablerIcon } from "@tabler/icons";

import { Group, Text } from "@mantine/core";

import styles from "./styles";

import { NavLink } from "react-router-dom";


interface IMenuLink {
  icon?: TablerIcon;
  link?: string;
  color?: string;
  label: string;
  isDivider: boolean;
}

function MenuLink({
	icon,
	link,
	label,
	isDivider,
}: IMenuLink) {
	const { classes, cx } = styles();

	const Icon = icon;

	return (
		isDivider ? (
			<Text size="xs" className={ classes.divider }>{ label }</Text>
		) : (
			<NavLink
				to={ link ?? ""}
				className={ ({ isActive }) => cx( classes.control, {
					active : isActive,
				})}
			>
				<Group>
					{Icon && <Icon  className={ classes.icon } />}
					<Text size="md">{ label }</Text>
				</Group>
			</NavLink>
		)
	);
}

export default function MainLinks() {
	const { classes } = styles();

	return (
		<Group  className={ classes.controlMain }>
			{ navigate.map( ( item, index ) => (
				item.divider ? (
					<MenuLink
						key={ index }
						isDivider={ true }
						label={ item.divider }
					/>
				) : (
					<MenuLink
						key={ index }
						isDivider={ false }
						icon={ item.icon }
						link={ item.link }
						label={ item?.label ?? ""}
					/>
				)
			))}
		</Group>
	);
}
