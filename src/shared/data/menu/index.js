// ** Navigation sections imports

import topics from "./topics";
import solutions from "./solutions";
import jobs from "./jobs";
import events from "./events";
import dashboard from "./dashboard";
import login from "./login";
import logout from "./logout";
import articles from "./articles";
import users from "./users";

// ** Merge & Export
export default [
  ...topics,
  ...solutions,
  ...jobs,
  ...events,
  ...dashboard,
  ...articles,
  ...users,
  ...login,
  ...logout,
];
