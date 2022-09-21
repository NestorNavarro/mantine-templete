import { Group }      from "@mantine/core";
import { PuffLoader } from "react-spinners";

//own components
import styles from "./styles";

const LoadingScreen = () => {
	const { classes } = styles();
	return (
		<Group
			position="center"
			className={classes.root}
		>
			<div className="spinnerContainer">
				<PuffLoader
					color="rgb(36 58 142 / 63%)"
					size={90}
				/>
			</div>
			<img alt="logo" width={ 85 } src="https://seeklogo.com/images/M/mantine-logo-235E19C978-seeklogo.com.png" />
		</Group>
	);
};

export default LoadingScreen;
