import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
	header : {
		paddingLeft  : theme.spacing.md,
		paddingRight : theme.spacing.md,
	},

	brand : {
		display     : "flex",
		alignItems  : "center",
		height      : "100%",
		width       : 350 - theme.spacing.md,
		borderRight : `1px solid ${ theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`,
		paddingLeft : theme.spacing.md,

		transitionProperty       : "width",
		transitionDuration       : "450ms",
		transitionTimingFunction : "ease",
		opacity                  : 1,

		[theme.fn.smallerThan("md")] : {
			width                    : 85 - theme.spacing.md,
			paddingLeft              : theme.spacing.sm,
			transitionProperty       : "width",
			transitionDuration       : "400ms",
			transitionTimingFunction : "ease",
			opacity                  : 1,
		},

		[theme.fn.smallerThan("sm")] : {
			border                   : "none",
			paddingLeft              : theme.spacing.sm,
			transitionProperty       : "border",
			transitionDuration       : "400ms",
			transitionTimingFunction : "ease",
			opacity                  : 1,
		},
	},

	inner : {
		height         : 70,
		display        : "flex",
		justifyContent : "space-between",
		alignItems     : "center",
	},

	links : {
		[theme.fn.smallerThan("md")] : {
			display : "none",
		},
	},

	search : {
		[theme.fn.smallerThan("xs")] : {
			display : "none",
		},
	},
}));

export default styles;
