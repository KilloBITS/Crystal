import React from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadingArt from '../images/heading.js'

const myService = (arr) => {
  const myService = arr.map((comp, key) => <div key={key} className="myService" id={"serv"+key}>

    <div className="serviceLine">
      <div className="serviceIcon" id={"serviceIcon"+key}></div>
    </div>
    <div className="bdt-heading-style"><HeadingArt fill={'#164b49'}/></div>
    <div className="serviceLine">
      <div className="myServiceTitle">{comp.title}</div>
    </div>
    <div className="serviceLine">
      <div className="myServiceText">{comp.text}</div>
    </div>
    <div className="buttonServiceBottom">
      <div className="placehold">Детальніше</div>
      <FontAwesomeIcon icon={['fas', 'arrow-right']} />
    </div>
    
  </div>);
  return myService
}

class ServicesBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onStart: true
    }
  }
  componentDidMount(){
    document.getElementById('content').addEventListener('scroll', this.handleScroll.bind(this));
  }
  handleScroll(){
    if(document.getElementById('content').scrollTop > document.getElementById('AboutBlock').offsetTop){
      // for(let i = 0; i < this.props.data.myservice.length; i++){
      //   new Vivus("serviceIcon"+i, { duration: 100, file: this.props.data.myservice[i].icon })
      // }
    }
  }
  render() {
    return <div className="block services" id="ServicesBlock">
      <div className="blockTitle"> <Fade delay={50}>{this.props.data.title}</Fade></div>
      <div className="bdt-heading-style"><HeadingArt fill={'#164b49'}/></div>
      <div className="blockMiniText"> <Fade delay={50}>{this.props.data.text} </Fade></div>
      <div className="servicesContent">
        {myService(this.props.data.myservice)}
      </div>
    </div>
  }
}

export default ServicesBlock;
