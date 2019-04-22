import React, { Component } from 'react';

import SwapiSevice from "../../services/swapi-services";

import './item-list.css';
import Spinner from '../spinner';


export default class ItemList extends Component {

  swapiSevice = new SwapiSevice();

  state = {
    peopleList: null,
  }

  componentDidMount(){
    this.swapiSevice
      .getAllPeople()
      .then((peopleList)=>{
        this.setState({
          peopleList
        });
      })
     
  }

  onError = (err)=>{
    console.log("error" + err)
  }

  render() {

    const {peopleList}=this.state;

    if (!peopleList){
      return <Spinner/>
    }

    return (
      <ul className="item-list list-group">
        <li className="list-group-item">
          Luke Skywalker
        </li>
        <li className="list-group-item">
          Darth Vader
        </li>
        <li className="list-group-item">
          R2-D2
        </li>
      </ul>
    );
  }
}
