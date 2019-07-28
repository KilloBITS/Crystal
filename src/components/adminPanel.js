import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadingArt from '../images/heading.js';
import '../styles/admin.css';
import '../styles/admin.min.css';

var selectedEditedZone = null;
var editZoneData = {};
var dontSave = true;
var globalLocation ='';
var globalName = null;

let selectMethod = (name, location) => {
  globalName = name;
  const selectDom = document.getElementById(name);
  const selectDomClass = selectDom.getElementsByClassName('miniDataEditedDataClass')[0]
  while (selectDomClass.firstChild) {
      selectDomClass.removeChild(selectDomClass.firstChild);
  }
  selectDom.className ='dataFromEdited show';
  selectDom.getElementsByClassName('miniDataEditedLoader')[0].className = 'miniDataEditedLoader show';
  selectedEditedZone = null;
  axios.post(location+'/get'+name).then(res => {
     console.log(res.data);
     editZoneData = res.data.data;
     if(selectDom.getElementsByClassName('miniTitleEditedLength')[0] !== undefined){
       selectDom.getElementsByClassName('miniTitleEditedLength')[0].innerHTML = " ("+res.data.data.length+")";
     }
     selectedEditedZone = name;
     if(name === 'staffEdited'){
       document.getElementById('newStaffEdited').className = 'newEditedBlock show';
       //Название
       let titleEditServiceText = document.createElement('input');
       titleEditServiceText.className = "titleEditText globaleTextEditor";
       titleEditServiceText.onkeyup = (el) => {
         dontSave = false;
         editZoneData[0].title = el.target.value;
       };
       titleEditServiceText.value = res.data.data[0].title;
       selectDomClass.appendChild(titleEditServiceText);

       for(let i = 0; i < res.data.data[0].staffData.length; i++){
         //Блок персонала
         let staffEditBlock = document.createElement('div');
         staffEditBlock.className = "editBlock";
         selectDomClass.appendChild(staffEditBlock);
         //Заголовок
         let titleEditStaffText = document.createElement('input');
         titleEditStaffText.className = "titleEditText";
         titleEditStaffText.value = res.data.data[0].staffData[i].title;
         titleEditStaffText.onkeyup = (el) => {
           dontSave = false;
           editZoneData[0].staffData.find(x => x.AI === res.data.data[0].staffData[i].AI).title = el.target.value;
         };
         staffEditBlock.appendChild(titleEditStaffText);
         //Должность
         let editDolg = document.createElement('input');
         editDolg.className = "titleEditText";
         editDolg.value = res.data.data[0].staffData[i].text;
         editDolg.onkeyup = (el) => {
           dontSave = false;
           editZoneData[0].staffData.find(x => x.AI === res.data.data[0].staffData[i].AI).text = el.target.value;
         };
         staffEditBlock.appendChild(editDolg);
         //Описание
         let titleEditStaffTextArea = document.createElement('textarea');
         titleEditStaffTextArea.className = "titleEditTextArea";
         titleEditStaffTextArea.value = res.data.data[0].staffData[i].fulltext;
         titleEditStaffTextArea.onkeyup = (el) => {
           dontSave = false;
           editZoneData[0].staffData.find(x => x.AI === res.data.data[0].staffData[i].AI).fulltext = el.target.value;
         };
         staffEditBlock.appendChild(titleEditStaffTextArea);
         //фото блок
         let imagesOneTwoBlock = document.createElement('div');
         imagesOneTwoBlock.className = "imagesOneTwoBlock";
         staffEditBlock.appendChild(imagesOneTwoBlock);
         //imgOne
         let imgOne = document.createElement('div');
         imgOne.className = "imgEdiBlock imgOne";
         imgOne.style.backgroundImage = "url("+location+"/images"+res.data.data[0].staffData[i].photoOne+")";
         imagesOneTwoBlock.appendChild(imgOne);

         let imageHoverOne = document.createElement('div');
         imageHoverOne.className = "imageHover";
         imageHoverOne.innerHTML = "Вибрать";
         imgOne.appendChild(imageHoverOne);
         //imgTwo
         let imgTwo = document.createElement('div');
         imgTwo.className = "imgEdiBlock imgTwo";
         imgTwo.style.backgroundImage = "url("+location+"/images"+res.data.data[0].staffData[i].photoTwo+")";
         imagesOneTwoBlock.appendChild(imgTwo);

         let imageHoverTwo = document.createElement('div');
         imageHoverTwo.className = "imageHover";
         imageHoverTwo.innerHTML = "Вибрать";
         imgTwo.appendChild(imageHoverTwo);
       }
     } // Готово
     if(name === 'servicesEdited'){
       document.getElementById('newServicesEdited').className = 'newEditedBlock show';
       //Название
       let titleEditServiceText = document.createElement('input');
       titleEditServiceText.className = "titleEditText globaleTextEditor";
       titleEditServiceText.onkeyup = (el) => {
         dontSave = false;
         editZoneData[0].title = el.target.value;
       };
       titleEditServiceText.value = res.data.data[0].title;
       selectDomClass.appendChild(titleEditServiceText);

       //subtitle
       let subtitle = document.createElement('textarea');
       subtitle.className = "subtitle";
       subtitle.value = res.data.data[0].text;
       subtitle.onkeyup = (el) => {
         dontSave = false;
         editZoneData[0].text = el.target.value;
       };
       selectDomClass.appendChild(subtitle);

       for(let i = 0; i < res.data.data[0].myservice.length; i++){
           let serviceEditBlock = document.createElement('div');
           serviceEditBlock.className = "editBlock";
           selectDomClass.appendChild(serviceEditBlock);
           //Название
           let titleEditServiceText = document.createElement('input');
           titleEditServiceText.className = "titleEditText";
           titleEditServiceText.onkeyup = (el) => {
            dontSave = false;
            editZoneData[0].myservice.find(x => x.AI === res.data.data[0].myservice[i].AI).title = el.target.value;
           };
           titleEditServiceText.value = res.data.data[0].myservice[i].title;
           serviceEditBlock.appendChild(titleEditServiceText);

           let bigServicesDataBlock = document.createElement('div');
           bigServicesDataBlock.className = "bigServicesDataBlock";
           serviceEditBlock.appendChild(bigServicesDataBlock);
           //Изображение
           let miniIconsServicesAdmin = document.createElement('div');
           miniIconsServicesAdmin.className = "miniIconsServicesAdmin";
           bigServicesDataBlock.appendChild(miniIconsServicesAdmin);

           let miniServiceImgIcon = document.createElement('img');
           miniServiceImgIcon.className = 'miniServiceImgIcon';
           miniServiceImgIcon.src = location+res.data.data[0].myservice[i].icon;
           miniIconsServicesAdmin.appendChild(miniServiceImgIcon);
           //Описание
           let titleEditTextArea = document.createElement('textarea');
           titleEditTextArea.className = "titleEditTextArea";
           titleEditTextArea.value = res.data.data[0].myservice[i].text;
           titleEditTextArea.onkeyup = (el) => {
             dontSave = false;
            editZoneData[0].myservice.find(x => x.AI === res.data.data[0].myservice[i].AI).text = el.target.value;
             // editZoneData.find(x => x.AI === res.data.data[i].AI).text = el.target.value;
           };
           bigServicesDataBlock.appendChild(titleEditTextArea);
        }
     } //готово
     if(name === 'galleryEdited'){
       document.getElementById('newGalleryEdited').className = 'newEditedBlock show';
       //Название
       let titleEditServiceText = document.createElement('input');
       titleEditServiceText.className = "titleEditText globaleTextEditor";
       titleEditServiceText.onkeyup = (el) => {
         dontSave = false;
         editZoneData[0].title = el.target.value;
       };
       titleEditServiceText.value = res.data.data[0].title;
       selectDomClass.appendChild(titleEditServiceText);

       for(let i = 0; i < res.data.data[0].images.length; i++){
         let serviceEditBlock = document.createElement('div');
         serviceEditBlock.className = "editBlock";
         selectDomClass.appendChild(serviceEditBlock);

         let imageDOM = document.createElement('div');
         imageDOM.className = "imageDOMEdit";
         imageDOM.style.backgroundImage = "url("+location+res.data.data[0].images[i].src+")";
         selectDomClass.appendChild(imageDOM);

         let imageHoverDelete = document.createElement('div');
         imageHoverDelete.className = "imageHoverDelete";
         imageDOM.appendChild(imageHoverDelete);
       }
     }
     if(name === 'headEdited'){
       let selectHewHeadImage = document.createElement('input');
       selectHewHeadImage.className = "selectHewHeadImage";
       selectHewHeadImage.id = "selectHewHeadImage";
       selectHewHeadImage.type = 'file';
       selectHewHeadImage.onchange = function(el){
         document.getElementById('loaderHeaderImages').style.opacity = '1';
         var reader = new FileReader();
         reader.readAsDataURL(el.target.files[0]);
         reader.onload = function () {
           axios.post(location+'/saveheadEdited', {image: reader.result}).then(res => {
             console.log(res.data);
             document.getElementById('loaderHeaderImages').style.opacity = '0';
             document.getElementById('imageDOMHeadeEdit').style.backgroundImage = "url("+location+res.data.image+")";
             document.getElementById("backgroundPhoto").setAttribute('src',location+res.data.image);
           });
         };
       };
       selectDomClass.appendChild(selectHewHeadImage);

       document.getElementById('newHeadEdited').className = 'newEditedBlock show';
       let imageDOMHeadeEdit = document.createElement('div');
       imageDOMHeadeEdit.className = "imageDOMHeadeEdit";
       imageDOMHeadeEdit.id = "imageDOMHeadeEdit";
       imageDOMHeadeEdit.style.backgroundImage = "url("+location+res.data.data[0].background+")";
       selectDomClass.appendChild(imageDOMHeadeEdit);

       let loaderHeaderImages = document.createElement('div');
       loaderHeaderImages.className = "loaderHeaderImages";
       loaderHeaderImages.id = "loaderHeaderImages";
       imageDOMHeadeEdit.appendChild(loaderHeaderImages);

       let imageHoverDelete = document.createElement('label');
       imageHoverDelete.className = "imageHoverDeleteImage";
       imageHoverDelete.innerHTML = 'Удалить изображение';
       imageHoverDelete.onclick = function(){
         imageDOMHeadeEdit.style.opacity = '1';
         axios.post(location+'/removeHeadPhoto').then(res => {
           imageDOMHeadeEdit.style.opacity = '0';
           imageDOMHeadeEdit.style.backgroundImage = "none";
         });
       }
       imageDOMHeadeEdit.appendChild(imageHoverDelete);

       let imageHoverUpdate = document.createElement('label');
       imageHoverUpdate.className = "imageHoverUpdateImage";
       imageHoverUpdate.htmlFor = "selectHewHeadImage"
       imageHoverUpdate.innerHTML = 'Выбрать другое изображение';
       imageDOMHeadeEdit.appendChild(imageHoverUpdate);
     }  // Готово
     if(name === 'aboutEdited'){
       document.getElementById('newAboutEdited').className = 'newEditedBlock show';
       //Название
       let titleEditServiceText = document.createElement('input');
       titleEditServiceText.className = "titleEditText globaleTextEditor";
       titleEditServiceText.onkeyup = (el) => {
         dontSave = false;
         editZoneData[0].title = el.target.value;
       };
       titleEditServiceText.value = res.data.data[0].title;
       selectDomClass.appendChild(titleEditServiceText);

       let aboutEditBlock = document.createElement('div');
       aboutEditBlock.className = "editBlock";
       selectDomClass.appendChild(aboutEditBlock);
       //Описание
       let minitext = document.createElement('textarea');
       minitext.className = "titleEditTextArea";
       minitext.value = res.data.data[0].minitext;
       minitext.onkeyup = (el) => {
         dontSave = false;
         editZoneData[0].minitext = el.target.value;
       };
       aboutEditBlock.appendChild(minitext);
       //Описание 2
       let minitext2 = document.createElement('textarea');
       minitext2.className = "titleEditTextArea";
       minitext2.value = res.data.data[0].minitext2;
       minitext2.onkeyup = (el) => {
         dontSave = false;
         editZoneData[0].minitext2 = el.target.value;
       };
       aboutEditBlock.appendChild(minitext2);
       //insta
       let insta = document.createElement('input');
       insta.className = "titleEditText";
       insta.value = res.data.data[0].insta;
       insta.onkeyup = (el) => {
         dontSave = false;
         editZoneData[0].insta = el.target.value;
       };
       aboutEditBlock.appendChild(insta);
       //facebook
       let facebook = document.createElement('input');
       facebook.className = "titleEditText";
       facebook.value = res.data.data[0].facebook;
       facebook.onkeyup = (el) => {
         dontSave = false;
         editZoneData[0].facebook = el.target.value;
       };
       aboutEditBlock.appendChild(insta);
       //email
       let email = document.createElement('input');
       email.className = "titleEditText";
       email.value = res.data.data[0].email;
       email.onkeyup = (el) => {
         dontSave = false;
         editZoneData[0].email = el.target.value;
       };
       aboutEditBlock.appendChild(email);
       //viber
       let viber = document.createElement('input');
       viber.className = "titleEditText";
       viber.value = res.data.data[0].viber;
       viber.onkeyup = (el) => {
         dontSave = false;
         editZoneData[0].viber = el.target.value;
       };
       aboutEditBlock.appendChild(viber);

       //фото блок
       let imagesOneTwoBlock = document.createElement('div');
       imagesOneTwoBlock.className = "imagesOneTwoBlock imageBlockFromAbout";
       aboutEditBlock.appendChild(imagesOneTwoBlock);

       let selectHewAboutImageOne = document.createElement('input');
       selectHewAboutImageOne.className = "selectHewAboutImage";
       selectHewAboutImageOne.type = 'file';
       selectHewAboutImageOne.id = 'selectHewAboutImageOne';
       selectHewAboutImageOne.onchange = function(el){
         let reader = new FileReader();
         reader.readAsDataURL(el.target.files[0]);
         reader.onload = function () {
           axios.post(location+'/changeAboutImageOne', {image: reader.result}).then(res => {
             document.getElementById("twoImageAbout").src = location+"/images/bg1.png?" + new Date().getTime();
             el.target.value ='';
           });
         };
       };
       imagesOneTwoBlock.appendChild(selectHewAboutImageOne);

       let selectHewAboutImageTwo = document.createElement('input');
       selectHewAboutImageTwo.className = "selectHewAboutImage";
       selectHewAboutImageTwo.type = 'file';
       selectHewAboutImageTwo.id = 'selectHewAboutImageTwo';
       selectHewAboutImageTwo.onchange = function(el){
         let reader = new FileReader();
         reader.readAsDataURL(el.target.files[0]);
         reader.onload = function () {
           axios.post(location+'/changeAboutImageTwo', {image: reader.result}).then(res => {
             document.getElementById("oneImageAbout").src = location+"/images/bg2.png?" + new Date().getTime();
             el.target.value ='';
           });
         };
       };
       imagesOneTwoBlock.appendChild(selectHewAboutImageTwo);

       //imgOne
       let imgOne = document.createElement('div');
       imgOne.className = "imgEdiBlock imgOne";
       imgOne.style.backgroundImage = "url("+location + res.data.data[0].bg1+")";
       imagesOneTwoBlock.appendChild(imgOne);

       let imageHoverOne = document.createElement('label');
       imageHoverOne.className = "imageHover";
       imageHoverOne.innerHTML = "Вибрать";
       imageHoverOne.htmlFor = "selectHewAboutImageOne";
       imgOne.appendChild(imageHoverOne);
       //imgTwo
       let imgTwo = document.createElement('div');
       imgTwo.className = "imgEdiBlock imgTwo";
       imgTwo.style.backgroundImage = "url("+location+res.data.data[0].bg2+")";
       imagesOneTwoBlock.appendChild(imgTwo);

       let imageHoverTwo = document.createElement('label');
       imageHoverTwo.className = "imageHover";
       imageHoverTwo.innerHTML = "Вибрать";
       imageHoverTwo.htmlFor = "selectHewAboutImageTwo";
       imgTwo.appendChild(imageHoverTwo);

       //checker
       let checkerBlock = document.createElement('div');
       checkerBlock.className = "checkerBlock";
       aboutEditBlock.appendChild(checkerBlock);

       let inputChecker = document.createElement('input');
       inputChecker.className = "inputChecker";
       inputChecker.id = "inputOnlineChecker";
       inputChecker.type = 'checkbox';
       if(res.data.data[0].writeOnline){
         inputChecker.setAttribute('checked','checked')
       }
       inputChecker.onchange = function(el){
         if(el.target.checked){
           document.getElementById('aboutFooterSvg').style.height = '540px';
           document.getElementById('onlineWritingBlock').className = 'blockFeedBack show';
         }else{
           document.getElementById('aboutFooterSvg').style.height = '175px';
           document.getElementById('onlineWritingBlock').className = 'blockFeedBack';
         }

         axios.post(location+'/changeOnlineChecker',{writeOnline: el.target.checked}).then(res => {
          console.log(res.data)
         });
       };
       checkerBlock.appendChild(inputChecker);

       let checkerLabel = document.createElement('label');
       checkerLabel.className = "checkerLabel";
       checkerLabel.innerHTML = "Запись онлайн";
       checkerLabel.htmlFor = "inputOnlineChecker";
       checkerBlock.appendChild(checkerLabel);
     } // Готово
     if(name === 'contactsEdited'){
       document.getElementById('newContactsEdited').className = 'newEditedBlock show';
       //Название
       let titleEditServiceText = document.createElement('input');
       titleEditServiceText.className = "titleEditText globaleTextEditor";
       titleEditServiceText.onkeyup = (el) => {
         dontSave = false;
         editZoneData[0].title = el.target.value;
       };
       titleEditServiceText.value = res.data.data[0].title;
       selectDomClass.appendChild(titleEditServiceText);
     }
     selectDom.getElementsByClassName('miniDataEditedLoader')[0].className = 'miniDataEditedLoader';
  });
}

