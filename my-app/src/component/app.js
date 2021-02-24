import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import GetTodo from "./get";

class app extends React.Component{
    constructor(props){

        super(props);

        this.state = {
            description:""
        }
        
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onChangeDescription(e){
        this.setState({...this.state,description:e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        const desc = {
            description:this.state.description
        }


        axios.post("http://localhost:5000/todo/add",desc)
        .then(res=>console.log(res.data.message))

        this.setState({
            description:""
        })

    }
    
  
    render(){
        return(
            <div className="container">
               <div className="input-group mb-3">

                   <input type="text" className="form-control" placeholder="ADD TODO HERE" aria-label="ADD TODO HERE" aria-describedby="button-addon2" 
                   value={this.state.description} onChange={this.onChangeDescription}/>


                   <div className="input-group-append">
                       <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.onSubmit}>ADD</button>
                   </div>
               </div>
               <GetTodo/>
            </div>
        )
    }
}

export default app;