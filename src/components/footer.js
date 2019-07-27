import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let toTopThisScroll = (e) => {
  let toTopposition = document.getElementById(e.target.getAttribute('toelement')).offsetTop;
  document.getElementById('content').scrollTo({top: toTopposition, behavior: 'smooth'});
}

let parseMenu = (dataMenu, m,) => {
  if(m){
    const menuBtn = dataMenu.map((comp, key) => <div key={key} onClick={toTopThisScroll.bind(this)} toelement={comp.toelement} className="menu_btn">{comp.title}</div>);
    return menuBtn
  }else{
    return <div className="menu_btn">Not data found</div>
  }
}

class FooterBlock extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      openSignIn: false
    }
  }
  openStaffSignIn(){
    if(this.state.openSignIn){
      this.setState({openSignIn:false});
    }else{
      this.setState({openSignIn:true});
    }
  }

  closeSignIn(){
    this.setState({openSignIn:false});
  }

  render() {
    return <div className="block footer" id="FooterBlock">
      <div className={(this.state.openSignIn)?"signInBlock show":"signInBlock"}>
        <div className="closeSignInBlock" onClick={this.closeSignIn.bind(this)}>
          <FontAwesomeIcon icon={['fas', 'times']}/>
        </div>
        <div className="authInfo">
          Авторизация для сотрудников салона красоты "Cristall".
        </div>
        <div className="paragraphLine">
          <FontAwesomeIcon icon={['fas', 'gem']} />
        </div>
        <input type="text" className="signIninput" placeholder="Ваш логін" onKeyUp={this.props.keyUpChangeLogin.bind(this)}/>
        <input type="password" className="signIninput" placeholder="Ваш пароль" onKeyUp={this.props.keyUpChangePassword.bind(this)}/>
        <div className="buttonSignIn" onClick={this.props.isSignIn.bind(this)}>Увійти</div>
      </div>
      <div className="footerToTopBlock">
        <div className="footerToTopBtn">
          <FontAwesomeIcon icon={['fas', 'arrow-up']}/>
          <div>на верх</div>
        </div>
      </div>
      <div className="max1024">
        <div className="footerData footerDataLeft">
          {parseMenu(this.props.dataMenu, true)}
          {(this.props.isAdmin)?null:<div onClick={this.openStaffSignIn.bind(this)} className="menu_btn">Працівникам</div>}
        </div>
        <div className="footerData footerDataRight">
          <div className="contacts_line">
            <div className="contactsLineTitle">Адреса</div>
            <div className="contactsLineStroke">Чернівці, вулиця Чорноморська, 4а</div>
          </div>

          <div className="contacts_line">
            <div className="contactsLineTitle">Телефон</div>
            <div className="contactsLineStroke">
              <a href={"tel:+380978056953"}>+38 (097) 805-69-53</a>
            </div>
            <div className="contactsLineStroke">
              <a href={"tel:+380665241709"}>+38 (066) 524-17-09</a>
            </div>
          </div>

          <div className="contacts_line">
            <div className="contactsLineTitle">Електронна пошта</div>
            <div className="contactsLineStroke">
              <a href={"mailto:kalinich0107@gmail.com"}>kalinich0107@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="footerData footerDataCenter">
          <img className="fotterLogotype" src={this.props.myLocation + this.props.logotype} alt=""/>
          <div className="coporight">
            2019 © Nail Studio "Cristall", Всі права захищені.
          </div>
          <div className="author">
            Site created by
            <a href={"http://kaleniuk.top/"} target="_blank" rel="noopener noreferrer">Ihor Kaleniuk</a>
          </div>
        </div>
      </div>
    </div>
  }
}

export default FooterBlock;
