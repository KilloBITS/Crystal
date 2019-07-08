import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let toTopThisScroll = (e) => {
  let toTopposition = document.getElementById(e.target.getAttribute('toelement')).offsetTop;
  document.getElementById('content').scrollTo({top: toTopposition, behavior: 'smooth'});
}

let parseNavBar = (dataBar, m) => {
  if(m){
    const menuBtn = dataBar.map((comp, key) => <div key={key} onClick={toTopThisScroll.bind(this)} toelement={comp.toelement} className={(key === 0)?"miniPageBar activepagebar":"miniPageBar"}></div>);
    return menuBtn
  }else{
    return <div className="miniPageBar"></div>
  }
}

let clearClassNavigator = (setClass) => {
  let navArr = document.getElementsByClassName('miniPageBar');
  for(let i = 0; i < navArr.length; i++){
      navArr[i].className = 'miniPageBar';
  }
  navArr[setClass].className = 'miniPageBar activepagebar';
}

class NavBar extends React.Component {
  componentDidMount() {
    document.getElementById('content').addEventListener('scroll', this.handleScroll.bind(this));
  };
  handleScroll(){
    let docHeight = document.getElementById('HeadBlock').offsetHeight / 2;

    if(document.getElementById('content').scrollTop > document.getElementById('AboutBlock').offsetTop){
      document.getElementById('pageBar').className = 'pageBar twoColor'
    } else{
      document.getElementById('pageBar').className = 'pageBar'
    }

    if(document.getElementById('content').scrollTop >= document.getElementById('HeadBlock').offsetTop){clearClassNavigator(0)}
    if(document.getElementById('AboutBlock').offsetTop - docHeight <= document.getElementById('content').scrollTop){clearClassNavigator(1)}
    if(document.getElementById('ServicesBlock').offsetTop - docHeight <= document.getElementById('content').scrollTop){clearClassNavigator(2)}
    if(document.getElementById('GalleryBlock').offsetTop - docHeight <= document.getElementById('content').scrollTop){clearClassNavigator(3)}
    if(document.getElementById('StaffBlock').offsetTop - docHeight <= document.getElementById('content').scrollTop){clearClassNavigator(4)}
    if(document.getElementById('ContactsBlock').offsetTop - docHeight <= document.getElementById('content').scrollTop){clearClassNavigator(5)}
  }
  render() {
    return <div className="navBar" id="navBar">
      <div className={(this.props.open)?"openMenuButton open":"openMenuButton"} onClick={this.props.openclose}>
        <div className="menuButtonLine line1"></div>
        <div className="menuButtonLine line2"></div>
        <div className="menuButtonLine line3"></div>
      </div>
      <div className="pageBar" id="pageBar">
        {parseNavBar(this.props.data, true)}
      </div>

      <div className="feedBackAbsoluteBtn">
        <FontAwesomeIcon icon={['fas', 'gem']} />
      </div>
      <div className="toTopAbsoluteBtn">
        <FontAwesomeIcon icon={['fas', 'arrow-up']}/>
      </div>
    </div>
  }
}

export default NavBar;
