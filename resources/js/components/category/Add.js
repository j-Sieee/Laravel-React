import Axios from 'axios';
import React, {Component} from 'react';

export default class Add extends Component {

    constructor(){
      super();
      this.onChangeCategoryName = this.onChangeCategoryName.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
      this.state={
        category_name:""
      }
    }

    onChangeCategoryName(e){
      this.setState({
        category_name:e.target.value
      });
    }


    onSubmit(e){
      e.preventDefault();
      const category = {
        category_name : this.state.category_name
      }
      Axios.post('/category/store', category)
      .then(res=>res.data)
    }


  render(){
        return (
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="category_name">Add Category</label>
              <input type="text" className="form-control" id="category_name" onChange={this.onChangeCategoryName} value={this.state.category_name}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
            )
        }
}


