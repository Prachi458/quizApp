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
    this.state = {
      name: "",
      category: "",
      difficulty: "",
    };
  }

  // componentDidMount() {
  //   let userHistory = JSON.parse(localStorage.getItem("usersData"));

  //   if (localStorage.getItem("usersData")) {
  //     this.setState({
  //       usersData: userHistory.usersData,
  //     });
  //   } else {
  //     this.setState({
  //       usersData: [],
  //     });
  //   }
  // }

  // UNSAFE_componentWillUpdate(nextProps, nextState) {
  //   localStorage.setItem("usersData", JSON.stringify(nextState));
  // }

  submitForm = () => {
    this.setState({
      isSubmitted: true,
    });
  };

  render() {
    const { category, difficulty } = this.state;

    return (
      <Switch>
        <Route exact path="/">
          <UserForm submitForm={this.submitForm} />
        </Route>
        <PrivateRoute path="/quiz" isSubmitted={this.state.isSubmitted}>
          <QuestionBox category={category} difficulty={difficulty} />
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
