import { BrowserRouter, Switch, Route } from "react-router-dom";

//Page
import Landing from "./pages/Landing";
import HotelAddRoom from "./pages/HotelAddRoom";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/addroom" exact component={HotelAddRoom} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
