import React from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let parseGallery = (a,css,click) => {
    let myLocation = (window.location.hostname === 'localhost')? window.location.origin.split('3000')[0]+'5002':window.location.origin;
    const dataGallery = a.map((comp, key) => <Fade delay={50} key={key}><div key={key} style={css} className="galleryPhoto" onClick={click}>
      <img src={myLocation+comp.src} alt=""/>
      <div className="hoverImage" style={{  lineHeight: css.width+'px'}}><FontAwesomeIcon icon={['fas', 'search-plus']} /></div>
    </div></Fade>);
    return dataGallery
}

class GalleryBlock extends React.Component {
  constructor() {
    super();
    if(document.body.offsetWidth > 800){
      this.state = {
        height: (window.innerWidth / 4),
        width: (window.innerWidth / 4)
      };
    }else{
      this.state = {
        height: (window.innerWidth / 2),
        width: (window.innerWidth / 2)
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
        width: (window.innerWidth / 4)
      });
    }else{
      this.setState({
        height: (window.innerWidth / 2),
        width: (window.innerWidth / 2)
      });
    }
  }


  render() {
    return <div className="block gallery" id="GalleryBlock">
      <div className="galleryData">
        {parseGallery(this.props.data.images, {width: this.state.width, height: this.state.height}, this.props.openphoto, this.props.closephoto )}
      </div>
      <div className="galleryFotterButton">
        <div className="defaultButton showAllPhoto">Більше зображень</div>
        <div className="defaultButton showAllInstagram">Instagram</div>
      </div>
    </div>
  }
}

export default GalleryBlock;
