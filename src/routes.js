import { BrowserRouter, Switch, Route } from "react-router-dom";

//Page
import Landing from "./pages/Landing";
import Airports from "./pages/Airports";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/airports" component={Airports} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
