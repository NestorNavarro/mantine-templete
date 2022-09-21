import { IconUsers, IconUserPlus } from "@tabler/icons";
import { PATH_DASHBOARD }          from "./paths";


const navigate = [
	{
		divider : "Usuarios",
	},
	{
		label : "Cartas",
		icon  : IconUsers,
		link  : PATH_DASHBOARD.users.cards,
	},
	{
		label : "Nuevo",
		icon  : IconUserPlus,
		link  : PATH_DASHBOARD.users.new,
	},
];

export default navigate;
