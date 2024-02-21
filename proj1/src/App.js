import './App.css';
import TextForm from './components/Textform';
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar title="TextUtils"  aboutText="About Us"/>
      <div className="container">
        <TextForm heading="Enter Text Below"/>
      </div>
    </>
  );
}
export default App;
