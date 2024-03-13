import React from 'react'
import { useState } from 'react'
export default function About() {
    const [mystyle,setmystyle]=useState({
        color:'black',
        backgroundColor:'white',
        border:'1px solid black'
    })
    const [btntext,setbtntext]=useState('Enable Dark Mode')
    const toggleClick=()=>{
       if(mystyle.color==='black')
       {
            setmystyle({
                color:'white',
                backgroundColor:'black',
                border:'1px white solid'
            })
            setbtntext('Enable Light Mode')
       }else{
            setmystyle({
                color:'black',
                backgroundColor:'white',
                border:'1px black solid'
        })
            setbtntext('Enable Dark Mode')
       }
    }
  return (
    <div>
        <div className="container mt -3">
        <h1>About Us</h1>
        </div>
      <div className="accordion mt-2 " id="accordionPanelsStayOpenExample" style={mystyle}>
  <div className="accordion-item"  style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Author
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body" style={mystyle}>
        <strong>Shakeel Ahmad</strong> It is shown by default, until the collapse plugin adds the appropriate classnamees that we use to style each element. These classnamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        How this app can work?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
      <div className="accordion-body" style={mystyle}>
        <strong>First</strong> It is hidden by default, until the collapse plugin adds the appropriate classnamees that we use to style each element. These classnamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Contact
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
      <div className="accordion-body" style={mystyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classnamees that we use to style each element. These classnamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<button className="btn btn-primary mt-2" onClick={toggleClick}>{btntext}</button>    
</div>
  )
}
