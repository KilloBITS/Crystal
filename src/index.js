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
      modelheader: '/images/model.png',
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
        background: '/images/header/1.jpg'
      },
      about: {
        bg1: '/images/bg1.png',
        bg2: '/images/bg2.png',
        title: 'Про нас',
        minitext: `У людині все має бути прекрасним! Адже багатий внутрішній світ підкреслює приваблива і доглянута зовнішність.
        Хочете виглядати приголомшливо? Тоді навідайтеся до Nail studio «Cristall».
        Наші умілі майстрині подбають про вас, «почаклувавши» над вашими нігтями чи бровами. Здавалося б, це зовсім незначні деталі,
        від яких не залежить загальне враження про людину. Проте, саме такі дрібниці видають людей успішних, доглянутих і красивих.`,
        minitext2: `Після візиту до нашого дивовижного закладу ви матимете розкішну зовнішність, стильний образ та чудовий настрій. Спробуйте, адже ви варті того, аби бути бездоганними!`,
        insta:'https://www.instagram.com/kalinich_nail_master/',
        facebook:'https://www.facebook.com/Ivanna_Nail-315013712266548/',
        email:'mailto:kalinich0107@gmail.com',
        viber:'viber://chat?number=+380978056953',
      },
      services: {
        title: 'Наші послуги',
        text: 'Побалуйте себе однією з нашийх пслуг. Наші фахівці з краси зроблять вас щасливим. Ви будете почувати себе краще, ніж будь-коли раніше.',
        myservice: [
          {
            title: 'Покриття нігтів гель лаком',
            icon: '/images/icons/gel.svg',
            text: 'Красивий манікюр не зріє називати візиткою дівчат, але він дійсно формує уявлення про ступінь уразливості людини. Прекрасний образ ніколи не буде завершений, якщо ваші ноготки не в порядку. Апаратний манікюр дає + 100% до впевненості та обов`язковості, а гелеве покриття укриває нігті і зробить їх здоровими.'
          },
          {
            title: 'Укріплення нігтів гелем',
            icon: '/images/icons/manik.svg',
            text: 'ЇЇ величність Мода — надзвичайно непередбачувана та примхлива леді. Сьогодні новинка мегапопулярна, а завтра про неї вже ніхто не згадає. Виняток – класичні, перевірені роками технології, тенденції та речі. Навіть, здавалося б, всесильна мода тут безсила. Адже природна краса – по-справжньому неповторна.'
          },
          {
            title: 'Корекція нігтів',
            icon: '/images/icons/correction.svg',
            text: 'Однією з найбільш затребуваних нині послуг салонів краси визнана корекція нігтів, що цілком зрозуміло. Оскільки нігті, а точніше - їх стан, є одним із головних зовнішніх ознак розвитку і функціонування організму. А корекція нігтів забезпечує респектабельний, привабливий, доглянутий вигляд власниці шикарного манікюру, завершуючи образ чарівної модниці.'
          },
          {
            title: 'Нарощення нігтів',
            icon: '/images/icons/narost.svg',
            text: 'Нарощування гелем проводиться для корекції довжини та форми нігтів. Процедура гарантує як мінімум 1 місяць експлуатації нарощеного матеріалу. Цей термін можна продовжити за умови проведення подальшої корекції. Гелеве нарощування служить якісною основою для будь-якого художнього оформлення нігтів.'
          },
          {
            title: 'Арт-дизайни',
            icon: '/images/icons/art.svg',
            text: 'В салоне Cristall працюють талантліві мастери. Вони возьмуться за створення навіть самого сложного малюнка. Для них не виникає проблем, що стосуються нігтів, а також тварин. Специалисты придадують ручку клієнтами неповторимості і унікальності. Арт-дизайн буде підходити під загальний образ людини і відповідати його втручанням і перевагам.'
          },
          {
            title: 'Педикюр',
            icon: '/images/icons/pedicure.svg',
            text: 'Красиві і доглянуті ноги - мрія багатьох. Така процедура, як апаратний педикюр, допоможе позбутися від грубої шкіри, а нігті зробить красивими'
          },
          {
            title: 'Корекція брів',
            icon: '/images/icons/brow.svg',
            text: 'Про брови зараз говорять на всіляких beauty-майданчиках. В модних журналах, на сайтах присвячених красі, в інтерв`ю по телебаченню і радіо останні роки невпинно лунають заклики стилістів-візажистів приділити увагу своїм бровам.'
          },
          {
            title: 'Курси манікюру / педикюру',
            icon: '/images/icons/courses.svg',
            text: 'Якщо ви вирішили опанувати професію майстра з манікюру, то ми радимо розпочати навчання саме у нас.'
          },
        ]
      },
      gallery: {
        title: 'Фотогалерея',
        images:
          [
            {
              src: '/images/gallery/1.jpg'
            },
            {
              src: '/images/gallery/2.jpg'
            },
            {
              src: '/images/gallery/3.jpg'
            },
            {
              src: '/images/gallery/4.jpg'
            },
            {
              src: '/images/gallery/5.jpg'
            },
            {
              src: '/images/gallery/6.jpg'
            },
            {
              src: '/images/gallery/7.jpg'
            },
            {
              src: '/images/gallery/8.jpg'
            }
          ]

      },
      staff: {
        title: 'Наші працівники',
        staffData: [
          {
            title: 'Іванна',
            photoOne: '/staff/1-1.jpg',
            photoTwo: '/staff/1-2.jpg',
            text: '• Майстер манікюру •',
            fulltext:`Nail мастер тренер Іванна Засновниця студії Cristall
            Володіє всіма техніками манікюра, улюблена з яких апаратний манікюр❤️
            Стаж роботи 5років. на протязі яких було пройдено багато курсів по підвищенню кваліфікації
            у кращих тренерів України.
            Майстер тренер курсів:
            -«Nail master з нуля»
            -підвищення кваліфікації «Апаратний манікюр»
            -підвищення кваліфікації «Комбі манікюр 1+1 та френч стик в стик»
            -курс «Акварель»`
          },
          {
            title: 'Каміла',
            photoOne: '/staff/2-2.jpg',
            photoTwo: '/staff/2-1.jpg',
            text: '• Майстер манікюру •',
            fulltext:`Top master Каміла
            Володіє всіма техніками манікюра, улюблена з яких комбі манікюр
            Майстер естетичного педикюра, ваші ніжки в надійних руках💪🏻
            Стаж роботи 2 роки, на протязі яких було пройдено багато курсів по підвищенню кваліфікації у кращих тренерів України.
            Відповідальна, творча, комунікабельна, старанна.`
          },
          {
            title: 'Юля',
            photoOne: '/staff/3-2.jpg',
            photoTwo: '/staff/3-1.jpg',
            text: '• Майстер манікюру •',
            fulltext:`Майстер студії Cristall Юля
            Майстер манікюра, ідеально володіє технікою комбіманюра та класичного манікюра. Стаж роботи 1 рік.
            Завжди комунікабельна, щира до своїх клієнтів, життєрадісна, Живчик нашої студії`
          },
          {
            title: 'Наталія',
            photoOne: '/staff/null.png',
            photoTwo: '/staff/null.png',
            text: '• Косметолог •',
            fulltext:`Brow master студії Cristall
            Хочете ідеальні бровки?! Тоді вам до нашого майстра Крістіни.
            -Моделювання брів;
            -покраска фарбою Elan 💪🏻
            Стійкість фарби на шкірі 5-14днів;
            На волосках 3-5 тижнів.
            Майстер бровіст працює по записах.
            Ввічлива, доброзичлива, та енергійна
            Ваші бровки в надійних руках 😉`
          },
          {
            title: 'Яна',
            photoOne: '/staff/5-1.jpg',
            photoTwo: '/staff/5-2.jpg',
            text: '• Майстер з нарощення вій •',
            fulltext:`Яна Lashmaker студії Cristsll💎
            Наша чарівниця з нарощення вій! Досвід роботи 1рік.
            Ввічлива, приємна, доброзичлива та майстер своєї справи на всі 100%
            Ваш ідеальний погляд в руках нашої Яночки`
          },
          {
            title: 'Крістіна',
            photoOne: '/staff/6-1.jpg',
            photoTwo: '/staff/6-2.jpg',
            text: '• Майстер бровіст •',
            fulltext:`Brow master студії Cristall
            Хочете ідеальні бровки?! Тоді вам до нашого майстра Крістіни.
            -Моделювання брів;
            -покраска фарбою Elan 💪🏻
            Стійкість фарби на шкірі 5-14днів;
            На волосках 3-5 тижнів.
            Майстер бровіст працює по записах.
            Ввічлива, доброзичлива, та енергійна
            Ваші бровки в надійних руках 😉`
          },
          {
            title: 'Крістіна',
            photoOne: '/staff/4-1.jpg',
            photoTwo: '/staff/4-2.jpg',
            text: '• Майстер манікюру •',
            fulltext:`Майстер студії Cristall Крістіна
            Закінчила базовий курс по манікюру та естетичному педикюру в нашій студії.
            Володіє техніками: класичного та комбіманікюра.
            Ідеально володіє стемпінгом.
            Відповідальна, комунікабельна, творча та енергійна.`
          }

        ]
      },
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
        isAdmin: res.data.data.isAdmin,
        header: res.data.data.header,
        gallery: res.data.data.gallery,
        about: res.data.data.about,
        staff: res.data.data.staff,
        services: res.data.data.services,
        menu: res.data.data.menu,
        constacts: res.data.data.constacts
      });
    })
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
      {(this.state.isAdmin)?<AdminPanel myLocation={this.state.myLocation} menu={this.state.menu}/>:null}
      <Preloader myLocation={this.state.myLocation} logotype={this.state.logotype}/>
      <Menu myLocation={this.state.myLocation} data={this.state.menu} open={this.state.openedMenu} openclose={this.openCloseMenu.bind(this)}/>
      <Bar myLocation={this.state.myLocation} dataAbout={this.state.about} data={this.state.menu} open={this.state.openedMenu} openclose={this.openCloseMenu.bind(this)}/>
      <ImageModal myLocation={this.state.myLocation} openimagesrc={this.state.openimagesrc} closephoto={this.closephoto}/>
      <HeadBlock myLocation={this.state.myLocation} data={this.state.header} logotype={this.state.logotype} modelheader={this.state.modelheader}/>
      <AboutBlock myLocation={this.state.myLocation} data={this.state.about}/>
      <ServicesBlock myLocation={this.state.myLocation} data={this.state.services} logotype={this.state.logotype}/>
      <StatisticBlock myLocation={this.state.myLocation}/>
      <MailingBlock myLocation={this.state.myLocation}/>
      <GalleryBlock myLocation={this.state.myLocation} data={this.state.gallery} openphoto={this.openphoto}/>
      <StaffBlock myLocation={this.state.myLocation} data={this.state.staff} dataTest={this.state.gallery}/>
      <ContactsBlock myLocation={this.state.myLocation} data={this.state.constacts}/>
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
