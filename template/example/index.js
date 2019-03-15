import React from 'react';
import ReactDom from 'react-dom';
import AReactComponent from '../src';

class App extends React.Component {
  render() {
    return <div>
      <AReactComponent></AReactComponent>
    </div>
  }
}

ReactDom.render(<App/>, document.getElementById('app'));