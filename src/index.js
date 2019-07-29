import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee , fas} from '@fortawesome/free-solid-svg-icons';

//Styles
import './styles/index.css';
import './styles/index.min.css';

//import components
import Menu from './includes/menu.js';
import Bar from './includes/bar.js';
import ImageModal from './includes/imagemodal.js';
//Block
import Preloader from './components/preloader.js';
import HeadBlock from './components/head.js';
import AboutBlock from './components/about.js';
import ServicesBlock from './components/services.js';

import StatisticBlock from './components/statistic.js'
import MailingBlock from './components/mailing.js';

import GalleryBlock from './components/gallery.js';
import StaffBlock from './components/staff.js';
import ContactsBlock from './components/contacts.js';
import MapBlock from './components/map.js';

import FooterBlock from './components/footer.js';

import AdminPanel from './components/adminPanel.js';

library.add(fab, faCheckSquare, faCoffee, fas);

class Crystal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      myLocation: (window.location.hostname === 'localhost')? (window.location.port === "3000")? window.location.origin.split('3000')[0]+'5002':window.location.origin:window.location.origin,
      isAdmin: false,
      login: '',
      password:'',
      isSignInUser: false,
      openedMenu: false,
      openimagesrc: null,
      title: 'Crystal',
      logotype: '/images/logotype.svg',
      logotypeFooter: '/images/logotype.svg',
      menu: [
        {
          title: 'Головна',
          toelement:'HeadBlock'
        },
        {
          title: 'Про нас',
          toelement:'AboutBlock'
        },
        {
          title: 'Послуги',
          toelement:'ServicesBlock'
        },
        {
          title: 'Галерея',
          toelement:'GalleryBlock'
        },
        {
          title: 'Персонал',
          toelement:'StaffBlock'
        },
        {
          title: 'Контакти',
          toelement:'ContactsBlock'
        }
      ],
      header: null,
      about: null,
      services: null,
      gallery: null,
      staff: null,
      constacts: {
        title: 'Контакти'
      }
    }
    this.openphoto = this.openPhoto.bind(this);
    this.closephoto = this.closephoto.bind(this);
  }
  componentDidMount(){
    axios.post(this.state.myLocation+'/getData').then(res => {
      console.log(res.data)
      this.setState({
        header: res.data.data.header,
        staff: res.data.data.staff,
        services: res.data.data.services,
        about: res.data.data.about,
        // gallery: res.data.data.gallery,
        isAdmin: res.data.data.isAdmin
      });
      setTimeout(()=>{
        document.getElementById('Preloader').className = 'Preloader fadeout';
        setTimeout(() => {
          document.getElementById('Preloader').style.display = 'none'
        }, 400);
      },1500);
    });
  }

  serviceUpdate(){
    axios.post(this.state.myLocation+'/getData').then(res => {

      this.setState({
        header: res.data.data.header,
        staff: res.data.data.staff,
        services: res.data.data.services,
        about: res.data.data.about,
        isAdmin: res.data.data.isAdmin
      });
    });
  }
  openCloseMenu(){
    this.setState({
      openedMenu: (this.state.openedMenu)?false:true
    });
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

  isSignIn(){
    let loginData = {
      l: this.state.login,
      p: this.state.password
    }
    axios.post('/signIn', loginData).then(res => {
      if(res.data.code === 200){
        console.log('все супер')
        this.setState({
          isAdmin: true
        });
        console.log(this.state.isAdmin)
      }else{
        this.setState({
          isAdmin: false
        });
      }
    });
  }

  keyUpChangeLogin(event){
    this.setState({login: event.target.value});
  }

  keyUpChangePassword(event){
    this.setState({password: event.target.value});
  }

  render(){
    return <div className="content" id="content">
      {(this.state.isAdmin)?<AdminPanel serviceUpdate={this.serviceUpdate.bind(this)} myLocation={this.state.myLocation} menu={this.state.menu}/>:null}
      <Preloader
        myLocation={this.state.myLocation}
        logotype={this.state.logotype}
      />
      <Menu myLocation={this.state.myLocation} data={this.state.menu} open={this.state.openedMenu} openclose={this.openCloseMenu.bind(this)}/>
      <Bar myLocation={this.state.myLocation} dataAbout={this.state.about} data={this.state.menu} open={this.state.openedMenu} openclose={this.openCloseMenu.bind(this)}/>
      <ImageModal myLocation={this.state.myLocation} openimagesrc={this.state.openimagesrc} closephoto={this.closephoto}/>
      {(this.state.header !== null)?<HeadBlock
        myLocation={this.state.myLocation}
        data={this.state.header}
        logotype={this.state.logotype}
      />:null}
      {(this.state.about !== null)?<AboutBlock myLocation={this.state.myLocation} data={this.state.about}/>:null}
      {(this.state.services !== null)?<ServicesBlock myLocation={this.state.myLocation} data={this.state.services} logotype={this.state.logotype}/>:null}
      <StatisticBlock myLocation={this.state.myLocation}/>
      <MailingBlock myLocation={this.state.myLocation}/>
      {(this.state.gallery !== null)?<GalleryBlock myLocation={this.state.myLocation} data={this.state.gallery} openphoto={this.openphoto}/>:null}
      {(this.state.staff !== null)?<StaffBlock myLocation={this.state.myLocation} data={this.state.staff} dataTest={this.state.gallery}/>:null}
      {(this.state.constacts !== null)?<ContactsBlock myLocation={this.state.myLocation} data={this.state.constacts}/>:null}
      <MapBlock myLocation={this.state.myLocation}/>
      <FooterBlock
        myLocation={this.state.myLocation}
        keyUpChangeLogin={this.keyUpChangeLogin}
        keyUpChangePassword={this.keyUpChangePassword}
        isAdmin={this.state.isAdmin}
        isSignIn={this.isSignIn}
        dataMenu={this.state.menu}
        dataContacts={this.state.constacts}
        logotype={this.state.logotypeFooter}
      />
    </div>
  }
}

ReactDOM.render(<Crystal/>, document.getElementById('root'));
