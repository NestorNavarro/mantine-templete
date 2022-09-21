//External componets
import { useFormContext, Controller } from "react-hook-form";
//Own components
import { TextInput, TextInputProps } from "@mantine/core";

interface IRHFTextInput extends TextInputProps, React.RefAttributes<HTMLInputElement> {
	name : string;
}

const RHFTextInput = ({ name, ...rest } :IRHFTextInput) => {
	const { control } = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<TextInput
					id={name}
					{...field}
					error={error ? true : false}
					{...rest}
				/>
			)}
		/>
	);
};

export default RHFTextInput;
