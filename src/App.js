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
      category: "",
      difficulty: "",
      score: 0,
      usersData: [],
    };
  }

  componentDidMount() {
    this.getQuestions();
    let userHistory = JSON.parse(localStorage.getItem("usersData"));

    if (localStorage.getItem("usersData")) {
      this.setState({
        usersData: userHistory.usersData,
      });
    } else {
      this.setState({
        usersData: [],
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("usersData", JSON.stringify(nextState));
  }

  getQuestions = () => {
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${this.state.category}&difficulty=${this.state.difficulty}&type=multiple`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          questionBank: data,
        });
      });
  };

  formHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    let addUsersData = [
      ...this.state.usersData,
      {
        name: this.state.name,
        category: this.state.category,
        difficulty: this.state.difficulty,
        score: this.state.score,
      },
    ];
    this.setState({
      usersData: addUsersData,
    });
  };

  computeAnswer = (answer) => {
    if (answer === this.state.questionBank.results.correct_answer) {
      this.setState({
        score: this.state.score + 1,
      });
    }
  };

  render() {
    const { name, category, difficulty, score, questionBank, usersData } =
      this.state;
    return (
      <Switch>
        <Route exact path="/">
          <UserForm
            name={name}
            category={category}
            difficulty={difficulty}
            formHandler={this.formHandler}
            usersData={usersData}
          />
        </Route>
        <Route path="/quiz">
          <QuestionBox
            questionBank={questionBank}
            selected={this.computeAnswer}
            name={name}
            category={category}
            difficulty={difficulty}
            submitHandler={this.submitHandler}
          />
        </Route>
        <Route path="/result">
          <Result
            score={score}
            name={name}
            category={category}
            difficulty={difficulty}
          />
        </Route>
        <Route path="/correct-answers">
          <CorrectAnswers
            questionBank={questionBank}
            name={name}
            category={category}
            difficulty={difficulty}
          />
        </Route>
        <Route component={Error} />
      </Switch>
    );
  }
}
export default App;
