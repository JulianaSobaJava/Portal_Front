import * as Icons from "react-icons/md";

export const navitems = [
  {
    title: "DashBoard",
    itens: [
      {
        id: 1,
        name: "DashBoard",
        Icons: <Icons.MdTrackChanges />,
        path: "/admin/home",
      },
      {
        id: 2,
        name: "Páginas",
        Icons: <Icons.MdPageview />,
        path: "/admin/users",
      },
      {
        id: 3,
        name: "Co-Admin",
        Icons: <Icons.MdGroupAdd />,
        path: "/admin/users",
      },
    ],
  },

  {
    title: "Mais Informações",
    itens: [
      {
        id: 1,
        name: "Usuários",
        Icons: <Icons.MdPerson />,
        path: "/admin/users",
      },
      {
        id: 2,
        name: "Escolas",
        Icons: <Icons.MdSchool />,
        path: "/admin/users",
      },
      {
        id: 3,
        name: "Pedidos",
        Icons: <Icons.MdQuestionAnswer />,
        path: "/admin/users",
      },
      {
        id: 4,
        name: "Informações",
        Icons: <Icons.MdInfo />,
        path: "/admin/users",
      },
      {
        id: 5,
        name: "Notícias",
        Icons: <Icons.MdNewReleases />,
        path: "/admin/users",
      },
      {
        id: 6,
        name: "Teste Vocacional",
        Icons: <Icons.MdDirections />,
        path: "/admin/users",
      },
      {
        id: 7,
        name: "Configurações",
        Icons: <Icons.MdSettings />,
        path: "/admin/users",
      },
      { id: 8, name: "Extra", Icons: <Icons.MdMore />, path: "/admin/users" },
    ],
  },
];
