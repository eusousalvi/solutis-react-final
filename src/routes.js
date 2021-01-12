import { BrowserRouter, Switch, Route } from "react-router-dom";
import AirportEdit from "./pages/AirportEdit";

//Page

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/airport/edit/:id" exact component={AirportEdit} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
