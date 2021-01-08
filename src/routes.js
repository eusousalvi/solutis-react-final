import { BrowserRouter, Switch, Route } from "react-router-dom";

//Page
import Landing from "./pages/Landing";
import Hotels from "./pages/Hotels";
import AddFlightRoutes from "./pages/AddFlightRoutes";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/hotels" exact component={Hotels} />
        <Route path="/hotels/rooms" exact component={Rooms} />
        <Route path="/flights/routes/add" exact component={AddFlightRoutes} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
