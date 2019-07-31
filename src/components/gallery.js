import React from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let parseGallery = (a, css, click, location) => {
  console.log(a)
    const dataGallery = a.map((comp, key) => <Fade delay={50} key={key}><div key={key} style={css} className="galleryPhoto" onClick={click}>
      <img src={location+"/images/gallery/"+comp} alt=""/>
      <div className="hoverImage" style={{  lineHeight: css.height+'px'}}><FontAwesomeIcon icon={['fas', 'search-plus']} /></div>
    </div></Fade>);
    return dataGallery
}

class GalleryBlock extends React.Component {
  constructor() {
    super();
    if(document.body.offsetWidth > 800){
      this.state = {
        height: (window.innerWidth / 4),
        width: (window.innerWidth / 4),
        gallegyHeight: ( (window.innerWidth / 4) * 2 )
      };
    }else{
      this.state = {
        height: (window.innerWidth / 2),
        width: (window.innerWidth / 2),
        gallegyHeight: ( (window.innerWidth / 4) * 3 )
      };
    }
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  updateDimensions() {
    if(document.body.offsetWidth > 800){
      this.setState({
        height: (window.innerWidth / 4),
        width: (window.innerWidth / 4),
        gallegyHeight: ( (window.innerWidth / 4) * 2 )
      });
    }else{
      this.setState({
        height: (window.innerWidth / 2),
        width: (window.innerWidth / 2),
        gallegyHeight: ( (window.innerWidth / 4) * 3 )
      });
    }
  }

  render() {
    return <div className="block gallery" id="GalleryBlock">
      <div className="galleryData" style={{height: this.state.gallegyHeight + "px"}}>
        {parseGallery(this.props.data.images, {height: this.state.height}, this.props.openphoto, this.props.myLocation)}
      </div>
      <div className="galleryFotterButton">
        <a href={'https://www.instagram.com/kalinich_nail_master/'} target="_blank" rel="noopener noreferrer"><div className="defaultButton showAllInstagram">наш Instagram</div></a>
      </div>
    </div>
  }
}

export default GalleryBlock;
