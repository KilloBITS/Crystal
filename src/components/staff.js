import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class StaffBlock extends React.Component {
  render() {
    return <div className="block staff" id="StaffBlock">
      <div className="blockTitle">
        {this.props.data.title}
      </div>
    </div>
  }
}

export default StaffBlock;
