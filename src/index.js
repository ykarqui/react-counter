import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import './index.css';
import "semantic-ui-css/semantic.min.css";

const App = () => {
  return (<div>
            <Counter />
          </div>);
}

ReactDOM.render(<App />, document.getElementById('root'));