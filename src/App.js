//Whatever is there in this code will be resolved and shown in our ux 

import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
// import Alert from './Alert';
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const[mode,setmode]=useState('light')

  // const[alert,setAlert]=useState(null);

  // const showAlert=(message,type)=>{
  //   setAlert({
  //     msg :message,
  //     type :type
  //   });
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 2000);
  // }

  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#212529'  //this will do it for the whole screen
      // showAlert("dark mode has been enabled","success")
      document.title='Vedant Textutills - Dark mode'  //this is if you want to change the title when you enable dark mode
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      // showAlert("light mode has been enabled","success")
      document.title='Vedant Textutills - Light mode'
    }
  }
  const redtogglemode=()=>{
    if(mode==='light'){
      setmode('red')
      document.body.style.backgroundColor='red'
      document.title='Vedant Textutills - Red Dark mode'
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      document.title='Vedant Textutills - Light mode'
    }
  }
  const bluetogglemode=()=>{
    if(mode==='light'){
      setmode('blue')
      document.body.style.backgroundColor='blue'
      document.title='Vedant Textutills - Blue Dark mode'
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      document.title='Vedant Textutills - Light mode'
    }
  }

  //this code was for router
  // return (
  //   <>
  //     <BrowserRouter>
  //     <Navbar title=" Vedant's Textutills" textAbout="About textutills" mode={mode} togglemode={togglemode} redtogglemode={redtogglemode} bluetogglemode={bluetogglemode}/>
  //     {/* <Alert alert={alert}/>  */}
  //       <div className="container my-4" mode={mode}>
  //         <Routes>
  //           <Route  exact path="/about" element={<About />}></Route>  {/*we use exact to go to the exact component , it is not a mandatory syntax*/}
  //           </Routes>
  //           <Routes>
  //          <Route exact path="/" element={<TextForm   heading="Enter Text to analyze " mode={mode} />
  //             }
  //           ></Route>
  //         </Routes>
  //       </div>
  //     </BrowserRouter>
  //   </>
  // );
  return(
    <>
    <Navbar title=" Vedant's Textutills" textAbout="About textutills" mode={mode} togglemode={togglemode} redtogglemode={redtogglemode} bluetogglemode={bluetogglemode}/>
      {/* <Alert alert={alert}/>  */}
      <div className="container my-4" mode={mode}>
      {/* <About /> */}
      <TextForm   heading="Enter Text to analyze " mode={mode} />
      </div>

    </>
  );
}
  export default App;
  




