import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ApartmentIndex from "./pages/ApartmentIndex";
import ProtectedApartmentIndex from "./pages/ProtectedApartmentIndex";
import ApartmentShow from "./pages/ApartmentShow";
import ApartmentNew from "./pages/ApartmentNew";
import ApartmentEdit from "./pages/ApartmentEdit";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: [],
    };
  }

  componentDidMount() {
    this.apartmentIndex();
  }

  apartmentIndex = () => {
    fetch("/apartments")
      .then((response) => response.json())
      .then((payload) => this.setState({ apartments: payload }))
      .catch((errors) => console.log(errors));
  };

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;

    return (
      <Router>
        <Header {...this.props} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home sign_in={sign_in_route} sign_up={new_user_route} />
            )}
          />
          <Route
            path="/apartmentindex"
            render={() => (
              <ApartmentIndex apartments={this.state.apartments} />
            )}
          />
          <Route path="/apartmentshow" component={ApartmentShow} />
          <Route path="/apartmentnew" component={ApartmentNew} />
          <Route path="/apartmentedit" component={ApartmentEdit} />
          <Route path="/myapartments" component={ProtectedApartmentIndex} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
