import './App.css';
import TextForm from './components/Textform';
import Navbar from "./components/Navbar";
import { useState } from 'react';
import Alert from './components/Alert';
//import About from './components/About'

/*import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";*/


function App() {
  const [Mode,setmode]=useState('light')
  const [alert,setalert]=useState(null);

  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },1500)
  }

  const togglemode=()=>{
    if(Mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showalert('Dark mode has been enable','success')
      document.title='TextUtils Dark-Mode'
    }else
    {
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert('Light mode has been enabled','success')
      document.title='TextUtils Light-Mode'
    }
  }
  return (
  <>
    {/*<Router>*/}
      <div className="container">
      <Navbar title="TextUtils" handletoggle={togglemode}  aboutText="About Us" mode={Mode}/>
      <Alert  alert={alert}/>
      </div>
      <div className="container">
      {/*<Routes>
          <Route path="/about" element={<About/>}>*/}
         {/* </Route>
          <Route path="/" element={<TextForm showalert={showalert} heading="Write Text Below" mode={Mode}/>}>
        </Route>*/}
        <TextForm showalert={showalert} heading="Write Text Below" mode={Mode}/>
        {/*</Routes>*/}
      </div>
    {/*</Router>*/}
  </>
  );
}
export default App;
