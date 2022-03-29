export default [
  {
    id: "solutions",
    title: "Solutions",
    pm: ["all"],
    login: true,
    logout: true,
    iconCheck: false,
    link: true,
    icon: null,
    navLink: "/solutions/",
    childrenCheck: true,
    children: [
      {
        id: "submit",
        title: "Submission",
        pm: ["all"],
        login: true,
        logout: true,
        iconCheck: false,
        link: true,
        icon: null,
        navLink: "/solutions/submission",
      },
    ],
  },
];
