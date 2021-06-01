import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/style.css";
import UserForm from "./components/userForm";
import Result from "./components/result";
import QuestionBox from "./components/questionBox";
import CorrectAnswers from "./components/correctAnswers";
import Error from "./components/error";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitForm = () => {
    this.setState({
      isSubmitted: true,
    });
  };

  render() {
    return (
      <Switch>
        <Route exact path="/">
          <UserForm submitForm={this.submitForm} />
        </Route>
        <PrivateRoute path="/quiz" isSubmitted={this.state.isSubmitted}>
          <QuestionBox />
        </PrivateRoute>
        <PrivateRoute path="/result" isSubmitted={this.state.isSubmitted}>
          <Result />
        </PrivateRoute>
        <PrivateRoute
          path="/correct-answers"
          isSubmitted={this.state.isSubmitted}
        >
          <CorrectAnswers />
        </PrivateRoute>
        <Route component={Error} />
      </Switch>
    );
  }
}
export default App;
