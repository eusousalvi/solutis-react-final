import { BrowserRouter, Switch, Route } from "react-router-dom";

//Page
import Landing from "./pages/Landing";
import HotelAddRoom from "./pages/HotelAddRoom";
import Hotels from "./pages/Hotels";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/hotels/addroom" exact component={HotelAddRoom} />
        <Route path="/hotels" exact component={Hotels} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
