import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ContactsBlock extends React.Component {
  render() {
    return <div className="block contacts" id="ContactsBlock">
      <div className="blockTitle">
        {this.props.data.title}
      </div>
    </div>
  }
}

export default ContactsBlock;
