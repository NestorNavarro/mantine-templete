import React from "react";
//External componets
import { useFormContext, Controller } from "react-hook-form";

//Own components
import { PasswordInput, PasswordInputProps } from "@mantine/core";

interface IRHFPasswordInput extends PasswordInputProps, React.RefAttributes<HTMLInputElement> {
	name : string;
}

const RHFPasswordInput = ({ name, ...rest } : IRHFPasswordInput) => {
	const { control } = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<PasswordInput
					id={name}
					{...field}
					error={error ? `${error.message}` : false}
					{...rest}
				/>
			)}
		/>
	);
};

export default RHFPasswordInput;
