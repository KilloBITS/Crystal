import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MailingBlock extends React.Component {
  render() {
    return <div className="block mailing" id="MailingBlock">
      <div className="max1080">
        <input type="text" className="mailingInput" placeholder="Введіть ваш адрес електронної пошти"/>
        <input type="button" className="mailingInput button" value="Отримувати новини"/>
      </div>
      <div className="cristall"><FontAwesomeIcon icon={['fas', 'gem']} /></div>
    </div>
  }
}

export default MailingBlock;
