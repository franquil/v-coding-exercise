import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoutes from "./protected";
import Home from "../pages/home/";
import Login from "../pages/login/";
import Dashboard from "../pages/dashboard/";
import NotFound from "../pages/404/";

function MainRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <ProtectedRoutes path="/account">
          <Dashboard />
        </ProtectedRoutes>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export { MainRoutes };
