import React from 'react';
import './App.css';
import {Header} from "./component/Header/Header";
import {Footer} from "./component/Footer/Footer";
import {Body} from "./component/Body/Body";

function App() {
  return (
    <div className="App">
<Header title={"New Header"}/>
<Body title={"New Body"}/>
<Footer title={"New Footer"}/>
    </div>
  );
}

export default App;
