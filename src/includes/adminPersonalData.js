import React from 'react';
import axios from 'axios';
import ReactTable from "react-table";
import "react-table/react-table.css";

class TableCustom extends React.Component {
 render(){
   return <ReactTable
     data={this.props.data}
     columns={[
       {
         columns: [
           {
             Header: "Имя",
             accessor: "name",
           },
           {
             Header: "Фамилия",
             id: "lastName",
             accessor: "surname"
           }
         ]
       },
       {
         columns: [
           {
             Header: "Електронная почта",
             accessor: "email",
           }
         ]
       }
     ]}
     defaultPageSize={10}
     className="-striped -highlight"
   />
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
        <div className="usersBlockAdminButton addAdmin">Добавить администратора</div>
        {(this.state.data !== null)?<TableCustom data={this.state.data}/>:<div className="usersLoader">Идет загрузка данных...</div>}
      </div>
    </div>
  }
}

export default AdminPanel;
