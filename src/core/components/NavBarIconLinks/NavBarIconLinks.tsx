import { TablerIcon }              from "@tabler/icons";
import { NavLink as NavLinkReact } from "react-router-dom";

const NavBarIconLinks = ({ icon : Icon, onClick, to, active }
	: {
		icon: TablerIcon;
		onClick : () => void;
		to : string;
		active : boolean
	}
) => {
	const { classes, cx } = styles();

	return (
		<NavLinkReact
			to={to}
			onClick={onClick}
			className={cx(classes.iconLink, { [classes.active] : active })}
		>
			<Icon stroke={1.5} />
		</NavLinkReact>
	  );
};

import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => {
	return {


		iconLink : {
			width          : 50,
			height         : 40,
			borderRadius   : theme.radius.md,
			display        : "flex",
			alignItems     : "center",
			justifyContent : "center",
			color          : theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],

			"&:hover" : {
			  backgroundColor : theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
			},
		  },

		  active : {
			"&, &:hover" : {
			  backgroundColor : theme.fn.variant({ variant : "light", color : theme.primaryColor }).background,
			  color           : theme.fn.variant({ variant : "light", color : theme.primaryColor }).color,
			},
		  },
	};
});



export default NavBarIconLinks;
