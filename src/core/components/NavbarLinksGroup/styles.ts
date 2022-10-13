import { createStyles } from "@mantine/core";

const styles = createStyles((theme, _params, getRef) => {
	const icon = getRef("icon");

	return {
		linkActive : {
			"&, &:hover" : {
				backgroundColor : theme.fn.variant({ variant : "light", color : theme.primaryColor })
					.background,
				color          : theme.fn.variant({ variant : "light", color : theme.primaryColor }).color,
				[`& .${icon}`] : {
					color : theme.fn.variant({ variant : "light", color : theme.primaryColor }).color,
				},
			},
		},

		control : {
			...theme.fn.focusStyles(),
			marginTop      : "3px",
			fontWeight     : 500,
			display        : "block",
			width          : "100%",
			textDecoration : "none",
			borderRadius   : theme.radius.md,
			padding        : `${theme.spacing.xs}px ${theme.spacing.md}px`,
			color          : theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
			fontSize       : theme.fontSizes.sm,

			"&:hover" : {
				backgroundColor : theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
				color           : theme.colorScheme === "dark" ? theme.white : theme.black,

				[`& .${icon}`] : {
					color : theme.colorScheme === "dark" ? theme.white : theme.black,
				},
			},
		},

		chevron : {
			transition : "transform 200ms ease",
		},

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

export default styles;
