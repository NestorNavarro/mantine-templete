import { createStyles }                       from "@mantine/core";
import { BASE_SIDEBAR_WITH, SM_SIDEBAR_WITH } from "../navbar/NavbarConstants";

const styles = createStyles((theme) => ({
	header : {
		paddingLeft  : theme.spacing.md,
		paddingRight : theme.spacing.md,
	},

	inner : {
		height     : 70,
		display    : "flex",
		alignItems : "center",
	},

	brand : {
		display     : "flex",
		alignItems  : "center",
		height      : "100%",
		width       : "100%",
		maxWidth    : BASE_SIDEBAR_WITH,
		paddingLeft : theme.spacing.md,

		[theme.fn.smallerThan("md")] : {
			maxWidth : SM_SIDEBAR_WITH,
		},

		[theme.fn.smallerThan("sm")] : {
			paddingLeft : 0,
		},
	},
	tools : {
		display        : "flex",
		width          : "100%",
		alignItems     : "center",
		justifyContent : "space-between",

		[theme.fn.smallerThan("sm")] : {
			justifyContent : "end",
		},
	},

	searchContainer : {
		flex : "70% 1 0",
	},

	search : {
		width                        : "55%",
		maxWidth                     : "550px",
		[theme.fn.smallerThan("sm")] : {
			display : "none",
		},
	},


	rightTools : {
		display        : "flex",
		width          : "100%",
		alignItems     : "center",
		gap            : "1rem",
		justifyContent : "flex-end",

		[theme.fn.smallerThan("sm")] : {
			justifyContent : "end",
		},
	},
}));

export default styles;
