import { BrowserRouter, Switch, Route } from "react-router-dom";

//Page
import Landing from "./pages/Landing";
import Airports from "./pages/Airports";
import AirportView from "./components/Airports/AirportView";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/airports" exact component={Airports} />
        <Route path="/airports/view" component={AirportView} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
