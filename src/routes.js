import { BrowserRouter, Switch, Route } from "react-router-dom";

//Page
import RoomsAvailability from "./pages/RoomsAvailability";
import Landing from "./pages/Landing";
import HotelRoomCreate from "./pages/HotelRoomCreate";
import Hotels from "./pages/Hotels";
import Rooms from "./pages/Rooms";
import Header from "./components/Header";
import AddFlightRoutes from "./pages/AddFlightRoutes";
import Airports from "./pages/Airports";
import Extras from "./pages/Extras";

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/hotels/rooms/create" exact component={HotelRoomCreate} />
        <Route path="/hotels" exact component={Hotels} />
        <Route path="/rooms/availability" exact component={RoomsAvailability} />
        <Route path="/hotels/rooms" exact component={Rooms} />
        <Route path="/flights/routes/add" exact component={AddFlightRoutes} />
        <Route path="/flights/airports" exact component={Airports} />
        <Route path="/hotels/extras" exact component={Extras} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
