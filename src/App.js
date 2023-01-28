import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './Component/Navbar/Nav'
import News from './Component/News/News'



export default class App extends Component {
  pageSize = 10;
  render() {
    return (

      <div>

        <Nav />
        {/* <News pageSize={this.pageSize} country="us" category="general" /> */}
        <Routes >

          <Route exect path='/' element={<News key="general"
            pageSize={this.pageSize} country="us" category="general" />} />
          <Route exect path='/general' element={<News key="general"
            pageSize={this.pageSize} country="us" category="general" />} />
          <Route exect path='/business' element={<News key="business"
            pageSize={this.pageSize} country="us" category="business" />} />
          <Route exect path='/entertainment' element={<News key="entertainment"
            pageSize={this.pageSize} country="us" category="entertainment" />} />
          <Route exect path='/health' element={<News key="health"
            pageSize={this.pageSize} country="us" category="health" />} />
          <Route exect path='/science' element={<News key="science"
            pageSize={this.pageSize} country="us" category="science" />} />
          <Route exect path='/sports' element={<News key="sports"
            pageSize={this.pageSize} country="us" category="sports" />} />
          <Route exect path='/technology' element={<News key="technology"
            pageSize={this.pageSize} country="us" category="technology" />} />
        </Routes>
      </div>
    )
  }
}
