import { createStyles } from "@mantine/core";

const styles = createStyles( ( theme ) => {
	return {
		  user : {
			color       : theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
			paddingLeft : theme.spacing.sm,
			transition  : "background-color 100ms ease",
			borderLeft  : `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.dark[2]}`,

			"&:hover" : {
			  backgroundColor : theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
			},

			[theme.fn.smallerThan("xs")] : {
			  display : "none",
			},
		  },

		  userInfo : {
			lineHeight : 1,

			[theme.fn.smallerThan("md")] : {
				display : "none",
			},
		},

		  userActive : {
			backgroundColor : theme.colorScheme === "dark" ? theme.colors.dark[8] :  theme.colors.gray[6],
		  },
	};
});

export default styles;
