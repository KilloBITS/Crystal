import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MailingBlock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sendingEmail: false,
      valueLine: ''
    }
  }
  handleSubmit(){
    this.setState({
      sendingEmail: true
    })
    axios.post(this.props.myLocation+'/saveEmail', {text: this.state}).then(res => {
      setTimeout(() => {
        this.setState({
          sendingEmail: false,
          valueLine: ''
        })
      },2000)
      return false
    });
  }

  handleMailingChange(event){
    var text = event.target.value;
    this.setState({
      valueLine: text
    })
  }
  render() {
    return <div className="block mailing" id="MailingBlock">
      <div className={(this.state.sendingEmail)?"mailingLoader":"mailingLoader hide"}></div>
      <div className="mailingBackground">
        <div className="backgroundImage"></div>
      </div>
      <div className="max1080">
        <div className="blockMailingText">
          Хочете бути вкурсі останніх новин та завжди отримувати їх першим,
          залиште нам свій адрес електронної пошти і ми будемо тримати вас вкурсі всіх останніх подій)
        </div>
        <input type="text" className="mailingInput" value={this.state.valueLine} onChange={this.handleMailingChange.bind(this)} placeholder="Введіть ваш адрес електронної пошти"/>
        <input type="button" className="mailingInput button" value="Отримувати новини" onClick={this.handleSubmit.bind(this)}/>
      </div>
      <div className="cristall"><FontAwesomeIcon icon={['fas', 'gem']} /></div>
    </div>
  }
}

export default MailingBlock;
