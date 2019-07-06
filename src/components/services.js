import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const myService = (arr) => {
  const myService = arr.map((comp, key) => <div key={key} className="myService" id={"serv"+key}>
    <div className="serviceLine">
      <div className="serviceIcon">
        <img src={comp.icon} alt=""/>
      </div>
    </div>
    <div className="serviceLine">
      <div className="myServiceTitle">{comp.title}</div>
    </div>
    <div className="serviceLine">
      <div className="myServiceText">{comp.text}</div>
    </div>
  </div>);
  return myService
}

class ServicesBlock extends React.Component {
  render() {
    return <div className="block services" id="ServicesBlock">
      <div className="blockTitle">{this.props.data.title}</div>
      <div className="blockMiniText">{this.props.data.text}</div>
      <div className="servicesContent">
        {myService(this.props.data.myservice)}
      </div>
    </div>
  }
}

export default ServicesBlock;
