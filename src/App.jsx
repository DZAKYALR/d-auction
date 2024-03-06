import { Route, Redirect, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const isAuthenticated =  false;

  return (
    <Route
      {...rest}
      render={() => (isAuthenticated ? <Component /> : <Redirect to={{ pathname: '/login', state: { from: location } }} />)}
    />
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <ProtectedRoute path="/auctioneer-dashboard" component={AuctioneerDashboard} />
        <ProtectedRoute path="/bidder-dashboard" component={BidderDashboard} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
};

export default App;
