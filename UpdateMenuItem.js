import React, { Component } from 'react';
import axios from 'axios';

export default class UpdateMenuItem extends Component {
       state = {
       name: '', 
       description: '',
       ingredients: [],
       version: '',
       menu: 'LunchOnly'
    }

componentDidMount(){
        axios.get('http://localhost:3200/api/dish')
            .then(res => {
                console.log(res);
                this.setState({dishes: res.data});
            });
    }
   
handleChange = event => {
    const value = event.target.value;
    this.setState({
        ...this.state,
        [event.target.name]: value
    });
    //this.setState({name: event.target.name, description: event.target.description});
}

handleSubmit = event => {
    //event.preventDefault();

    axios.post('http://localhost:3200/api/dish', this.state)
      .then(res => {
          console.log(res);
          console.log(res.data);
      })
}

render(){
    return(
        
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Dish Name:
                    <input type="text" name="name" 
                    defaultvalue={this.state.name} value={this.state.name} onChange={this.handleChange} />
                </label>
                <label>
                    Description:
                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                </label>
                
                <br></br>
      
                <button type="submit"> Add</button>
            </form>
         </div>
             
    )
}
}