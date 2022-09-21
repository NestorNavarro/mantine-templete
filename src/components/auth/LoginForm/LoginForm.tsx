import { Link as RouterLink } from "react-router-dom";
// form
import { UseFormReturn} from "react-hook-form";
// routes
import { PATH_AUTH } from "routes/paths";
//mantine
import { Stack }  from "@mantine/core";
import { Button } from "@mantine/core";
// components
// import Iconify                                     from "core/Iconify";
import { RHFCheckbox, RHFPasswordInput, FormProvider, RHFTextInput } from "components/global/hook-form";
import { IFormInput }                                                from "./LoginFormContainer";

// ----------------------------------------------------------------------

interface ILoginForm {
    delegations : {
        onSubmit : () => void;
        formMethods : UseFormReturn<IFormInput, any>;
    }
}

const LoginForm = ({
	delegations : {
		onSubmit,
		formMethods,
	},
} : ILoginForm) => {
	const { formState: { isSubmitting } } = formMethods;

	return (
		<FormProvider methods={formMethods} onSubmit={onSubmit}>
			<Stack spacing={5}>
				<RHFTextInput name="email" label="Correo Electrónico" />
				<RHFPasswordInput name="password" label="Password" />
			</Stack>

			<Stack mt="sm" align="center" justify="space-between" sx={{ my : 2 }}>
				<RHFCheckbox name="remember" label="Remember me" />
				<RouterLink to={PATH_AUTH.resetPassword}>
					¿Olvidaste tu contraseña?
				</RouterLink>
			</Stack>
			<Button fullWidth size="lg" type="submit" loading={isSubmitting}>
				Entrar
			</Button>
		</FormProvider>
	);
};

export default LoginForm;
