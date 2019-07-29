import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HeadingArt from '../images/heading.js';
import AminOnePage from '../includes/adminSiteData.js';
import AminTwoPage from '../includes/adminPersonalData.js';

import '../styles/admin.css';
import '../styles/admin.min.css';


class AdminPanel extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      openPanel: false,
      panelTab: 0,
      tabNames: ["Панель управления","Пользователи"]
    }
  }
  openAdminPanelMethod(){
    this.setState({
      openPanel: (this.state.openPanel)?false:true
    })
  }

  nextPanelTab(){
    this.setState({
      panelTab: this.state.panelTab + 1
    })
  }
  prewPanelTab(){
    this.setState({
      panelTab: this.state.panelTab - 1
    })
  }
  render() {
    return <div className="adminpanel">
      <div className={(this.state.openPanel)?"adminBtnMenu show":"adminBtnMenu"} onClick={this.openAdminPanelMethod.bind(this)}>
        <FontAwesomeIcon icon={['fas', 'cog']}/>
      </div>
      <div className={(this.state.openPanel)?"openAdminPanel show":"openAdminPanel"}>
        <div className="adminPaneTitle">{this.state.tabNames[this.state.panelTab]}</div>
        <div className="panelClassSelect">
          <div onClick={this.prewPanelTab.bind(this)} className={(this.state.panelTab === 0)?"panelClassSelectButton left_panelClassSelect panelBtn_disabled":"panelClassSelectButton left_panelClassSelect"}></div>
          <div onClick={this.nextPanelTab.bind(this)} className={(this.state.panelTab === 1)?"panelClassSelectButton right_panelClassSelect panelBtn_disabled":"panelClassSelectButton right_panelClassSelect"}></div>
        </div>
        <div className="bdt-heading-style"><HeadingArt fill={'#00726d'}/></div>
        {(this.state.panelTab === 0)?<AminOnePage myLocation={this.props.myLocation} menu={this.props.menu} serviceUpdate={this.props.serviceUpdate}/>:null}
        {(this.state.panelTab === 1)?<AminTwoPage myLocation={this.props.myLocation}/>:null}
      </div>
    </div>
  }
}

export default AdminPanel;
