import React, { Component } from 'react'
import {Link} from "react-router-dom";
class NavBar extends Component {
    render() {
        return (
            <div className='sticky-top'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Daily News</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/general">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Country
          </Link>
          <ul className="dropdown-menu vertical-scrollable" style={{overflowY: "scroll",height:"150px"}} aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/ae">Arab Emirates</Link></li>
            <li><Link className="dropdown-item" to="/ar">Argentina</Link></li>
            <li><Link className="dropdown-item" to="/at">Austria</Link></li>
            <li><Link className="dropdown-item" to="/au">Australia</Link></li>
            <li><Link className="dropdown-item" to="/be">Belgium</Link></li>
            <li><Link className="dropdown-item" to="/bg">Bulgaria</Link></li>
            <li><Link className="dropdown-item" to="/br">Brazil</Link></li>
            <li><Link className="dropdown-item" to="/ca">Canada</Link></li>
            <li><Link className="dropdown-item" to="/ch">Switzerland</Link></li>
            <li><Link className="dropdown-item" to="/cn">China</Link></li>
            <li><Link className="dropdown-item" to="/co">Colombia</Link></li>
            <li><Link className="dropdown-item" to="/cu">Cuba</Link></li>
            <li><Link className="dropdown-item" to="/cz">Czechia</Link></li>
            <li><Link className="dropdown-item" to="/de">Germany</Link></li>
            <li><Link className="dropdown-item" to="/rg">Egypt</Link></li>
            <li><Link className="dropdown-item" to="/fr">France</Link></li>
            <li><Link className="dropdown-item" to="/gb">United Kingdom</Link></li>
            <li><Link className="dropdown-item" to="/gr">Greece</Link></li>
            <li><Link className="dropdown-item" to="/hk">Hong Kong</Link></li>
            <li><Link className="dropdown-item" to="/hu">Hungary</Link></li>
            <li><Link className="dropdown-item" to="/id">Indonesia</Link></li>
            <li><Link className="dropdown-item" to="/ie">Ireland</Link></li>
            <li><Link className="dropdown-item" to="/il">Israel </Link></li>
            <li><Link className="dropdown-item" to="/in">India</Link></li>
            <li><Link className="dropdown-item" to="/it">Italy</Link></li>
            <li><Link className="dropdown-item" to="/jp">Japan</Link></li>
            <li><Link className="dropdown-item" to="/kr">Korea</Link></li>
            <li><Link className="dropdown-item" to="/lt">Lithuania</Link></li>
            <li><Link className="dropdown-item" to="/lv">Latvia</Link></li>
            <li><Link className="dropdown-item" to="/ma">Morocco</Link></li>
            <li><Link className="dropdown-item" to="/mx">Mexico</Link></li>
            <li><Link className="dropdown-item" to="/my">Malaysia</Link></li>
            <li><Link className="dropdown-item" to="/ng">Nigeria</Link></li>
            <li><Link className="dropdown-item" to="/nl">Nicaragua</Link></li>
            <li><Link className="dropdown-item" to="/no">Norway</Link></li>
            <li><Link className="dropdown-item" to="/nz">New Zealand</Link></li>
            <li><Link className="dropdown-item" to="/ph">Philippines</Link></li>
            <li><Link className="dropdown-item" to="/pl">Poland</Link></li>
            <li><Link className="dropdown-item" to="/pt">Portugal</Link></li>
            <li><Link className="dropdown-item" to="/ro">Romania</Link></li>
            <li><Link className="dropdown-item" to="/rs">Republic of Serbia</Link></li>
            <li><Link className="dropdown-item" to="/ru">Russian</Link></li>
            <li><Link className="dropdown-item" to="/sa">Saudi Arabia</Link></li>
            <li><Link className="dropdown-item" to="/se">Sweden</Link></li>
            <li><Link className="dropdown-item" to="/sg">Singapore</Link></li>
            <li><Link className="dropdown-item" to="/si">Slovenia</Link></li>
            <li><Link className="dropdown-item" to="/sk">Slovakia</Link></li>
            <li><Link className="dropdown-item" to="/th">Thailand</Link></li>
            <li><Link className="dropdown-item" to="/tr">Turkey</Link></li>
            <li><Link className="dropdown-item" to="/tw">Taiwan</Link></li>
            <li><Link className="dropdown-item" to="/us">Ukraine</Link></li>
            <li><Link className="dropdown-item" to="/us">USA</Link></li>
            <li><Link className="dropdown-item" to="/ve">Venezuela</Link></li>
            <li><Link className="dropdown-item" to="/za">South Africa</Link></li>
          </ul>
        </li>
        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/business">Business</Link></li>
        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/general">General</Link></li>
        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/health">Health</Link></li>
        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/science">Science</Link></li>
        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/sports">Sports</Link></li>
        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/technology">Technology</Link></li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
           </div>
        )
    }
}
export default NavBar;


