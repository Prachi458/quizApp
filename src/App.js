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
      questionBank: [
        {
          question: "Everything in React is?",
          answers: ["Module", "Component", "Package", "Class"],
          correct: "Component",
          questionId: "1",
        },
        {
          question: "What is the name of ReactJS Developer?",
          answers: ["Jordan mike", "Jordan Lee", "Jordan Walke", "Tim Lee"],
          correct: "Jordan Walke",
          questionId: "2",
        },
        {
          question: "Who Develop ReactJS?",
          answers: ["Apple", "Facebook", "Twitter", "Google"],
          correct: "Facebook",
          questionId: "3",
        },
        {
          question:
            "Which of the following API is a MUST for every ReactJS component?",
          answers: ["getInitialState", "render", "renderComponent", "None"],
          correct: "renderComponent",
          questionId: "4",
        },
        {
          question: "What is a react.js in MVC?",
          answers: ["Controller", "Middleware", "Model", "Router"],
          correct: "Controller",
          questionId: "5",
        },
      ],
      name: "",
      score: 0,
    };
  }

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
