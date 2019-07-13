import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MailingBlock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      valueLine: ''
    }
  }
  handleSubmit(){
    let myLocation = (window.location.hostname === 'localhost')? window.location.origin.split('3000')[0]+'5002':window.location.origin;
    axios.post(myLocation+'/saveEmail', {text: this.state}).then(res => {
      setTimeout(() => {
        this.setState({
          valueLine: ''
        })
      },1000)
      return false
    });
  }
  render() {
    return <div className="block mailing" id="MailingBlock">
      <div className="mailingBackground">
        <div className="backgroundImage"></div>
      </div>
      <div className="max1080">
        <div className="blockMailingText">
          Хочете бути вкурсі останніх новин та завжди отримувати їх першим,
          залиште нам свій адрес електронної пошти і ми будемо тримати вас вкурсі всіх останніх подій)
        </div>
        <input type="text" className="mailingInput" value={this.state.valueLine} placeholder="Введіть ваш адрес електронної пошти"/>
        <input type="button" className="mailingInput button" value="Отримувати новини"/>
      </div>
      <div className="cristall"><FontAwesomeIcon icon={['fas', 'gem']} /></div>
    </div>
  }
}

export default MailingBlock;
