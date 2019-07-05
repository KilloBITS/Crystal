import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee , fas} from '@fortawesome/free-solid-svg-icons';

//Styles
import './styles/index.css';

//import components
import Menu from './includes/menu.js';
import Bar from './includes/bar.js';
//Block
import Preloader from './components/preloader.js'
import HeadBlock from './components/head.js'
import AboutBlock from './components/about.js'
import ServicesBlock from './components/services.js'
import GalleryBlock from './components/gallery.js'
import StaffBlock from './components/staff.js'
import ContactsBlock from './components/contacts.js'


library.add(fab, faCheckSquare, faCoffee, fas);

class Crystal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: 'Crystal',
      logotype: require( './images/logotype.svg'),
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
      header: {
        background: require( './images/header/1.jpg')
      },
      about: {
        title: 'Про нас',
        minitext: `У людині все має бути прекрасним! Адже багатий внутрішній світ підкреслює приваблива і доглянута зовнішність.
        Хочете виглядати приголомшливо? Тоді навідайтеся до Nail studio «Cristall».
        Наші умілі майстрині подбають про вас, «почаклувавши» над вашими нігтями чи бровами. Здавалося б, це зовсім незначні деталі,
        від яких не залежить загальне враження про людину. Проте, саме такі дрібниці видають людей успішних, доглянутих і красивих.`,
        minitext2: `Після візиту до нашого дивовижного закладу ви матимете розкішну зовнішність, стильний образ та чудовий настрій. Спробуйте, адже ви варті того, аби бути бездоганними!`,
        insta:'https://www.instagram.com/kalinich_nail_master/',
        facebook:'https://www.facebook.com/Ivanna_Nail-315013712266548/',
        email:'mailto:kalinich0107@gmail.com'
      },
      services: {
        title: 'Наші послуги',
        text: 'Побалуйте себе однією з нашийх пслуг. Наші фахівці з краси зроблять вас щасливим. Ви будете почувати себе краще, ніж будь-коли раніше.',
        myservice: [
          {
            title: 'Покриття нігтів гель лаком',
            icon: require('./images/icons/manik.svg')
          },
          {
            title: 'Укріплення нігтів гелем',
            icon: require('./images/icons/gel.svg')
          },
          {
            title: 'Корекція нігтів',
            icon: require('./images/icons/correction.svg')
          },
          {
            title: 'Нарощення нігтів',
            icon: require('./images/icons/narost.svg')
          },
          {
            title: 'Арт-дизайни',
            icon: require('./images/icons/art.svg')
          },
          {
            title: 'Педикюр',
            icon: require('./images/icons/pedicure.svg')
          },
          {
            title: 'Курси маникюру / педикюру',
            icon: require('./images/icons/courses.svg')
          },
        ]
      },
      gallery: {
        title: 'Фотогалерея',
        images:
          [
            {
              src: require('./images/gallery/1.jpg')
            },
            {
              src: require('./images/gallery/2.jpg')
            },
            {
              src: require('./images/gallery/3.jpg')
            },
            {
              src: require('./images/gallery/4.jpg')
            },
            {
              src: require('./images/gallery/5.jpg')
            },
            {
              src: require('./images/gallery/6.jpg')
            },
            {
              src: require('./images/gallery/7.jpg')
            }
          ]

      },
      staff: {
        title: 'Наші працівники'
      },
      constacts: {
        title: 'Контакти'
      }
    }
  }
  render(){
    return <div className="content" id="content">
      <Preloader logotype={this.state.logotype}/>
      <Menu data={this.state.menu}/>
      <Bar data={this.state.menu}/>
      <HeadBlock data={this.state.header} logotype={this.state.logotype}/>
      <AboutBlock data={this.state.about}/>
      <ServicesBlock data={this.state.services}/>
      <GalleryBlock data={this.state.gallery}/>
      <StaffBlock data={this.state.staff}/>
      <ContactsBlock data={this.state.constacts}/>
    </div>
  }
}
ReactDOM.render(<Crystal />, document.getElementById('root'));
