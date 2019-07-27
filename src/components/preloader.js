import React from 'react';
import ReactVivus from 'react-vivus';

class Preloader extends React.Component {
  render() {
    return <div className="Preloader" id="Preloader">
      <ReactVivus
          id="Cristall_logo"
          option={{
            file: this.props.myLocation + this.props.logotype,
            duration: 50,
            animTimingFunction: 'EASE',
            type: 'oneByOne'
          }}
        />
    </div>
  }
}

export default Preloader;
