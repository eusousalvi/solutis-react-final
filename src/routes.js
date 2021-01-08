import { BrowserRouter, Switch, Route } from "react-router-dom";

//Page
import Landing from "./pages/Landing";
import HotelRoomCreate from "./pages/HotelRoomCreate";
import Hotels from "./pages/Hotels";
import AddFlightRoutes from "./pages/AddFlightRoutes";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/hotels/create" exact component={HotelRoomCreate} />
        <Route path="/hotels" exact component={Hotels} />
        <Route path="/flights/routes/add" exact component={AddFlightRoutes} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
