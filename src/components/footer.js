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
  render() {
    return <div className="block footer" id="FooterBlock">
      <div className="footerToTopBlock">
        <div className="footerToTopBtn">
          <FontAwesomeIcon icon={['fas', 'arrow-up']}/>
          <div>на верх</div>
        </div>
      </div>
      <div className="max1024">
        <div className="footerData footerDataLeft">
          {parseMenu(this.props.dataMenu, true)}
        </div>
        <div className="footerData footerDataRight">

        </div>
        <div className="footerData footerDataCenter">
          <img className="fotterLogotype" src={this.props.logotype} alt=""/>
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
