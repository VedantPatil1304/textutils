import React ,{useState} from 'react'

export default function About() {

    const[myStyle,setmyStyle]=useState({
        color: 'white',
        backgroundColor : 'black'
    })

    const[btnText,setbtnText]=useState("Enable dark mode")

    const toggleStyle=()=>{
        if(myStyle.color==='black'){
            setmyStyle({
                color : 'white',
                backgroundColor :'black',
                border :'1px solid white'
            })
            setbtnText("Enable light mode")
        }   
        else{
            setmyStyle({
                color :'black',
                backgroundColor :'white'
            })
            setbtnText("Enable dark mode")
        }
    }


  return (
    <div className="container" style={myStyle}>
   <h1 className="my-3">About Us</h1>
   <div className="accordion" id="accordionExample"style={myStyle}>
   {/* <!-- Accordion Item #1 --> */}
   <div className="accordion-item">
     <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle}data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
        This is the first item's accordion body. Customize the content here.
      </div>
    </div>
  </div>

  {/* <!-- Accordion Item #2 --> */}
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style={myStyle}data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
        This is the second item's accordion body. Customize the content here.
      </div>
    </div>
  </div>

  {/* <!-- Accordion Item #3 --> */}
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={myStyle}data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
        This is the third item's accordion body. Customize the content here.
      </div>
    </div>
  </div>
</div>

            <div className="container my-3">
                <button  onClick={toggleStyle}type="button" className="btn btn-primary">{btnText}</button>
            </div>

    </div>
    
  )
}

