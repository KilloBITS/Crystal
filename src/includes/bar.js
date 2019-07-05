import React from 'react';

let toTopThisScroll = (e) => {
  let toTopposition = document.getElementById(e.target.getAttribute('toelement')).offsetTop;
  document.getElementById('content').scrollTo({top: toTopposition, behavior: 'smooth'});
}

let parseNavBar = (dataBar, m) => {
  if(m){
    const menuBtn = dataBar.map((comp, key) => <div key={key} onClick={toTopThisScroll.bind(this)} toelement={comp.toelement} className="miniPageBar"><div>{comp.title}</div></div>);
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
    if(document.getElementById('HeadBlock').offsetTop+150 <= document.getElementById('content').scrollTop){clearClassNavigator(0)}
    if(document.getElementById('AboutBlock').offsetTop+150 <= document.getElementById('content').scrollTop){clearClassNavigator(1)}
    if(document.getElementById('ServicesBlock').offsetTop+150 <= document.getElementById('content').scrollTop){clearClassNavigator(2)}
    if(document.getElementById('GalleryBlock').offsetTop+150 <= document.getElementById('content').scrollTop){clearClassNavigator(3)}
    if(document.getElementById('StaffBlock').offsetTop+150 <= document.getElementById('content').scrollTop){clearClassNavigator(4)}
    if(document.getElementById('ContactsBlock').offsetTop+150 <= document.getElementById('content').scrollTop){clearClassNavigator(5)}
  }
  render() {
    return <div className="navBar" id="navBar">
      <div className="pageBar">
        {parseNavBar(this.props.data, true)}
      </div>
    </div>
  }
}

export default NavBar;
