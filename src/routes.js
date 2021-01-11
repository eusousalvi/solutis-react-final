import { BrowserRouter, Switch, Route } from "react-router-dom";

//Page
import RoomsAvailability from "./pages/RoomsAvailability";
import Landing from "./pages/Landing";
import Hotels from "./pages/Hotels";
import Rooms from "./pages/Rooms";
import Header from "./components/Header";
import AddFlightRoutes from "./pages/AddFlightRoutes";
import Airports from "./pages/Airports";
import Extras from "./pages/Extras/List";
import ModifyExtras from "./pages/Extras/Modify";
import DetailExtra from "./pages/Extras/Detail";

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/hotels" exact component={Hotels} />
        <Route path="/rooms/availability" exact component={RoomsAvailability} />
        <Route path="/hotels/rooms" exact component={Rooms} />
        <Route path="/flights/routes/add" exact component={AddFlightRoutes} />
        <Route path="/flights/airports" exact component={Airports} />
        <Route path="/hotels/extras" exact component={Extras} />
        <Route path="/hotels/extras/create" exact component={ModifyExtras} />
        <Route path="/hotels/extras/edit/:id" exact component={ModifyExtras} />
        <Route path="/hotels/extras/:id" exact component={DetailExtra} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
