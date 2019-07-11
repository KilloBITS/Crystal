import React from 'react';
import Swiper from 'react-id-swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadingArt from '../images/heading.js';

let parseUsers = (data) => {
  let myLocation = (window.location.hostname === 'localhost')? window.location.origin.split('3000')[0]+'5002':window.location.origin;
  const dataBlock = data.map((comp, key) => <div key={key} className="staffUserBlock">
    <div className="staffImageUser">
      <img className="oneImg" src={myLocation + '/images' + comp.photoOne} alt=""/>
      <img className="twoImg" src={myLocation + '/images' + comp.photoTwo} alt=""/>
    </div>
    <div className="staffTitleUser">
      {comp.title}
    </div>
    <div className="staffPosada">
      {comp.text}
    </div>
    <div className="staffSocials">
    <a target="_blank" href={"/"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
    <a target="_blank" href={"/"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fas', 'envelope']} /></a>
    <a target="_blank" href={"/"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
    </div>
  </div>);
  return dataBlock
}

const multipleRowSlidesLayout = (stafData) => {
  console.log('PC')
  const params = {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }
  return (
    <Swiper {...params}>
      {parseUsers(stafData)}
    </Swiper>
  )
};

const multipleRowSlidesLayoutMobile = (stafData) => {
  console.log('mobile')
  const params = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  }
  return (
    <Swiper {...params}>
        {parseUsers(stafData)}
    </Swiper>
  )
};

class StaffBlock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      width: document.body.clientWidth
    }
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  updateDimensions() {
    this.setState({
      width: document.body.clientWidth
    });
  }
  render() {
    return <div className="block staff" id="StaffBlock">
      <div className="blockTitle">
        {this.props.data.title}
      </div>
      <div className="bdt-heading-style"><HeadingArt fill={'#164b49'}/></div>
      <div className="staffContent">
      <div className="carouselBlock">
        {(this.state.width > 880)?multipleRowSlidesLayout(this.props.data.staffData):multipleRowSlidesLayoutMobile(this.props.data.staffData)}
      </div>
      </div>
    </div>
  }
}

export default StaffBlock;