let toTopThisScroll = (e) => {
  let toTopposition = document.getElementById(e.target.getAttribute('toelement')).offsetTop;
  let location = e.target.getAttribute('location');
  document.getElementById('content').scrollTo({top: toTopposition, behavior: 'smooth'});
  document.getElementById('defaultEditData').style.display = 'none';
  let clickedElement = e.target.getAttribute('toelement');

  for(let i = 0; i < document.getElementsByClassName('dataFromEdited').length; i++){
    if(document.getElementsByClassName('newEditedBlock')[i] !== undefined){
      document.getElementsByClassName('newEditedBlock')[i].className = 'newEditedBlock';
    }
    document.getElementsByClassName('menu_btnNav')[i].className = "menu_btnNav";
    document.getElementsByClassName('dataFromEdited')[i].className = 'dataFromEdited';
  }
  switch(clickedElement){
    case 'HeadBlock': selectMethod('headEdited', location);break;
    case 'AboutBlock': selectMethod('aboutEdited', location);break;
    case 'ServicesBlock': selectMethod('servicesEdited', location);break;
    case 'GalleryBlock': selectMethod('galleryEdited', location);break;
    case 'StaffBlock': selectMethod('staffEdited', location);break;
    case 'ContactsBlock': selectMethod('contactsEdited', location);break;
    default: selectMethod('headEdited');
  }

  e.target.className = 'menu_btnNav active';
}

