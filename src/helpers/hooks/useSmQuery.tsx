import { useMediaQuery } from "@mantine/hooks";

const useSmQuery = () => {
	const isMaxWidthSm = useMediaQuery("(max-width: 992px)");
	const isMinWidthSm = useMediaQuery("(min-width: 767px)");

	const isSmDisplay = () => (isMaxWidthSm && isMinWidthSm);

	return isSmDisplay;

};

export default useSmQuery;
