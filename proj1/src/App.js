import './App.css';
import TextForm from './components/Textform';
import Navbar from "./components/Navbar";
import About from './components/About';
function App() {
  return (
    <>
      <Navbar title="TextUtils"  aboutText="About Us"/>
      <div className="container">
      <TextForm heading="Write Text Below"/>
      <About/>
      </div>
    </>
  );
}
export default App;
