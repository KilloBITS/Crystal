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
  constructor(props){
    super(props);
    this.state = {
      visibleBTN: false,
      pageColor: false,
      clickedFeedback: false
    }
  }
  componentDidMount() {
    document.getElementById('content').addEventListener('scroll', this.handleScroll.bind(this));
  };
  handleScroll(){
    this.setState({
      visibleBTN: (document.getElementById('content').scrollTop > 50),
      pageColor: (document.getElementById('content').scrollTop > document.getElementById('AboutBlock').offsetTop),
      clickedFeedback: false
    });

    let docHeight = document.getElementById('HeadBlock').offsetHeight / 2;

    if(document.getElementById('HeadBlock') && document.getElementById('content').scrollTop >= document.getElementById('HeadBlock').offsetTop){clearClassNavigator(0)}
    if(document.getElementById('AboutBlock') && document.getElementById('AboutBlock').offsetTop - docHeight <= document.getElementById('content').scrollTop){clearClassNavigator(1)}
    if(document.getElementById('ServicesBlock') && document.getElementById('ServicesBlock').offsetTop - docHeight <= document.getElementById('content').scrollTop){clearClassNavigator(2)}
    if(document.getElementById('GalleryBlock') && document.getElementById('GalleryBlock').offsetTop - docHeight <= document.getElementById('content').scrollTop){clearClassNavigator(3)}
    if(document.getElementById('StaffBlock') && document.getElementById('StaffBlock').offsetTop - docHeight <= document.getElementById('content').scrollTop){clearClassNavigator(4)}
    if(document.getElementById('ContactsBlock') && document.getElementById('ContactsBlock').offsetTop - docHeight <= document.getElementById('content').scrollTop){clearClassNavigator(5)}

  }
  toTopPosition(){
    document.getElementById('content').scrollTo({top: 0, behavior: 'smooth'});
  }
  toClickFeedBack(){
    this.setState({
      clickedFeedback: (this.state.clickedFeedback)?false:true
    });
  }
  render() {
    return <div className="navBar" id="navBar">
      <div className={(this.props.open)?"openMenuButton open":"openMenuButton"} onClick={this.props.openclose}>
        <div className="menuButtonLine line1"></div>
        <div className="menuButtonLine line2"></div>
        <div className="menuButtonLine line3"></div>
      </div>
      <div className={this.state.pageColor?"pageBar twoColor":"pageBar"} id="pageBar">
        {parseNavBar(this.props.data, true)}
      </div>
      <div className={this.state.visibleBTN?"feedBackAbsoluteBtn":"feedBackAbsoluteBtn hide"} onClick={this.toClickFeedBack.bind(this)} id="feedBackAbsoluteBtn">
        <FontAwesomeIcon icon={['fas', 'gem']} />
        {(this.props.dataAbout !== null)?<a href={this.props.dataAbout.email} rel="noopener noreferrer"><div className={this.state.clickedFeedback?"chilsFeedBackBtn email openFeed":"chilsFeedBackBtn email"}><FontAwesomeIcon icon={['fas', 'envelope']} /></div></a>:null}
        {(this.props.dataAbout !== null)?<a href={this.props.dataAbout.insta} target="_blank" rel="noopener noreferrer"><div className={this.state.clickedFeedback?"chilsFeedBackBtn insta openFeed":"chilsFeedBackBtn insta"}><FontAwesomeIcon icon={['fab', 'instagram']} /></div></a>:null}
        {(this.props.dataAbout !== null)?<a href={this.props.dataAbout.viber} rel="noopener noreferrer"><div className={this.state.clickedFeedback?"chilsFeedBackBtn viber openFeed":"chilsFeedBackBtn viber"}><FontAwesomeIcon icon={['fab', 'viber']} /></div></a>:null}
        {(this.props.dataAbout !== null)?<a href={this.props.dataAbout.facebook} target="_blank" rel="noopener noreferrer"><div className={this.state.clickedFeedback?"chilsFeedBackBtn facebook openFeed":"chilsFeedBackBtn facebook"}><FontAwesomeIcon icon={['fab', 'facebook']} /></div></a>:null}
      </div>
      <div className={this.state.visibleBTN?"toTopAbsoluteBtn":"toTopAbsoluteBtn hide"} onClick={this.toTopPosition.bind(this)} id="toTopAbsoluteBtn">
        <FontAwesomeIcon icon={['fas', 'arrow-up']}/>
      </div>
    </div>
  }
}

export default NavBar;
