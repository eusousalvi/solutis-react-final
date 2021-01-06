import { BrowserRouter, Switch, Route } from "react-router-dom";

//Page
import Landing from "./pages/Landing";
import Hotels from "./pages/Hotels";
import Rooms from "./pages/Rooms";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/hotels" exact component={Hotels} />
        <Route path="/hotels/rooms" exact component={Rooms} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
