import {
	IconGauge,
	IconCalendarStats,
	IconPresentationAnalytics,
} from "@tabler/icons";

import { PATH_DASHBOARD, ROOTS_DASHBOARD } from "./paths";


const navigate = [
	{
		to    : ROOTS_DASHBOARD,
		label : "Escritorip",
		icon  : IconGauge,
	},
	{ divider : "Usuarios" },
	{
	  label : "Usuarios",
	  icon  : IconCalendarStats,
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
	{ divider : "Client" },
	{
	  label : "Client",
	  icon  : IconCalendarStats,
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
	{
		to    : "/",
		label : "Analytics",
		icon  : IconPresentationAnalytics,
	},
];

export default navigate;
