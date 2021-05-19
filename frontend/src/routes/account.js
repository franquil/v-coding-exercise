import { Switch, Route, useRouteMatch } from "react-router-dom";
import AccountInfo from "../pages/dashboard/AccountInfo";
import AccountEdit from "../pages/dashboard/AccountEdit";

function AccountRoutes() {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <AccountInfo />
      </Route>
      <Route exact path={`${path}/info`}>
        <AccountInfo />
      </Route>
      <Route path={`${path}/edit`}>
        <AccountEdit />
      </Route>
    </Switch>
  );
}

export default AccountRoutes;
