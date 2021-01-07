import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Page
import Landing from './pages/Landing';
import Hotels from './pages/Hotels';
import RoomsAvailability from './pages/RoomsAvailability';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/hotels" exact component={Hotels} />
        <Route path="/rooms/availability" exact component={RoomsAvailability} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
