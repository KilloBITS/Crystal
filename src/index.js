import React from 'react';
import ReactDOM from 'react-dom';

//Styles
import './styles/index.css';

class Crystal extends React.Components{
  render(){
    return <div className="content" id="content"></div>
  }
}
ReactDOM.render(<Crystal />, document.getElementById('root'));
