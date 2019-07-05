import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee , fas} from '@fortawesome/free-solid-svg-icons';

//Styles
import './styles/index.css';

//import components
import Menu from './includes/menu.js'
//Block
import Preloader from './components/preloader.js'
import HeadBlock from './components/head.js'
import AboutBlock from './components/about.js'


library.add(fab, faCheckSquare, faCoffee, fas);

class Crystal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: 'Crystal',
      logotype: require( './images/logotype.svg'),
      menu: [
        {
          title: 'Главная',
          toelement:'HeadBlock'
        },
        {
          title: 'О нас',
          toelement:'AboutBlock'
        },
        {
          title: 'Услуги',
          toelement:''
        },
        {
          title: 'Галерея',
          toelement:''
        },
        {
          title: 'Персонал',
          toelement:''
        },
        {
          title: 'Контакты',
          toelement:''
        }
      ],
      header: {
        background: require( './images/header/1.jpg')
      }
    }
  }
  render(){
    return <div className="content" id="content">
      <Preloader logotype={this.state.logotype}/>
      <Menu data={this.state.menu}/>
      <HeadBlock data={this.state.header}/>
      <AboutBlock/>
    </div>
  }
}
ReactDOM.render(<Crystal />, document.getElementById('root'));
