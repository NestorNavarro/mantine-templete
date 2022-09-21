//External componets
import { useFormContext, Controller } from "react-hook-form";

//Own components
import { ColorInput, ColorInputProps } from "@mantine/core";

interface IRHFNumberInput extends ColorInputProps, React.RefAttributes<HTMLInputElement> {
	name : string;
}
const RHFNumberInput = ({ name, ...rest } : IRHFNumberInput) => {
	const { control } = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<ColorInput
					id={name}
					error={error ? true : false}
					{...field}
					{...rest}
				/>
			)}
		/>
	);
};

export default RHFNumberInput;
