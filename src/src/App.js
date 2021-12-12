import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      MessageReturned: null,
      TypeReturn: null,
    };
  }

  componentDidMount() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({ title: "React POST Request Example" }),
    };
    fetch(
      "https://func-reminder-home-dev.azurewebsites.net/api/json",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          MessageReturned: data.Value.Message,
          TypeReturn: data.Value.Type,
        })
      );
  }

  render() {
    // const { MessageReturned } = this.state;
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">
          {/* Simple POST Request:{this.state.MessageReturned.Type} */}
        </h5>
        <div className="card-body">Returned : {this.state.MessageReturned}</div>
        <div className="card-body">Returned : {this.state.TypeReturn}</div>
      </div>
    );
  }
}
export default App;
