import React, { Component } from 'react'
import Item from './Item'

export class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render() {
    if (this.props.y) {
      return  (
        <main id='items' className={`${this.props.open ? 'sm:ml-[12vh]' : 'sm:ml-[12vh]'} overflow-x-hidden ml-[1%] mt-[10vh] mr-[1%] grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 gap-4 justify-between duration-300`}>
          {this.props.items.map(el => (
              <Item colors={this.props.colors} curitems={this.props.curitems} item = {el} search={this.props.search} addItem={this.props.addItem}/>
          ))}
        </main>
      )
    } else {
      return (
        <div id='items' className={`${this.props.open ? 'sm:ml-[12vh]' : 'sm:ml-[12vh]'} ml-[1%] mt-[12vh] mr-[1%] grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 gap-4 justify-between duration-300`}>
          {this.props.allcat.map((el) => (
            <div onClick={() => this.props.allCheck(el, this.state.curstate, this.state.curcol)} className='border border-gray-500 rounded-lg flex justify-center'>
              <p className='font-bold p-2 my-auto'>{el}</p>
            </div>
          ))}
        </div>
      )
    }
  }

  setCat(cat){
    this.props.setCat(cat)
  }

}

export default Main