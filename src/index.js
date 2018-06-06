import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  render() {
    return (
      <div>
        <p>I'm the app</p>
      </div>
    );
  }
}

export default App;
// const App = () =>

// render(<App />, document.getElementById('root'));
