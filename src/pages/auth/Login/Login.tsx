import { Stack }     from "@mantine/core";
import { Box }       from "@mantine/core";
import { LoginForm } from "components/auth";

const Login = () => {
	return (
		<Box className="">
			<Stack align="center" spacing={3} >
				<h1>Login</h1>
				<LoginForm />
			</Stack>
		</Box>
	);
};

export default Login;
