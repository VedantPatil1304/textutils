import React, {useState} from 'react'

export default function TextForm(props) {

const [text,setText]=useState(''); //here we created a state text is our state , we used useState hook
// text='Enter text here 2'  this is wrong way of changing text 
// setText('Enter text here plz');

const handleUppercaseClick=()=>{
    // console.log("Uppercase was clicked " + text)
    let newText=text.toUpperCase();
    setText(newText)
}
const handleLowercaseClick=()=>{
    //console.log("Lowercase was clicked" + text)
    let newText2=text.toLowerCase();
    setText(newText2)
}
const handleClearClick=()=>{
    console.log("CLear text clicked")
    let newtext3=('');
    setText(newtext3)
}
const handleReverseClick=(event)=>{
    console.log("Inverse text triggered")
    let strArr=text.split("");
    strArr=strArr.reverse();
    let newtext4=strArr.join("")
    setText(newtext4)
}
const handleCapitaliseClick=()=>{ 
    let firstchar = text.charAt(0); // storing the first char of the string
    let newText5= firstchar.toUpperCase()+text.slice(1); // converting that to uppercase
    setText(newText5) // printing it with rest excluding the first char by using slice
}
const handleCopy=()=>{
    var text=document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value);
}
const handleExtraSpaces=()=>{
    let newText6=text.split(/[ ]+/);
    setText(newText6.join(' '))
}
const handleOnChange=(event)=>{  //this was imp for typing in the textarea
    setText(event.target.value)   //this will update our value which is equal to text 
}


  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#212529':'white',color:props.mode==='dark'?'white':'black'}} value={text} rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUppercaseClick}>Convert to Uppercase</button>{/*  //onClick={handleUppercaseClick} this is an event handler */}
        <button className="btn btn-primary mx-1"onClick={handleLowercaseClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1"onClick={handleCapitaliseClick}>Capitalise Text</button>
        <button className="btn btn-primary mx-1"onClick={handleReverseClick}>Reverse Text</button>
        <button className="btn btn-primary mx-1"onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1"onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1"onClick={handleClearClick}>Clear Text</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes will be required to read it !</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above textbox to preview it here !"}</p>
    </div>
    </>
  )
}
