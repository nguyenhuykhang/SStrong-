import React, { Component } from 'react'
import Aboutus from './aboutus/Aboutus'
import Getstarted from './getstarted/Getstarted'
import Navcomponent from './Navcomponent'

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <Navcomponent/>  */}
        <Getstarted/>
        <Aboutus/>
      </div>
    )
  }
}
