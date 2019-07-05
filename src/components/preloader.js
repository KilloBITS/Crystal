import React from 'react';
import ReactVivus from 'react-vivus';

class Preloader extends React.Component {
  closeLoader(){
      document.getElementById('Preloader').className = 'Preloader fadeout';
      setTimeout(() => {
        document.getElementById('Preloader').style.display = 'none'
      }, 400);
  }
  render() {
    return <div className="Preloader" id="Preloader">
      <ReactVivus
          id="Cristall_logo"
          option={{
            file: this.props.logotype,
            duration: 50,
            animTimingFunction: 'EASE',
            type: 'oneByOne',
            onReady: console.log
          }}
          callback={this.closeLoader.bind(this)}
        />
    </div>
  }
}

export default Preloader;
