import { BrowserRouter, Switch, Route } from "react-router-dom";

//Page
import Landing from "./pages/Landing";
import Hotels from "./pages/Hotels";
import AirportsList from "./pages/AirportsList";
import AirportView from "./pages/AirportView";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/hotels" exact component={Hotels} />
        <Route path="/airports" exact component={AirportsList} />
        <Route path="/airports/view" component={AirportView} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
