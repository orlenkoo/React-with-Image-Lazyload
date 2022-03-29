// shared between client and server based code bases

import requireAuth from "../client/components/hocs/requireAuth";
import App from "./App";
import HomePage from "../client/pages/HomePage";
import UsersListPage, { loadData } from "../client/pages/UsersListPage";
import NotFoundPage from "../client/pages/NotFoundPage";
import AdminsListPage from "../client/pages/AdminsListPage";
import LoginPage from "../logged_out/auth/login/LoginPage";

// export default () => {
//   return (
//     <div>
//       <Route exact path="/" component={Home} />
//       <Route path="/users" component={UsersList} />
//     </div>
//   );
// };

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true,
      },
      {
        ...AdminsListPage,
        component: requireAuth(AdminsListPage),
        path: "/admins",
      },
      {
        ...LoginPage,
        exact: true,
        path: "/login",
      },
      { ...UsersListPage, path: "/users" },
      { ...NotFoundPage },
    ],
  },
];
