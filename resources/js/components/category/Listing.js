import React, { Component } from 'react';
import axios from 'axios';

export default class Listing extends Component { 
    constructor(props){
      super(props);
      this.state={
        categories:[]
      }
    }
    componentDidMount(){
      axios
      .get('/category')
      .then((response) => {
        this.setState({categories:response.data})
      });
    }
    render(){
      return(
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Category Name</th>
                  <th scope="col">Status</th>
                  <th scope="col">Created At</th>
                  <th scope="col">Updated At</th>
                  <th scope="col">Action</th>

                </tr>
              </thead>
              <tbody>
                {
                  this.state.categories && this.state.categories.map(category=>(
                            <tr key={category.id}>
                              <th scope="row">{category.id}</th>
                              <td>{category.name}</td>
                              <td>{category.active = 1 ? 'Active' : 'Inactive' }</td>
                              <td>Date</td>
                              <td>{category.created_at}</td>
                              <td>{category.updated_at}</td>


                            </tr>
                  ))
                }
              </tbody>
          </table>
          )
      }
    }

