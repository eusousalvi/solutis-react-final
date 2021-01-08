import { BrowserRouter, Switch, Route } from "react-router-dom";

//Page
import Landing from "./pages/Landing";
import Hotels from "./pages/Hotels";

import EditFlightRoutes from "./pages/FlightEditRoutes";
import AddFlightRoutes from "./pages/FlightAddRoutes";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/hotels" exact component={Hotels} />
        <Route path="/flights/routes/add" exact component={AddFlightRoutes} />
        <Route path="/flights/routes/manage/:id" component={EditFlightRoutes} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
