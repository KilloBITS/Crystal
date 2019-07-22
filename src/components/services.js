import React from 'react';
import Fade from 'react-reveal/Fade';
import Vivus from "vivus";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadingArt from '../images/heading.js'

const myService = (arr, open) => {
  let myLocation = (window.location.hostname === 'localhost')? window.location.origin.split('3000')[0]+'5002':window.location.origin;
  const myServices = arr.map((comp, key) => <div key={key} className="myService" id={"serv"+key}>
    <div className="serviceLine">
      <div className="serviceIcon" id={"serviceIcon"+key}>
        <img src={myLocation + comp.icon} alt=""/>
      </div>
    </div>
    <div className="bdt-heading-style"><HeadingArt fill={'#164b49'}/></div>
    <div className="serviceLine">
      <div className="myServiceTitle">{comp.title}</div>
    </div>
    <div className="serviceLine">
      <div className="myServiceText">{comp.text}</div>
    </div>
    <div className="buttonServiceBottom" keydata={key} onClick={open}>
      <div className="placehold">Детальніше</div>
      <FontAwesomeIcon icon={['fas', 'arrow-right']} />
    </div>

  </div>);
  return myServices
}

class ServicesBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onStart: true,
      openModal: false,
      modalData: null
    }
  }
  componentDidMount(){
    document.getElementById('content').addEventListener('scroll', this.handleScroll.bind(this));
  }
  handleScroll(){
    // if(document.getElementById('content').scrollTop > document.getElementById('AboutBlock').offsetTop){
    //   for(let i = 0; i < this.props.data.myservice.length; i++){
    //     new Vivus("serviceIcon"+i, { duration: 100, file: this.props.data.myservice[i].icon })
    //   }
    // }
  }

  handOpenServiceModal(e){
    let dataNum = parseInt(e.currentTarget.getAttribute('keydata'));
    console.log(this.props.data.myservice[dataNum].text)
    this.setState({
      openModal: true,
      modalData: this.props.data.myservice[dataNum].text
    });
  }

  handCloseServiceModal(){
    this.setState({
      openModal: false,
      modalData: null
    });
  }
  render() {
    return <div className="block services" id="ServicesBlock">
      <div className={(this.state.openModal)?"servicesModal":"servicesModal hide"}>

        <div className="serviceModalContent">
          <div className="servicesModalClose" onClick={this.handCloseServiceModal.bind(this)}>
            <FontAwesomeIcon icon={['fas', 'times']} />
          </div>
          {(this.state.modalData !== null)?this.state.modalData:"Нет данных" }
        </div>
      </div>
      <div className="blockTitle"> <Fade delay={50}>{this.props.data.title}</Fade></div>
      <div className="bdt-heading-style"><HeadingArt fill={'#164b49'}/></div>
      <div className="blockMiniText"> <Fade delay={50}>{this.props.data.text} </Fade></div>
      <div className="servicesContent">
        {myService(this.props.data.myservice, this.handOpenServiceModal.bind(this))}
      </div>
    </div>
  }
}

export default ServicesBlock;
