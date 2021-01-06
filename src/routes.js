import { BrowserRouter, Switch, Route } from "react-router-dom";

//Page
import Landing from "./pages/Landing";
import Hotels from "./pages/Hotels";
import Reviews from "./pages/Reviews";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/hotels" exact component={Hotels} />
        <Route path="/hotels/reviews" exact component={Reviews} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
