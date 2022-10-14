import { useMediaQuery } from "@mantine/hooks";

const useSmQuery = () => {
	const isMaxWidthSm = useMediaQuery("(max-width: 992px)");
	const isMinWidthSm = useMediaQuery("(min-width: 760px)");

	const isSmDisplay = () => (isMaxWidthSm && isMinWidthSm);

	return isSmDisplay;

};

export default useSmQuery;
