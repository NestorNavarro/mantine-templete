import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
	navbar : {
		backgroundColor : theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
		paddingBottom   : 0,
	},

	header : {
		padding      : theme.spacing.md,
		paddingTop   : 0,
		marginLeft   : -theme.spacing.md,
		marginRight  : -theme.spacing.md,
		color        : theme.colorScheme === "dark" ? theme.white : theme.black,
		borderBottom : `1px solid ${
        theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
	},

	links : {
		marginLeft  : -theme.spacing.md,
		marginRight : -theme.spacing.md,
	},

	linksInner : {
		paddingTop    : theme.spacing.xl,
		paddingBottom : theme.spacing.xl,
	},

	footer : {
		marginLeft  : -theme.spacing.md,
		marginRight : -theme.spacing.md,
		borderTop   : `1px solid ${
        theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
	},

	divider : {
		padding    : `${ theme.spacing.md }px ${ theme.spacing.md }px 5px ${ theme.spacing.md }px`,
		fontWeight : 500,

		color : theme.colorScheme === "dark" ? theme.white : theme.colors.gray[6],
	},
}));

export default styles;
