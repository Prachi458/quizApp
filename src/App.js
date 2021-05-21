import React, { Component } from "react";
import "./styles/style.css";
import UserForm from "./components/userForm";
import Quiz from "./components/quiz";

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
      isUser: false,
      viewCorrect: false,
      isResult: false,
    };
  }

  nameHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  formSubmit = (event) => {
    event.preventDefault();
    this.setState({
      isUser: true,
    });
  };

  handleSubmit = () => {
    this.setState({
      isResult: true,
    });
  };

  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1,
      });
    }
  };

  viewCorrectAnswers = () => {
    this.setState({
      viewCorrect: true,
      isResult: false,
    });
  };

  render() {
    return (
      <div>
        {!this.state.isUser ? (
          <UserForm
            name={this.state.name}
            nameHandler={this.nameHandler}
            formSubmit={this.formSubmit}
          />
        ) : null}
        {this.state.isUser ? (
          <Quiz
            questionBank={this.state.questionBank}
            computeAnswer={this.computeAnswer}
            score={this.state.score}
            name={this.state.name}
            viewCorrectAnswers={this.viewCorrectAnswers}
            viewCorrect={this.state.viewCorrect}
            handleSubmit={this.handleSubmit}
            isResult={this.state.isResult}
          />
        ) : null}
      </div>
    );
  }
}
export default App;
