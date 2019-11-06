import React from 'react';

class App extends React.Component {
  render() {
    return this.props.children;
  }

  componentDidMount() {
    // Set the CSS value of the --vh custom property to the root of the document
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }
}

export default App;
