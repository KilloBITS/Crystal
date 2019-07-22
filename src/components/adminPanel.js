import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/admin.css';

let toTopThisScroll = (e) => {
  let toTopposition = document.getElementById(e.target.getAttribute('toelement')).offsetTop;
  document.getElementById('content').scrollTo({top: toTopposition, behavior: 'smooth'});
}

let parseMenu = (dataMenu, m,) => {
  if(m){
    const menuBtn = dataMenu.map((comp, key) => <div key={key} onClick={toTopThisScroll.bind(this)} toelement={comp.toelement} className="menu_btnNav">{comp.title}</div>);
    return menuBtn
  }else{
    return <div className="menu_btn">Not data found</div>
  }
}

class AdminPanel extends React.Component {
  render() {
    return <div className="adminpanel">
      <div className="adminBtnMenu">
        <FontAwesomeIcon icon={['fas', 'cog']}/>
      </div>

      <div className="openAdminPanel">
        <div className="adminPaneTitle">Панель керування</div>

        <div className="navigationPanel">
          {parseMenu(this.props.menu, true)}
        </div>

        <div className="editedData">
          <div className="dataFromEdited" id="headEdited">

          </div>
          <div className="dataFromEdited" id="aboutEdited">

          </div>
          <div className="dataFromEdited" id="servicesEdited">

          </div>
          <div className="dataFromEdited" id="statisticsEdited">

          </div>
          <div className="dataFromEdited" id="mailingEdited">

          </div>
          <div className="dataFromEdited" id="galleryEdited">

          </div>
          <div className="dataFromEdited" id="staffEdited">

          </div>
          <div className="dataFromEdited" id="contactsEdited">

          </div>
          <div className="dataFromEdited" id="mapEdited">

          </div>
        </div>
      </div>
    </div>
  }
}

export default AdminPanel;
