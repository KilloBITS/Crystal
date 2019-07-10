import React from 'react';
import Vivus from "vivus";
import Parallax from 'parallax-js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class HeadBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false
    }
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      new Vivus('headBackgroundFilter', {file: this.props.logotype });
    }, 1000);
    var scene = document.getElementById('headBackground');
    new Parallax(scene);
    document.getElementById('content').addEventListener('scroll', this.handleScroll);
  };
  componentWillUnmount() {
    document.getElementById('content').removeEventListener('scroll', this.handleScroll);
  };
  handleScroll(){
    let scrolltop = document.getElementById('content').scrollTop;
    if(scrolltop >= 50){
      this.setState({
        scrolled: true
      });
      document.getElementById('headFooterSvg').className = 'headFooterSvg openHeadSvg';
      document.getElementById('toScrollButton').className = 'toScrollButton openHeadSvg';
    }else{
      this.setState({
        scrolled: false
      });
      document.getElementById('headFooterSvg').className = 'headFooterSvg';
      document.getElementById('toScrollButton').className = 'toScrollButton';
    }
  }

  nextScroll(){
    let toTopposition = document.getElementById('AboutBlock').offsetTop;
    document.getElementById('content').scrollTo({top: toTopposition, behavior: 'smooth'});
  }

  render() {
    let myLocation = (window.location.hostname === 'localhost')? window.location.origin.split('3000')[0]+'5002':window.location.origin;
    return <div className="block head" id="HeadBlock">
      <div className="headBackground" id="headBackground">
        <img data-depth="0.1" className="backgroundPhoto" src={myLocation+this.props.data.background} alt=""/>
      </div>
      <div className="headBackgroundFilter" id="headBackgroundFilter">
        <img data-depth="0.3" className="headerModel" src={this.props.modelheader} alt=""/>
      </div>
      <div className="headButtons" id="headButtons">
        <div className="toScrollButton" id="toScrollButton" onClick={(!this.state.scrolled)?this.nextScroll.bind(this):()=>{return false}}>{(this.state.scrolled)?"Про нас":<FontAwesomeIcon icon={['fas', 'arrow-down']}/>}</div>
      </div>
      <div className="headFooterSvg" id="headFooterSvg">
        <div className="containSvg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.3 135.5" preserveAspectRatio="none"><path d="M595.3 135.5V5.5c-53.4-11.9-113-3.4-164 12.3-22.4 6.9-43.8 15.1-64.9 23.7-26.9 11-53.3 22.5-80.9 32.7-49.2 18.2-104.8 32.2-160.9 28.3C80.9 99.6 40.9 86 0 75.3v60.2h595.3zM0 135.5h595.3"></path></svg>
        </div>
      </div>
    </div>
  }
}

export default HeadBlock;
