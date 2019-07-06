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
            icon: require('./images/icons/manik.svg'),
            text: 'Красивий манікюр не зріє називати візиткою дівчат, але він дійсно формує уявлення про ступінь уразливості людини. Прекрасний образ ніколи не буде завершений, якщо ваші ноготки не в порядку. Апаратний манікюр дає + 100% до впевненості та обов`язковості, а гелеве покриття укриває нігті і зробить їх здоровими.'
          },
          {
            title: 'Укріплення нігтів гелем',
            icon: require('./images/icons/gel.svg'),
            text: 'ЇЇ величність Мода — надзвичайно непередбачувана та примхлива леді. Сьогодні новинка мегапопулярна, а завтра про неї вже ніхто не згадає. Виняток – класичні, перевірені роками технології, тенденції та речі. Навіть, здавалося б, всесильна мода тут безсила. Адже природна краса – по-справжньому неповторна.'
          },
          {
            title: 'Корекція нігтів',
            icon: require('./images/icons/correction.svg'),
            text: 'Однією з найбільш затребуваних нині послуг салонів краси визнана корекція нігтів, що цілком зрозуміло. Оскільки нігті, а точніше - їх стан, є одним із головних зовнішніх ознак розвитку і функціонування організму. А корекція нігтів забезпечує респектабельний, привабливий, доглянутий вигляд власниці шикарного манікюру, завершуючи образ чарівної модниці.'
          },
          {
            title: 'Нарощення нігтів',
            icon: require('./images/icons/narost.svg'),
            text: 'Нарощування гелем проводиться для корекції довжини та форми нігтів. Процедура гарантує як мінімум 1 місяць експлуатації нарощеного матеріалу. Цей термін можна продовжити за умови проведення подальшої корекції. Гелеве нарощування служить якісною основою для будь-якого художнього оформлення нігтів.'
          },
          {
            title: 'Арт-дизайни',
            icon: require('./images/icons/art.svg'),
            text: 'В салоне Cristall працюють талантліві мастери. Вони возьмуться за створення навіть самого сложного малюнка. Для них не виникає проблем, що стосуються нігтів, а також тварин. Специалисты придадують ручку клієнтами неповторимості і унікальності. Арт-дизайн буде підходити під загальний образ людини і відповідати його втручанням і перевагам.'
          },
          {
            title: 'Педикюр',
            icon: require('./images/icons/pedicure.svg'),
            text: 'Красиві і доглянуті ноги - мрія багатьох. Така процедура, як апаратний педикюр, допоможе позбутися від грубої шкіри, а нігті зробить красивими'
          },
          {
            title: 'Курси манікюру / педикюру',
            icon: require('./images/icons/courses.svg'),
            text: 'Якщо ви вирішили опанувати професію майстра з манікюру, то ми радимо розпочати навчання саме у нас.'
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
