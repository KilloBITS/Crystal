import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let openUserInfoClick = (el) => {
  let thisKey = el.target;
  console.log(thisKey)
  // if(document.getElementById("otherUser_"+thisKey).className === "otherInfoUser"){
  //   document.getElementById("otherUser_"+thisKey).className = "otherInfoUser show"
  // }else{
  //   document.getElementById("otherUser_"+thisKey).className = "otherInfoUser"
  // }
}

let parseUsersDataAdmin = (users) => {
  const parseUsers = users.map((u, key) => <div key={key} className={(key & 1 )?"usersLineTable":"usersLineTable chet"}>
    {(u.dolg !== "Разработчик" && u.dolg !== "Супер-администратор")?<div className="lineColumn"><input type="checkbox"/></div>:null}
    <div className="lineColumn" style={{paddingLeft: "10px"}}>{u.name} {u.surname}</div>
    <div className="lineColumn right" thiskey={key} onClick={openUserInfoClick.bind(this)}>
      <FontAwesomeIcon icon={['fas', 'bars']} thiskey={key}/>
    </div>
    <div className="lineColumn right dolgnost">{u.dolg}</div>
    <div className="otherInfoUser" id={"otherUser_"+key}>
      <div className="otherLine">Логин: {u.login}</div>
      <div className="otherLine">Пароль: {u.password}</div>
      <div className="otherLine">EMAIL: {u.email}</div>
      <div className="otherLine">Номер телефона: {u.number}</div>
    </div>
  </div>);
  return parseUsers
}

class TableCustom extends React.Component {
 constructor(props){
   super(props);
   this.state = {
     openedAddAdmin: false
   }
 }
 addedNewAdminClick(){
    this.setState({
      openedAddAdmin: (this.state.openedAddAdmin)?false:true
    });
 }

 render(){
   return <div className="data_tables">
    <div className="headerTables">
      <div className="usersLength">({this.props.data.length})</div>
      <div className="remove">
        <FontAwesomeIcon icon={['fas', 'times']}/>
      </div>
      <div className="update">
        <FontAwesomeIcon icon={['fas', 'sync']}/>
      </div>
    </div>
    <div className="bodyTables">
      {parseUsersDataAdmin(this.props.data)}
    </div>
    <div className={(this.state.openedAddAdmin)?"addAdminBlock show":"addAdminBlock"}>
      <div className="closeAddAdminBlock" onClick={this.addedNewAdminClick.bind(this)}><FontAwesomeIcon icon={['fas', 'times']}/></div>
      <div className="regForm">
        <input type="text" name="" className="inputTextNewAdmin" placeholder="Придумайте логин" autoComplete="new-password"/>
        <input type="password" name="" className="inputTextNewAdmin" placeholder="Придумайте пароль" autoComplete="new-password"/>
        <input type="password" name="" className="inputTextNewAdmin" placeholder="Повторите пароль" autoComplete="new-password"/>
        <input type="text" name="" className="inputTextNewAdmin" placeholder="Введите имя" autoComplete="new-password"/>
        <input type="text" name="" className="inputTextNewAdmin" placeholder="Введите фамилию" autoComplete="new-password"/>
        <input type="text" name="" className="inputTextNewAdmin" placeholder="Введите EMAIL" autoComplete="new-password"/>
        <input type="text" name="" className="inputTextNewAdmin" placeholder="Номер телефона" autoComplete="new-password"/>
        <input type="button" name="" className="inputTextNewAdminBTN" value="Добавит  администратора"/>
      </div>
    </div>
    <div className="footerTables">
      <div className="usersBlockAdminButton addAdmin" onClick={this.addedNewAdminClick.bind(this)}>Добавить администратора</div>
      <div className="prew">Назад</div>
      <div className="next">Вперед</div>
    </div>
   </div>
  }
}

class AdminPanel extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: null
    };
  }

  componentDidMount(){
    axios.post(this.props.myLocation + '/getUsersData').then(res => {
      this.setState({
        data: res.data.data
      });
    });
  }

  render() {
    return <div className="adminTwoPage">
      <div className="usersBlockAdminTop">
        {(this.state.data !== null)?<TableCustom data={this.state.data}/>:<div className="usersLoader">Идет загрузка данных...</div>}
      </div>
    </div>
  }
}

export default AdminPanel;
