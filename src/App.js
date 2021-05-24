import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/style.css";
import UserForm from "./components/userForm";
import Result from "./components/result";
import QuestionBox from "./components/questionBox";
import CorrectAnswers from "./components/correctAnswers";
import Error from "./components/error";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBank: [],
      name: "",
      score: 0,
    };
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions = () => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          questionBank: data,
        });
      });
  };

  nameHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1,
      });
    }
  };

  render() {
    return (
      <Switch>
        <Route exact path="/">
          <UserForm name={this.state.name} nameHandler={this.nameHandler} />
        </Route>
        <Route path="/quiz">
          <QuestionBox
            questionBank={this.state.questionBank}
            selected={this.computeAnswer}
          />
        </Route>
        <Route path="/result">
          <Result score={this.state.score} name={this.state.name} />
        </Route>
        <Route path="/correct-answers">
          <CorrectAnswers questionBank={this.state.questionBank} />
        </Route>
        <Route component={Error} />
      </Switch>
    );
  }
}
export default App;
