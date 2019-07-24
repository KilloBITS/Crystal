import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadingArt from '../images/heading.js';
import '../styles/admin.css';

var selectedEditedZone = null;
var editZoneData = {};
var dontSave = true;

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
       for(let i = 0; i < res.data.data.length; i++){
         //Блок персонала
         let staffEditBlock = document.createElement('div');
         staffEditBlock.className = "editBlock";
         selectDomClass.appendChild(staffEditBlock);
         //Заголовок
         let titleEditStaffText = document.createElement('input');
         titleEditStaffText.className = "titleEditText";
         titleEditStaffText.value = res.data.data[i].title;
         titleEditStaffText.onkeyup = (el) => {
           dontSave = false;
           editZoneData.find(x => x.AI === res.data.data[i].AI).title = el.target.value;
         };
         staffEditBlock.appendChild(titleEditStaffText);
         //Должность
         let editDolg = document.createElement('input');
         editDolg.className = "titleEditText";
         editDolg.value = res.data.data[i].text;
         editDolg.onkeyup = (el) => {
           dontSave = false;
           editZoneData.find(x => x.AI === res.data.data[i].AI).text = el.target.value;
         };
         staffEditBlock.appendChild(editDolg);
         //Описание
         let titleEditStaffTextArea = document.createElement('textarea');
         titleEditStaffTextArea.className = "titleEditTextArea";
         titleEditStaffTextArea.value = res.data.data[i].fulltext;
         titleEditStaffTextArea.onkeyup = (el) => {
           dontSave = false;
           editZoneData.find(x => x.AI === res.data.data[i].AI).fulltext = el.target.value;
         };
         staffEditBlock.appendChild(titleEditStaffTextArea);
         //фото блок
         let imagesOneTwoBlock = document.createElement('div');
         imagesOneTwoBlock.className = "imagesOneTwoBlock";
         staffEditBlock.appendChild(imagesOneTwoBlock);
         //imgOne
         let imgOne = document.createElement('div');
         imgOne.className = "imgEdiBlock imgOne";
         imgOne.style.backgroundImage = "url("+location+"/images"+res.data.data[i].photoOne+")";
         imagesOneTwoBlock.appendChild(imgOne);

         let imageHoverOne = document.createElement('div');
         imageHoverOne.className = "imageHover";
         imageHoverOne.innerHTML = "Вибрать";
         imgOne.appendChild(imageHoverOne);
         //imgTwo
         let imgTwo = document.createElement('div');
         imgTwo.className = "imgEdiBlock imgTwo";
         imgTwo.style.backgroundImage = "url("+location+"/images"+res.data.data[i].photoTwo+")";
         imagesOneTwoBlock.appendChild(imgTwo);

         let imageHoverTwo = document.createElement('div');
         imageHoverTwo.className = "imageHover";
         imageHoverTwo.innerHTML = "Вибрать";
         imgTwo.appendChild(imageHoverTwo);
       }
     }
     if(name === 'servicesEdited'){
       document.getElementById('newServicesEdited').className = 'newEditedBlock show';
       for(let i = 0; i < res.data.data.length; i++){
           let serviceEditBlock = document.createElement('div');
           serviceEditBlock.className = "editBlock";
           selectDomClass.appendChild(serviceEditBlock);
           //Название
           let titleEditServiceText = document.createElement('input');
           titleEditServiceText.className = "titleEditText";
           titleEditServiceText.onkeyup = (el) => {
             dontSave = false;
             editZoneData.find(x => x.AI === res.data.data[i].AI).title = el.target.value;
           };
           titleEditServiceText.value = res.data.data[i].title;
           serviceEditBlock.appendChild(titleEditServiceText);
           //Описание
           let titleEditServiceTextArea = document.createElement('textarea');
           titleEditServiceTextArea.className = "titleEditTextArea";
           titleEditServiceTextArea.onkeyup = (el) => {
             dontSave = false;
             editZoneData.find(x => x.AI === res.data.data[i].AI).text = el.target.value;
           };
           titleEditServiceTextArea.value = res.data.data[i].text;
           serviceEditBlock.appendChild(titleEditServiceTextArea);
        }
     }

     if(name === 'galleryEdited'){
       document.getElementById('newGalleryEdited').className = 'newEditedBlock show';
       //Название
       let titleEditServiceText = document.createElement('input');
       titleEditServiceText.className = "titleEditText";
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
       }
     }

     if(name === 'headEdited'){
       document.getElementById('newHeadEdited').className = 'newEditedBlock show';
     }

     if(name === 'aboutEdited'){
       document.getElementById('newAboutEdited').className = 'newEditedBlock show';
     }

     if(name === 'contactsEdited'){
       document.getElementById('newContactsEdited').className = 'newEditedBlock show';
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
      saving: false,
      openAdd: false
    }
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
    this.setState({
      openAdd: false
    });
  }

  render() {
    return <div className="adminpanel">
      <div className="adminBtnMenu">
        <FontAwesomeIcon icon={['fas', 'cog']}/>
      </div>
      <div className="openAdminPanel">
        <div className="adminPaneTitle">Панель керування</div>
        <div className="bdt-heading-style"><HeadingArt fill={'#00726d'}/></div>
        <div className="navigationPanel">
          {parseMenu(this.props.menu, true, this.props.myLocation)}
        </div>
        <div className="editedData">
          <div className="defaultEditData" id="defaultEditData">
            <div className="defaultEditDataTitle">Панель управления</div>
            <div className="defaultEditDataText">
              Панель управления "MiniAdmin v1.6.3"
              Возможность полного редактирования проекта,
              редактирование текстовой и визуально информациию
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
            </div>
            <div className="newEditedBlock" id="newAboutEdited">
              1
            </div>
            <div className="newEditedBlock" id="newHeadEdited">
              2
            </div>
            <div className="newEditedBlock" id="newServicesEdited">
              3
            </div>
            <div className="newEditedBlock" id="newStaffEdited">
              4
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
