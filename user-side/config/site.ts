export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Pricing",
      href: "/",
    },
    {
      label: "About",
      href: "/",
    },
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/Certification-Blockchain-System",
		twitter: "https://twitter.com/ninadvsd",
		discord: "https://discord.com",
	},
};
