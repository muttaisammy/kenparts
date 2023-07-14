import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import store from "../../src/store";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions";
import * as actions from "../actions";
import Home from "./Home";
import SharedLayout from "./SharedLayout";
import CarShop from './CarsSpace/CarsShop';
import ProductsShop from "./ProductsSpace/ProductsShop";
import SellA_Car from "./sellA_Car"
import ContactUs from "./contactUs"
import CartFull from "./CartFull";
import CarDetails from './CarsSpace/CarDetails';
import WishList from './WishList';
import Vin from './Vin';
import SavedVin from './SavedVin';

import Register from "./auth/Register";
import Login from "./auth/Login";
import PrivateRoute from "./private-route/PrivateRoute";
import Dashboard from "./dashboard/Dashboard";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      carfilters: {}
    }
  }

  setCarsFilters(carfilters) {

    this.setState({ carfilters });

  }


  render() {
    return (
      <Provider store={store}>
        <BrowserRouter >
          <SharedLayout carsfilters={this.setCarsFilters.bind(this)}>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/products" component={ProductsShop} />
            <Route exact path="/cars" render={() => <CarShop filters={this.state.carfilters} />} />
            <Route exact path="/carso" component={CarDetails} />
            <Route exact path="/sellacar" component={SellA_Car} />
            <Route exact path="/contactus" component={ContactUs} />
            <Route exact path="/products_cart" component={CartFull} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/wishlist" component={WishList} />
            <Route exact path="/cars/singlproduct" component={CarShop} />
            <Route exact path="/products/singlproduct" component={ProductsShop} />
            <Route exact path="/vin" component={Vin} />
            <Route exact path="/savedvin" component={SavedVin} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </SharedLayout>
        </BrowserRouter>
      </Provider>

    );
  }
}

export default connect(null, actions)(App);
