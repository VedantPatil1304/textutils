import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="/">{props.title}</a>      {/* //we use curlybraces as it is javascript */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">{props.textAbout}</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2 mx-3" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-primary my-2 my-sm-0 mx-3" type="submit">Search</button>
    </form>
    <div className={`form-check form-switch" text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input mx-1"  onClick={props.togglemode}type="checkbox" id="flexSwitchCheckDefault"/>   {/*  //togglemode function is present in the app.js file and thus we are accessing it here with the help of props */}
        <label className="form-check-label mx-4" htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
    </div>
    <div className={`form-check form-switch2" text-${props.mode==='light'?'red':'light'}`}>
        <input className="form-check-input mx-1"  onClick={props.redtogglemode}type="checkbox" id="flexSwitchCheckDefault"/>   {/*  //togglemode function is present in the app.js file and thus we are accessing it here with the help of props */}
        <label className="form-check-label mx-4" htmlFor="flexSwitchCheckDefault">Enable Red Darkmode</label>
    </div>
    <div className={`form-check form-switch3" text-${props.mode==='light'?'blue':'light'}`}>
        <input className="form-check-input mx-1"  onClick={props.bluetogglemode}type="checkbox" id="flexSwitchCheckDefault"/>   {/*  //togglemode function is present in the app.js file and thus we are accessing it here with the help of props */}
        <label className="form-check-label mx-4" htmlFor="flexSwitchCheckDefault">Enable Blue Darkmode</label>
    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes={
    title : PropTypes.string.isRequired,  //when we use .isrequired then it must be given if not given it will give error
    textAbout : PropTypes.string.isRequired
}

Navbar.defaultProps={      //this comes to picture when if any parameter is not given 
    title : 'Set title here',
    textAbout :'Set about here'

}
