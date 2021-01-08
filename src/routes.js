import { BrowserRouter, Switch, Route } from "react-router-dom";

//Page
import RoomsAvailability from "./pages/RoomsAvailability";
import Landing from "./pages/Landing";
import Hotels from "./pages/Hotels";

import EditFlightRoutes from "./pages/FlightEditRoutes";
import AddFlightRoutes from "./pages/FlightAddRoutes";
import Rooms from "./pages/Rooms";
import Header from "./components/Header";
import FlightRoutes from "./pages/FlightRoutes";
import FlightRoutesDetails from "./pages/FlightRoutesDetails";
import Airports from "./pages/Airports";
import Extras from "./pages/Extras";

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/hotels" exact component={Hotels} />
        <Route path="/rooms/availability" exact component={RoomsAvailability} />
        <Route path="/hotels/rooms" exact component={Rooms} />
        <Route path="/flights/routes" exact component={FlightRoutes} />
        <Route
          path="/flights/routes/details"
          exact
          component={FlightRoutesDetails}
        />
        <Route path="/flights/routes/add" exact component={AddFlightRoutes} />
        <Route path="/flights/routes/manage/:id" component={EditFlightRoutes} />
        <Route path="/flights/airports" exact component={Airports} />
        <Route path="/hotels/extras" exact component={Extras} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
