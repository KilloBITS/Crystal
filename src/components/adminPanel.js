import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadingArt from '../images/heading.js';
import '../styles/admin.css';

var selectedEditedZone = null;
var editZoneData = {};
var dontSave = true;
var globalLocation ='';
let selectMethod = (name, location) => {
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

     selectDom.getElementsByClassName('miniTitleEditedLength')[0].innerHTML = " ("+res.data.data.length+")";
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
     }
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

       for(let i = 0; i < res.data.data[0].myservice.length; i++){
           let serviceEditBlock = document.createElement('div');
           serviceEditBlock.className = "editBlock";
           selectDomClass.appendChild(serviceEditBlock);
           //Название
           let titleEditServiceText = document.createElement('input');
           titleEditServiceText.className = "titleEditText";
           titleEditServiceText.onkeyup = (el) => {
             dontSave = false;
            console.log(el.target.value);
           };
           titleEditServiceText.value = res.data.data[0].myservice[i].title;
           serviceEditBlock.appendChild(titleEditServiceText);
           //Описание
           let titleEditServiceTextArea = document.createElement('textarea');
           titleEditServiceTextArea.className = "titleEditTextArea";
           titleEditServiceTextArea.onkeyup = (el) => {
             dontSave = false;
             // editZoneData.find(x => x.AI === res.data.data[i].AI).text = el.target.value;
           };
           titleEditServiceTextArea.value = res.data.data[0].myservice[i].text;
           serviceEditBlock.appendChild(titleEditServiceTextArea);
        }
     }
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
     }  // готово
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
     }
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
  // let toTopposition = document.getElementById(e.target.getAttribute('toelement')).offsetTop;
  let location = e.target.getAttribute('location');
  // document.getElementById('content').scrollTo({top: toTopposition, behavior: 'smooth'});
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
    const menuBtn = dataMenu.map((comp, key) => <div key={key} onClick={toTopThisScroll.bind(this)} location={loc} toelement={comp.toelement} className="menu_btnNav">{comp.title}</div>);
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
        this.setState({saving: true});
        axios.post(this.props.myLocation+'/save'+selectedEditedZone, {data:editZoneData}).then(res => {
          console.log(res.data);
          this.setState({saving: false});
          dontSave = true;
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
        console.log(globalLocation);
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
          this.setState({
            openAdd: false
          });
        });
      };
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
              <div className="panelFrom Add" onClick={this.openAddBlock.bind(this)}><FontAwesomeIcon icon={['fas', 'plus']}/></div>
              <div className="panelFrom Refresh"><FontAwesomeIcon icon={['fas', 'sync']}/></div>
            </div>
            <div className="miniTitleEditedLength"></div>
            <div className="miniDataEditedLoader"></div>
            <div className="miniDataEditedDataClass"></div>
          </div>
          <div className="dataFromEdited" id="aboutEdited">
            <div className="miniTitleEdited">О нас</div>
            <div className="controllBlockPanel">
              <div className="panelFrom Add" onClick={this.openAddBlock.bind(this)}><FontAwesomeIcon icon={['fas', 'plus']}/></div>
              <div className="panelFrom Refresh"><FontAwesomeIcon icon={['fas', 'sync']}/></div>
            </div>
            <div className="miniTitleEditedLength"></div>
            <div className="miniDataEditedLoader"></div>
            <div className="miniDataEditedDataClass"></div>
          </div>
          <div className="dataFromEdited" id="servicesEdited">
            <div className="miniTitleEdited">Услуги</div>
            <div className="controllBlockPanel">
              <div className="panelFrom Add" onClick={this.openAddBlock.bind(this)}><FontAwesomeIcon icon={['fas', 'plus']}/></div>
              <div className="panelFrom Refresh"><FontAwesomeIcon icon={['fas', 'sync']}/></div>
            </div>
            <div className="miniTitleEditedLength"></div>
            <div className="miniDataEditedLoader"></div>
            <div className="miniDataEditedDataClass"></div>
          </div>
          <div className="dataFromEdited" id="galleryEdited">
            <div className="miniTitleEdited">Галерея</div>
            <div className="controllBlockPanel">
              <div className="panelFrom Add" onClick={this.openAddBlock.bind(this)}><FontAwesomeIcon icon={['fas', 'plus']}/></div>
              <div className="panelFrom Refresh"><FontAwesomeIcon icon={['fas', 'sync']}/></div>
            </div>
            <div className="miniTitleEditedLength"></div>
            <div className="miniDataEditedLoader"></div>
            <div className="miniDataEditedDataClass"></div>
          </div>
          <div className="dataFromEdited" id="staffEdited">
            <div className="miniTitleEdited">Персонал</div>
            <div className="controllBlockPanel">
              <div className="panelFrom Add" onClick={this.openAddBlock.bind(this)}><FontAwesomeIcon icon={['fas', 'plus']}/></div>
              <div className="panelFrom Refresh"><FontAwesomeIcon icon={['fas', 'sync']}/></div>
            </div>
            <div className="miniTitleEditedLength"></div>
            <div className="miniDataEditedLoader"></div>
            <div className="miniDataEditedDataClass"></div>
          </div>
          <div className="dataFromEdited" id="contactsEdited">
            <div className="miniTitleEdited">Контакты</div>
            <div className="controllBlockPanel">
              <div className="panelFrom Add" onClick={this.openAddBlock.bind(this)}><FontAwesomeIcon icon={['fas', 'plus']}/></div>
              <div className="panelFrom Refresh"><FontAwesomeIcon icon={['fas', 'sync']}/></div>
            </div>
            <div className="miniTitleEditedLength"></div>
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
