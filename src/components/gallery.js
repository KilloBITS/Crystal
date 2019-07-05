import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let parseGallery = (a,css,click) => {
    const dataGallery = a.map((comp, key) => <div key={key} style={css} className="galleryPhoto" onClick={click}>
      <img src={comp.src} alt=""/>
      <div className="hoverImage" style={{  lineHeight: css.width+'px'}}><FontAwesomeIcon icon={['fas', 'search-plus']} /></div>
    </div>);
    return dataGallery
}

class GalleryBlock extends React.Component {
  constructor() {
    super();
    if(document.body.offsetWidth > 800){
      this.state = {
        openimagesrc: null,
        height: (window.innerWidth / 4)-5,
        width: (window.innerWidth / 4)-5
      };
    }else{
      this.state = {
        openimagesrc: null,
        height: (window.innerWidth / 2)-5,
        width: (window.innerWidth / 2)-5
      };
    }
    this.openphoto = this.openPhoto.bind(this);
    this.closephoto = this.closephoto.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  updateDimensions() {
    if(document.body.offsetWidth > 800){
      this.setState({
        height: (window.innerWidth / 4)-5,
        width: (window.innerWidth / 4)-5
      });
    }else{
      this.setState({
        height: (window.innerWidth / 2)-5,
        width: (window.innerWidth / 2)-5
      });
    }
  }

  openPhoto(a) {
    const imageURL = a.currentTarget.getElementsByTagName('img')[0].src;
    this.setState({
      openimagesrc: imageURL
    });
    console.log(imageURL)
  }

  closephoto(a) {
    this.setState({
      openimagesrc: null
    });
  }
  render() {
    return <div className="block gallery" id="GalleryBlock">
      <div className="blockTitle">
        {this.props.data.title}
      </div>
      <div className={(this.state.openimagesrc === null)?"imageModal hiden":"imageModal"} id="imageModal">
        <div className="imageModalBlock">
          <div className="closeimageModal" onClick={this.closephoto}>
            <FontAwesomeIcon icon={['fas', 'times']} />
          </div>
          <img src={this.state.openimagesrc} alt=""/>
        </div>
      </div>
      {parseGallery(this.props.data.images, {width: this.state.width, height: this.state.height}, this.openphoto )}
    </div>
  }
}

export default GalleryBlock;
