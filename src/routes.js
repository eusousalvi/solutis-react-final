import { BrowserRouter, Switch, Route } from "react-router-dom";

//Page
import Landing from "./pages/Landing";
import Hotels from "./pages/Hotels";
import Extras from "./pages/Extras";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/hotels" exact component={Hotels} />
        <Route path="/hotels/extras" exact component={Extras} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
