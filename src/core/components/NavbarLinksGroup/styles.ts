import { createStyles } from "@mantine/core";

const styles = createStyles((theme, _params, getRef) => {
	const icon = getRef("icon");

	return {

		linkIcon : {
			ref         : icon,
			color       : theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6],
			marginRight : theme.spacing.sm,
		},

		link : {
			...theme.fn.focusStyles(),
			marginTop      : "3px",
			fontWeight     : 500,
			display        : "block",
			textDecoration : "none",
			padding        : `${theme.spacing.xs}px ${theme.spacing.md}px`,
			paddingLeft    : 31,
			marginLeft     : 30,
			fontSize       : theme.fontSizes.sm,
			color          : theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7],
			borderRadius   : theme.radius.sm,

			"&:hover" : {
				backgroundColor : theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
				color           : theme.colorScheme === "dark" ? theme.white : theme.black,

				[`& .${icon}`] : {
					color : theme.colorScheme === "dark" ? theme.white : theme.black,
				},
			},
		},

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
			padding        : theme.breakpoints.sm ? `${theme.spacing.xs}px 10px` : `${theme.spacing.xs}px ${theme.spacing.md}px`,
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
	};
});

export default styles;
