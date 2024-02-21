import './App.css';
import TextForm from './components/TextForm';
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar title="TextUtils"  aboutText="About Us"/>
      <div className="container my-3">
        <TextForm heading="Write Text Here to Analyze"/>
      </div>
    </>
  );
}
export default App;
