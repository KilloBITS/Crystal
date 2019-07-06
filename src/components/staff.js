import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadingArt from '../images/heading.js';

let parseUsers = (data) => {
  const dataBlock = data.map((comp, key) => <div key={key} className="staffUserBlock">
    <div className="staffImageUser">
      <img className="oneImg" src={comp.photoOne} alt=""/>
      <img className="twoImg" src={comp.photoTwo} alt=""/>
    </div>
    <div className="staffTitleUser">
      {comp.title}
    </div>
    <div className="staffPosada">
      {comp.text}
    </div>
    <div className="staffSocials">
    <a target="_blank" href={"#"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
    <a target="_blank" href={"#"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fas', 'envelope']} /></a>
    <a target="_blank" href={"#"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
    </div>
  </div>);
  return dataBlock
}

class StaffBlock extends React.Component {
  render() {
    return <div className="block staff" id="StaffBlock">
      <div className="blockTitle">
        {this.props.data.title}
      </div>
      <div className="bdt-heading-style"><HeadingArt fill={'#164b49'}/></div>
      <div className="staffContent">
      <div className="carouselBlock">
        <div className="staffArrow">
          <div className="staffArrLeft"></div>
          <div className="staffArrRight"></div>
        </div>
        {parseUsers(this.props.data.staffData)}
      </div>
      </div>
    </div>
  }
}

export default StaffBlock;
