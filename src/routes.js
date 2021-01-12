import { BrowserRouter, Switch, Route } from "react-router-dom";

//Page
import AirportEdit from "./pages/AirportEdit";
import RoomsAvailability from "./pages/RoomsAvailability";
import Landing from "./pages/Landing";
import Hotels from "./pages/Hotels";

import EditFlightRoutes from "./pages/FlightEditRoutes";
import AddFlightRoutes from "./pages/FlightAddRoutes";
import Rooms from "./pages/Rooms";
import HotelRoomCreate from "./pages/HotelRoomCreate";
import Header from "./components/Header";
import FlightRoutes from "./pages/FlightRoutes";
import FlightRoutesDetails from "./pages/FlightRoutesDetails";
import Airports from "./pages/Airports";
import AddAirport from "./pages/AddAirport";
import Extras from "./pages/Extras/List";
import ModifyExtras from "./pages/Extras/Modify";
import DetailExtra from "./pages/Extras/Detail";

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/airport/edit/:id" exact component={AirportEdit} />
        <Route path="/" exact component={Landing} />
        <Route path="/hotels" exact component={Hotels} />
        <Route
          path="/hotels/rooms/availability/:id"
          exact
          component={RoomsAvailability}
        />
        <Route path="/hotels/rooms" exact component={Rooms} />
        <Route path="/hotels/rooms/create" exact component={HotelRoomCreate} />
        <Route path="/flights/routes" exact component={FlightRoutes} />
        <Route
          path="/flights/routes/details/:id"
          exact
          component={FlightRoutesDetails}
        />
        <Route path="/flights/routes/add" exact component={AddFlightRoutes} />
        <Route path="/flights/routes/manage/:id" component={EditFlightRoutes} />
        <Route path="/flights/airports" exact component={Airports} />
        <Route path="/flights/airports/add" exact component={AddAirport} />
        <Route path="/hotels/extras" exact component={Extras} />
        <Route path="/hotels/extras/create" exact component={ModifyExtras} />
        <Route path="/hotels/extras/edit/:id" exact component={ModifyExtras} />
        <Route path="/hotels/extras/:id" exact component={DetailExtra} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
