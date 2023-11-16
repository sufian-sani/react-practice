import ContactFrom from "./component/ContactFrom";
import Footer from "./component/Footer";
import Fromsubmit from "./component/Fromsubmit";
import Header from './component/Header';
import Hero from "./component/Hero";
import Hero2 from "./component/Hero2";
import Hero3 from "./component/Hero3";
import Hero4 from "./component/Hero4";
import List from "./component/List";
import Logic1 from './component/Logic1';
import Logic2 from "./component/Logic2";
import Logic3 from "./component/Logic3";
import Logic4 from "./component/Logic4";
import Login from "./component/Login";
import Switch from "./component/Switch";

const App = () => {
  return (
    <div>
      <h2>{2+2}</h2>
      <button onClick={()=>alert("Hello")}>Submit</button>
      <h1 style={{
        color:'red'
      }}>Style</h1>
      <Header/>
      <Logic1/>
      <Logic2/>
      <List/>
      <Login/>
      <Switch/>
      <Logic3/>
      <Logic4/>
      <Hero2 title="Learn React with Vite" des="In details how to pass props"/>
      <Hero3/>
      <Hero4/>
      <Fromsubmit/>
      <br/>
      <Hero/>
      <ContactFrom/>
      <Footer/>
    </div>
  );
};

export default App;