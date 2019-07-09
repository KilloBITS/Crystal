import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MailingBlock extends React.Component {
  render() {
    return <div className={(this.props.openimagesrc === null)?"imageModal hiden":"imageModal"} id="imageModal">
      <div className="imageModalBlock">
        <div className="closeimageModal" onClick={this.props.closephoto}>
          <FontAwesomeIcon icon={['fas', 'times']} />
        </div>
        <img src={this.props.openimagesrc} alt=""/>
      </div>
    </div>
  }
}

export default MailingBlock;
