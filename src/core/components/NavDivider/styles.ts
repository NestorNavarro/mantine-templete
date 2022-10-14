import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => ({
	divider : {
		padding    : `${ theme.spacing.md }px ${ theme.spacing.md }px 5px ${ theme.spacing.md }px`,
		fontWeight : 500,

		color : theme.colorScheme === "dark" ? theme.white : theme.colors.gray[6],
	},
}));

export default styles;
