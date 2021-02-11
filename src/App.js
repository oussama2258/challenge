
import './App.css';
import IddItem from './component/IddItem/IddItem'
import React, { Component } from 'react'
import ListItem from './component/ListItem/ListItem';

export default class App extends Component {
  state={
  listItems :["task1","task2"]
  }

  deleteItem = (index)=> this.setState(prevState => ({
    listItems: [...prevState.listItems.filter((item,i)=>i!==index)]
    }))

  addItem = (newItem)=> this.setState(prevState => ({
    listItems: [...prevState.listItems,newItem]
    }))
  render() {
    return (
      <div  >
        <IddItem  addItem = {this.addItem}/>
        <ListItem  listItems={this.state.listItems} deleteItem={this.deleteItem}/>
      </div>

    )
  }
}



