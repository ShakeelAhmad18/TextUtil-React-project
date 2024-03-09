import './App.css';
import TextForm from './components/Textform';
import Navbar from "./components/Navbar";
import { useState } from 'react';
function App() {
  const [Mode,setmode]=useState('dark')
  const togglemode=()=>{
    if(Mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='#042743'
    }else
    {
      setmode('light');
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
      <Navbar title="TextUtils" handletoggle={togglemode}  aboutText="About Us" mode={Mode}/>
      <div className="container">
      <TextForm heading="Write Text Below" mode={Mode}/>
      </div>
    </>
  );
}
export default App;
