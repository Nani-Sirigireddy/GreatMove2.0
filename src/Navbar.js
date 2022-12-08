import React from 'react'

export const Navbar = () => {
  return (
    <>
     <nav className="navbar bg-light">

<a class="navbar-brand" href="#">
  <img src="https://cdn-icons-png.flaticon.com/512/1056/1056542.png" alt="Logo" width="75" height="75" class="d-inline-block align-text-top"/>
  </a>  <h3 className='txt'>Great Move</h3>

<ul className="nav justify-content-end">

<li className="nav-item">
    <img src='https://img.freepik.com/premium-vector/icon-blood-drop-medicine-with-shadow-vector_356832-1200.jpg?w=740' width='25px'/>
<a  className='nav-link' href="./donor" >Be a Donor</a>
</li>
<li class="nav-item">
    <img src='https://img.freepik.com/free-vector/emergency-ambulance-concept_23-2148543900.jpg?w=740&t=st=1670533789~exp=1670534389~hmac=b6a20034f6ac6a7ec3fe70ee718667ec29de9e6d67f2aff97e335da687b3efc5' width='25px'/>
<a className="nav-link" href="./find" >Find Here</a>
</li>

<li class="nav-item">
    <img src='https://img.freepik.com/free-vector/feedback-concept-illustration_114360-4928.jpg?w=740&t=st=1670534193~exp=1670534793~hmac=529980080608181e650e30586d1e645130132cfeed4ef16a6d3a5fee5f6658bd' width='25px'/>
<a className="nav-link" href="#" >Feed back</a>
</li>
<li class="nav-item">
    <img src='https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1670534314~exp=1670534914~hmac=9db8f93307c73f76aaa7a171e7ab4d696b17d1bc799c058992abd17a143f65f2' width='25px'/>
<a className="nav-link" href="#" >Contact</a>
</li>
<li class="nav-item">
    <img src='https://img.freepik.com/free-vector/about-us-concept-illustration_114360-639.jpg?w=740&t=st=1670534422~exp=1670535022~hmac=c9a17a40368ce960fe25ec77126ae9e6b51bded828d41a9704c7d5bb84ba243e' width='25px'/>
<a className="nav-link" href="#" >About Us</a>
</li>
</ul>
</nav></>
  )
}
