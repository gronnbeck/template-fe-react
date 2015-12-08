const React = require('react');
const ReactDom = require('react-dom');

class App extends React.Component {
  render() {
    return <div>Hello World</div>
  }
}

var domEl = document.getElementById('app');
ReactDom.render(<App/>, domEl);