let parseMenu = (dataMenu, m, loc) => {
  if(m){
    const menuBtn = dataMenu.map((comp, key) => <div key={key} onClick={toTopThisScroll.bind(this)} id={"buttonIds_fron_"+key} location={loc} toelement={comp.toelement} className="menu_btnNav">{comp.title}</div>);
    return menuBtn
  }else{
    return <div className="menu_btn">Not data found</div>
  }
}

class AdminPanel extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      openPanel: false,
      saving: false,
      openAdd: false
    }
  }

  openAdminPanelMethod(){
    this.setState({
      openPanel: (this.state.openPanel)?false:true
    })
  }

  saveEdited(){
    if(selectedEditedZone !== null){
      if(!dontSave){
        const selectDom = document.getElementById(globalName);
        selectDom.getElementsByClassName('miniDataEditedLoader')[0].className = 'miniDataEditedLoader show';
        this.setState({saving: true});
        axios.post(this.props.myLocation+'/save'+selectedEditedZone, {data:editZoneData}).then(res => {
          this.setState({saving: false});
          dontSave = true;
          selectDom.getElementsByClassName('miniDataEditedLoader')[0].className = 'miniDataEditedLoader';
          this.props.serviceUpdate()
        });
      }else{
        console.log('есть несохраненные изминения')
      }
    }
  }

  openAddBlock(){
    this.setState({
      openAdd: true
    });
  }

  closeAdded(){
    document.getElementById('newStaffsTitle').value = '';
    document.getElementById('newStaffsText').value = '';
    document.getElementById('newStaffsInstagram').value = '';
    document.getElementById('newStaffsEmail').value = '';
    document.getElementById('newStaffsFacebook').value = '';
    document.getElementById('newStaffsfullText').value = '';
    document.getElementById('newOneFileImage').value = '';
    document.getElementById('newTwoFileImage').value = '';
    document.getElementById('selectNewImageIdOne').removeAttribute("style");
    document.getElementById('selectNewImageIdTwo').removeAttribute("style");
    this.setState({
      openAdd: false
    });
  }

  addNewStaf(){
    let newStaffsTitle = document.getElementById('newStaffsTitle');
    let newStaffsText = document.getElementById('newStaffsText');
    let newStaffsInstagram = document.getElementById('newStaffsInstagram');
    let newStaffsEmail = document.getElementById('newStaffsEmail');
    let newStaffsFacebook = document.getElementById('newStaffsFacebook');
    let newStaffsfullText = document.getElementById('newStaffsfullText');
    let newOneFileImage = document.getElementById('newOneFileImage');
    let newTwoFileImage = document.getElementById('newTwoFileImage');
    let newAI = parseInt(editZoneData[0].staffData.length);
    let newObjectfromStaff = {
      AI: newAI,
      title: newStaffsTitle.value,
      photoOne: newAI+'-1.jpg',
      photoTwo: newAI+'-2.jpg',
      text: newStaffsText.value,
      fulltext: newStaffsfullText.value,
      insta: newStaffsInstagram.value,
      email: newStaffsEmail.value,
      facebook: newStaffsFacebook.value,
      newStaffs: true
    }
    var reader1 = new FileReader();
    reader1.readAsDataURL(newOneFileImage.files[0]);
    reader1.onload = function () {
      newObjectfromStaff.photoOne = reader1.result;
      var reader2 = new FileReader();
      reader2.readAsDataURL(newTwoFileImage.files[0]);
      reader2.onload = function () {
        newObjectfromStaff.photoTwo = reader2.result;
        axios.post(globalLocation + '/addNewStaff', {new: newObjectfromStaff} ).then(res => {
          newStaffsTitle.value = '';
          newStaffsText.value = '';
          newStaffsInstagram.value = '';
          newStaffsEmail.value = '';
          newStaffsFacebook.value = '';
          newStaffsfullText.value = '';
          newOneFileImage.value = '';
          newTwoFileImage.value = '';
          document.getElementById('selectNewImageIdOne').removeAttribute("style");
          document.getElementById('selectNewImageIdTwo').removeAttribute("style");
          document.getElementById('buttonIds_fron_4').click()
        });
      };
    };
  }

  addNewServices(){
    let newServiceName = document.getElementById('newServiceName');
    let newServiceText = document.getElementById('newServiceText');
    let newServiceIcon = document.getElementById('newServiceIcon');
    let newAI = parseInt(editZoneData[0].myservice.length);
    let newObjectfromService = {
      AI: newAI,
      title: newServiceName.value,
      text: newServiceText.value
    }
    var readerService = new FileReader();
    readerService.readAsText(newServiceIcon.files[0]);
    readerService.onload = function () {
      newObjectfromService.icon = readerService.result;
      console.log(newObjectfromService)
      axios.post(globalLocation + '/addNewService', {new: newObjectfromService} ).then(res => {
        newServiceName.value = '';
        newServiceText.value = '';
        newServiceIcon.value = '';
        document.getElementById('selectNewImageIcon').removeAttribute("style");
        document.getElementById('buttonIds_fron_2').click()
      });
    };
  }

  oneImageOneChange(el){
    var reader = new FileReader();
    reader.readAsDataURL(el.target.files[0]);
    reader.onload = function () {
      document.getElementById('selectNewImageIdOne').style.backgroundImage = "url("+reader.result+")";
    }
  }
  oneImageTwoChange(el){
    var reader = new FileReader();
    reader.readAsDataURL(el.target.files[0]);
    reader.onload = function () {
      document.getElementById('selectNewImageIdTwo').style.backgroundImage = "url("+reader.result+")";
    }
  }

  newOneFileServiceIcon(el){
    var reader = new FileReader();
    reader.readAsDataURL(el.target.files[0]);
    reader.onload = function () {
      document.getElementById('selectNewImageIcon').style.backgroundImage = "url("+reader.result+")";
    }
  }

  refresh(el){
    let thisNumelement = el.currentTarget.getAttribute('idelement');
    this.props.serviceUpdate.bind(this)
    document.getElementById('buttonIds_fron_'+thisNumelement).click()
  }

  render() {
    globalLocation = this.props.myLocation;
    return <div className="adminpanel">
      <div className={(this.state.openPanel)?"adminBtnMenu show":"adminBtnMenu"} onClick={this.openAdminPanelMethod.bind(this)}>
        <FontAwesomeIcon icon={['fas', 'cog']}/>
      </div>
      <div className={(this.state.openPanel)?"openAdminPanel show":"openAdminPanel"}>
        <div className="adminPaneTitle">Панель керування</div>
        <div className="bdt-heading-style"><HeadingArt fill={'#00726d'}/></div>
        <div className="navigationPanel">
          {parseMenu(this.props.menu, true, this.props.myLocation)}
        </div>
        <div className="editedData">
          <div className="defaultEditData" id="defaultEditData">
            <div className="panelLogotype">
              <FontAwesomeIcon icon={['fas', 'user']}/>
            </div>
            <div className="defaultEditDataTitle">Панель управления</div>
            <div className="defaultEditDataText">
              Панель управления "MiniAdmin v1.6.3"
              Возможность полного редактирования проекта,
              редактирование текстовой и визуальной информации
            </div>
            <div className="defaultEditDataContacts">
              <div className="defaultEditDataContactsTitle">
                EMAIL:
              </div>
              <div className="defaultEditDataContactsContact">
                <a href="mailto:kaleniuk.developer@gmail.com">kaleniuk.developer@gmail.com</a>
              </div>
            </div>
            <div className="defaultEditDataContacts">
              <div className="defaultEditDataContactsTitle">
                Номер:
              </div>
              <div className="defaultEditDataContactsContact">
                <a href="tel:+380664273160">+380664273160</a>
              </div>
            </div>
          </div>
          <div className="dataFromEdited" id="headEdited">
            <div className="miniTitleEdited">Главная</div>
            <div className="controllBlockPanel">
              <div className="panelFrom Refresh" idelement="0" onClick={this.refresh.bind(this)}><FontAwesomeIcon icon={['fas', 'sync']}/></div>
            </div>
            <div className="miniDataEditedLoader"></div>
            <div className="miniDataEditedDataClass"></div>
          </div>
          <div className="dataFromEdited" id="aboutEdited">
            <div className="miniTitleEdited">О нас</div>
            <div className="controllBlockPanel">
              <div className="panelFrom Refresh" idelement="1" onClick={this.refresh.bind(this)}><FontAwesomeIcon icon={['fas', 'sync']}/></div>
            </div>
            <div className="miniDataEditedLoader"></div>
            <div className="miniDataEditedDataClass"></div>
          </div>
          <div className="dataFromEdited" id="servicesEdited">
            <div className="miniTitleEdited">Услуги</div>
            <div className="controllBlockPanel">
              <div className="panelFrom Add" onClick={this.openAddBlock.bind(this)}><FontAwesomeIcon icon={['fas', 'plus']}/></div>
              <div className="panelFrom Refresh" idelement="2" onClick={this.refresh.bind(this)}><FontAwesomeIcon icon={['fas', 'sync']}/></div>
            </div>
            <div className="miniTitleEditedLength"></div>
            <div className="miniDataEditedLoader"></div>
            <div className="miniDataEditedDataClass"></div>
          </div>
          <div className="dataFromEdited" id="galleryEdited">
            <div className="miniTitleEdited">Галерея</div>
            <div className="controllBlockPanel">
              <div className="panelFrom Add" onClick={this.openAddBlock.bind(this)}><FontAwesomeIcon icon={['fas', 'plus']}/></div>
              <div className="panelFrom Refresh" idelement="3" onClick={this.refresh.bind(this)}><FontAwesomeIcon icon={['fas', 'sync']}/></div>
            </div>
            <div className="miniTitleEditedLength"></div>
            <div className="miniDataEditedLoader"></div>
            <div className="miniDataEditedDataClass"></div>
          </div>
          <div className="dataFromEdited" id="staffEdited">
            <div className="miniTitleEdited">Персонал</div>
            <div className="controllBlockPanel">
              <div className="panelFrom Add" onClick={this.openAddBlock.bind(this)}><FontAwesomeIcon icon={['fas', 'plus']}/></div>
              <div className="panelFrom Refresh" idelement="4" onClick={this.refresh.bind(this)}><FontAwesomeIcon icon={['fas', 'sync']}/></div>
            </div>
            <div className="miniTitleEditedLength"></div>
            <div className="miniDataEditedLoader"></div>
            <div className="miniDataEditedDataClass"></div>
          </div>
          <div className="dataFromEdited" id="contactsEdited">
            <div className="miniTitleEdited">Контакты</div>
            <div className="controllBlockPanel">
              <div className="panelFrom Refresh" idelement="5" onClick={this.refresh.bind(this)}><FontAwesomeIcon icon={['fas', 'sync']}/></div>
            </div>
            <div className="miniDataEditedLoader"></div>
            <div className="miniDataEditedDataClass"></div>
          </div>

          <div className={(this.state.openAdd)?"addedBlock show":"addedBlock"}>
            <div className="miniTitleEdited">Добавить</div>
            <div className="closeAddedBlock" onClick={this.closeAdded.bind(this)}><FontAwesomeIcon icon={['fas', 'times']}/></div>
            <div className="newEditedBlock" id="newGalleryEdited">
              <input type="file" name="newGalleryPhoto" id="fileNewGalerry"/>
              <label className="selectNewPhoto" htmlFor="fileNewGalerry">Выбрать изображение</label>
            </div>
            <div className="newEditedBlock" id="newAboutEdited">
              1
            </div>
            <div className="newEditedBlock" id="newHeadEdited">
              2
            </div>
            <div className="newEditedBlock" id="newServicesEdited">
              <div className="miniInfoNews">
                В данном меню вы можете добавить новые услуги вашего салона,
                указать их параметри и информацию
              </div>
              <input className="titleEditText" type="text" id="newServiceName" placeholder="Название услуги"/>
              <div className="newDataBlockFromService">
                <input type="file" id="newServiceIcon" className="hiddenBlock" onChange={this.newOneFileServiceIcon.bind(this)}/>
                <div className="selectNewImage" id="selectNewImageIcon">
                  <label htmlFor="newServiceIcon">Вибрать</label>
                </div>
                <textarea className="titleEditTextArea" id="newServiceText" placeholder="Описание услуги"></textarea>
              </div>
              <div className="saveNewService" onClick={this.addNewServices.bind(this)}>
                Добавить
              </div>

            </div>
            <div className="newEditedBlock" id="newStaffEdited">
              <div className="miniInfoNews">
                В данном меню вы можете добавить новго сотрудника,
                указать его параметри и фотографии
              </div>
              <input className="titleEditText" type="text" id="newStaffsTitle" placeholder="Введите имя сотрудника"/>
              <input className="titleEditText" type="text" id="newStaffsText" placeholder="Введите должность сотрудника"/>
              <input className="titleEditText" type="text" id="newStaffsInstagram" placeholder="Ник в instagram"/>
              <input className="titleEditText" type="text" id="newStaffsEmail" placeholder="електронная почта"/>
              <input className="titleEditText" type="text" id="newStaffsFacebook" placeholder="Ссылка на фейсбук"/>
              <textarea className="titleEditTextArea" id="newStaffsfullText" placeholder="Введите описание сотрудника"></textarea>
              <div className="newImageBlock">
                <input type="file" id="newOneFileImage" className="hiddenBlock" onChange={this.oneImageOneChange.bind(this)}/>
                <input type="file" id="newTwoFileImage" className="hiddenBlock" onChange={this.oneImageTwoChange.bind(this)}/>
                <div className="selectNewImage" id="selectNewImageIdOne">
                  <label htmlFor="newOneFileImage">Вибрать</label>
                </div>
                <div className="selectNewImage" id="selectNewImageIdTwo">
                  <label htmlFor="newTwoFileImage">Вибрать</label>
                </div>
              </div>
              <div className="saveNewStaff" onClick={this.addNewStaf.bind(this)}>
                Добавить
              </div>
            </div>
            <div className="newEditedBlock" id="newContactsEdited">
              5
            </div>
          </div>
        </div>
        <div className="saveAdminEdit" onClick={this.saveEdited.bind(this)}>{(this.state.saving)?"Идет сохранение":"Сохранить"}</div>
      </div>
    </div>
  }
}

export default AdminPanel;
