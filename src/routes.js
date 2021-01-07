import { BrowserRouter, Switch, Route } from "react-router-dom";

//Page
import Landing from "./pages/Landing";
import Hotels from "./pages/Hotels";
import Airports from "./pages/Airports";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/hotels" exact component={Hotels} />
        <Route path="/flights/airports" exact component={Airports} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
