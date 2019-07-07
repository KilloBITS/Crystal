import React from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadingArt from '../images/heading.js';

const bg1 = require('../images/bg1.png');
const bg2 = require('../images/bg2.png');
class AboutBlock extends React.Component {
  render() {
    return <div className="block about" id="AboutBlock">
      <div className="bdt-heading-style"><HeadingArt fill={'white'}/></div>
      <div className="aboutMiniText max1024">
        <div className="aboutDataBlock imageAbout" id="imageAbout">
          <img id="oneImageAbout" src={bg1} alt=""/>
          <img id="twoImageAbout" data-depth="0.1" src={bg2} alt=""/>
        </div>
        <div className="aboutDataBlock">
          <Fade delay={50}>{this.props.data.minitext}</Fade>
          <div className="paragraphLine">
            <Fade delay={50}><FontAwesomeIcon icon={['fas', 'gem']} /></Fade>
          </div>
          <Fade delay={50}>{this.props.data.minitext2}</Fade>
        </div>

      </div>

      <Fade delay={50}>
      <div className="sosialAbout">
        <a target="_blank" href={this.props.data.email} rel="noopener noreferrer"><FontAwesomeIcon icon={['fas', 'envelope']} /></a>
        <a target="_blank" href={this.props.data.insta} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
        <a target="_blank" href={this.props.data.facebook} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
      </div>
      </Fade>
      <div className="aboutFooterSvg" id="aboutFooterSvg">
        <div className="defaultButton">Записатися на прийом</div>
        <div className="containSvg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.3 135.5" preserveAspectRatio="none"><path d="M595.3 135.5V5.5c-53.4-11.9-113-3.4-164 12.3-22.4 6.9-43.8 15.1-64.9 23.7-26.9 11-53.3 22.5-80.9 32.7-49.2 18.2-104.8 32.2-160.9 28.3C80.9 99.6 40.9 86 0 75.3v60.2h595.3zM0 135.5h595.3"></path></svg>
        </div>
      </div>
    </div>
  }
}

export default AboutBlock;
