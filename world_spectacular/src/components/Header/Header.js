import './Header.css';
import React, { Component, useEffect, useState } from 'react';
import Nav from '../Nav/Nav';


const Header = (props) => { 
// class Header extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       homeUrl: true
//     }
//   }

  // componentDidMount() {
  //   (window.location.pathname === '/') ?
  //   this.setState({homeUrl: true})
  //   : this.setState({homeUrl: false})
  // }
  
  // componentDidUpdate (() => {
  //   (window.location.pathname === '/') ?
  //   this.setState({homeUrl: true})
  //   : this.setState({homeUrl: false})
  // }, [])

  // render() {

    const [homeUrl, setHomeUrl] = useState('')
  
    useEffect (() => {
      (window.location.pathname === '/') ?
      setHomeUrl({homeUrl: true})
      : setHomeUrl({homeUrl: false})
    }, 
    [window.location.pathname],
    )
    console.log(homeUrl)

    return( 
      // homeUrl ?
      // <header>
      //   <h1>World Spectacular</h1>
      // </header>
      // :
      <header>
        <h1>World Spectacular</h1>
          <Nav />
      </header>
    );
  // }
}

export default Header;
