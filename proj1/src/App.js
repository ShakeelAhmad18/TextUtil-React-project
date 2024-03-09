import './App.css';
import TextForm from './components/Textform';
import Navbar from "./components/Navbar";
import { useState } from 'react';
import Alert from './components/Alert';
function App() {
  const [Mode,setmode]=useState('dark')
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
    }else
    {
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert('Light mode has been enabled','success')
    }
  }
  return (
    <>
      <Navbar title="TextUtils" handletoggle={togglemode}  aboutText="About Us" mode={Mode}/>
      <Alert  alert={alert}/>
      <div className="container">
      <TextForm  showalert={showalert} heading="Write Text Below" mode={Mode}/>
      </div>
    </>
  );
}
export default App;
