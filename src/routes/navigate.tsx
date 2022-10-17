import {
	IconGauge,
	IconUsers,
	IconPresentationAnalytics,
} from "@tabler/icons";

import { PATH_DASHBOARD, ROOTS_DASHBOARD } from "./paths";


const navigate = [
	{
		to    : ROOTS_DASHBOARD,
		label : "Escritorio",
		icon  : IconGauge,
	},
	{ divider : "Usuarios" },
	{
	  label : "Usuarios",
	  icon  : IconUsers,
	  links : [
			{
				to    : PATH_DASHBOARD.users.cards,
				label : "Cartas",
			},
			{
				to    : PATH_DASHBOARD.users.new,
				label : "Nuevo",
			},
	  ],
	},
	{ divider : "Administración" },
	{
		to    : "/",
		label : "Análisis",
		icon  : IconPresentationAnalytics,
	},
];

export default navigate;
