import React from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";


class GetTodo extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            description_list:[]
        }

        this.getAllList = this.getAllList.bind(this)
        // this.DeleteList = this.DeleteList.bind(this);
    }

    getAllList(){
        axios.get("http://localhost:5000/todo")
        .then(respo=>{
    
            this.setState({ description_list:respo.data })
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    componentDidMount(){
        this.getAllList();
    }
    componentDidUpdate(){
        this.getAllList()
    }

    DeleteList(id){
        axios.delete(`http://localhost:5000/todo/delete/${id}`)
        .then(respo=>{console.log(respo.data.msg)});

        this.setState({
            description_list:this.state.description_list.filter(el=> el._id!==id)
        })
    }

    render(){
        return(
            <div className="col-md-8">
                <h3>List of TODO</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.description_list.map(list=>{
                             return(
                                <tr key={list._id}>
                                    <td >{list.description}</td>
                                    <td key={list._id}><button className="btn btn-danger"
                                        onClick={()=>{this.DeleteList(list._id)}}
                                    >Delete</button></td>
                                </tr>
                                )
                        })}
                     </tbody>
                </table>
            </div>
        )
    }
}

export default GetTodo;