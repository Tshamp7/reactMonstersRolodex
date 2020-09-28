import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Frankenstein",
          id: "fiuh",
        },
        {
          name: "Golem",
          id: "tgwy",
        },
        {
          name: "Dracula",
          id: "d6rg",
        },
        {
          name: "Beelzebub",
          id: "dbuw",
        },
        {
          name: "Chucky",
          id: "37dg",
        },
        {
          name: "Bedsheet Ghost",
          id: "4hc0",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}> {monster.name} </h1>
        ))}
      </div>
    );
  }
}

export default App;
