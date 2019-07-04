import React from 'react';
import ReactDOM from 'react-dom';

//Styles
import './styles/index.css';

class Crystal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: 'Crystal',
      logotype: ''
    }
  }
  render(){
    return <div className="content" id="content"></div>
  }
}
ReactDOM.render(<Crystal />, document.getElementById('root'));
