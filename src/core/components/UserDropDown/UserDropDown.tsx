// External Components
import {
	Menu,
	Text,
	Group,
	Avatar,
	UnstyledButton,
	useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import {
	IconUser,
	IconBuilding,
	IconSettings,
	IconDoorExit,
} from "@tabler/icons";
// Own Components
import styles from "./styles";

const UserDropDown = () => {

	const { classes, cx } = styles();
	const [userMenuOpened, setUserMenuOpened] = useState(false);
	const theme = useMantineTheme();

	return (
		<Group>
			  <Menu
				width={260}
				position="bottom-end"
				transition="pop-top-right"
				onClose={() => setUserMenuOpened(false)}
				onOpen={() => setUserMenuOpened(true)}
			>
				<Menu.Target>
					<UnstyledButton
						className={cx(classes.user, { [classes.userActive] : userMenuOpened })}
					>
						<Group spacing={7}>
							<Avatar color="primary" radius="xl" size={35}>
								Juan
							</Avatar>
							<div>
								<Text className={classes.userInfo} weight="bolder" size={14} mr={3}>
									Juan
								</Text>
								<Text className={classes.userInfo} color={theme.colorScheme === "dark" ? theme.colors.dark[0] :  theme.colors.gray[6]}  size={12} >
									Administrador
								</Text>
							</div>
						</Group>
					</UnstyledButton>
				</Menu.Target>
				<Menu.Dropdown>
					<Menu.Item icon={<IconUser size={14} stroke={1.5} />}>
						Mi Cuenta
					</Menu.Item>
					<Menu.Item icon={<IconBuilding size={14} stroke={1.5} />}>
						Empresa
					</Menu.Item>
					<Menu.Item icon={<IconSettings size={14} stroke={1.5} />}>
						Preferencias
					</Menu.Item>

					<Menu.Divider />

					<Menu.Item color="red" icon={<IconDoorExit size={14} stroke={1.5} />}>
						Cerrar Sesión
					</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		</Group>
	);
};

export default UserDropDown;
