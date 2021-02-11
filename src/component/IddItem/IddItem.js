import React, { Component } from 'react'
import './IddItem.css'
export default class IddItem extends Component {
state ={
    inputText:''
}
    handleChange  = (e) => {
    this.setState({
      inputText: e.target.value
    })
    console.log(this.state.inputText)
  }
    render() {
        return (
            <div className="class1">
        
              <input className="put" type="text" onChange={this.handleChange} value={this.state.inputText}/>
              <button className="butt" onClick ={()=>{this.props.addItem(this.state.inputText);this.setState({inputText:''})}}>Add</button>  
            </div>
        )
    }
}
