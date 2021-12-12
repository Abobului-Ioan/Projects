import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      MessageReturned: null,
    };
  }

  componentDidMount() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/text" },
      // body: JSON.stringify({ title: "React POST Request Example" }),
    };
    fetch(
      "https://func-reminder-home-dev.azurewebsites.net/api/text",
      requestOptions
    )
      .then((response) => response.text())
      .then((data) =>
        this.setState({
          MessageReturned: data,
        })
      );
  }

  render() {
    // const { MessageReturned } = this.state;
    return (
      <div className="card text-center m-3">
        <div className="card-body">Returned : {this.state.MessageReturned}</div>
      </div>
    );
  }
}
export default App;
