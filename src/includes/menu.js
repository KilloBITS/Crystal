import React from 'react';

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

class Menu extends React.Component {
  render() {
    return <div className={(this.props.open)?"mainMenu":"mainMenu hide"} id="mainMenu">
      <div className="menuCenter" onClick={this.props.openclose}>
        {parseMenu(this.props.data, true)}
      </div>
    </div>
  }
}

export default Menu;
