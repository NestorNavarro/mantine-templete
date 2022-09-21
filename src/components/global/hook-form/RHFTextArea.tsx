//External componets
import { useFormContext, Controller } from "react-hook-form";

//Own components
import {
	Textarea,
} from "@mantine/core";

const RHFTextArea = ({
	name,
	...rest
}) => {
	const { control } = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<Textarea
					id={name}
					{...field}
					error={error ? true : false}
					{...rest}
				/>
			)}
		/>
	);
};

export default (RHFTextArea);
