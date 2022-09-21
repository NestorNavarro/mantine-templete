import { createStyles } from "@mantine/core";

const styles = createStyles( ( theme,  _params, getRef ) => ({
	root : {
		backgroundColor : theme.colors.dark[7],
		border          : "none !important",
	},
	navbarItems : {
		padding  : `0px ${ theme.spacing.md }px`,
		position : "relative",
		width    : "100%",

		"&::before" : {
			top           : 0,
			left          : "5%",
			width         : "85%",
			content       : "''",
			position      : "absolute",
			height        : "1px",
			pointerEvents : "none",
			background    : "#25262B",
		},
	},
	controlMain : {
		gap           : "3px",
		paddingTop    : theme.spacing.lg,
		paddingBottom : theme.spacing.lg,
		width         : "100%",
	},

	control : {
		fontWeight  : 600,
		width       : "100%",
		fontSize    : "16px",
		padding     : `${theme.spacing.xs}px ${theme.spacing.md}px`,
		color       : theme.colors.gray[6],
		border      : "1px solid",
		borderColor : "transparent",

		borderRadius : theme.radius.sm,

		"&:hover" : {
			backgroundColor : theme.colors.dark[5],
			color           : "white",

			[ `& .${ getRef( "icon" ) }` ] : {
				marginLeft : theme.spacing.md,

				color : "white",
			},
		},

		"&.active" : {
			backgroundColor : theme.colors.dark[5],
			color           : "white",
			fontWeight      : 600,

			[ `& .${ getRef( "icon" ) }` ] : {
				marginLeft : 0,
				fontWeight : 600,
				color      : "white",
			},
		},
	},
	icon : {
		ref : getRef( "icon" ),

		color      : theme.colors.gray[6],
		fontWeight : 600,
	},
	divider : {
		padding    : `${ theme.spacing.md }px ${ theme.spacing.md }px 5px ${ theme.spacing.md }px`,
		fontWeight : 500,

		color : theme.colors.gray[6],
	},
}));

export default styles;
