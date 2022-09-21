//External componets
import { useFormContext, Controller } from "react-hook-form";

//Own components
import {
	NumberInput,
} from "@mantine/core";

const RHFNumberInput = ({
	name,
	...rest
}) => {
	const { control } = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<NumberInput
					id={name}
					error={error ? true : false}
					hideControls
					{...field}
					{...rest}
				/>
			)}
		/>
	);
};

export default (RHFNumberInput);
