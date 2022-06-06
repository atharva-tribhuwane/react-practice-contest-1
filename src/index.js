import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';


function App() {
  return (
    <div className="App">
      <div id="leftside">
        <div id="imgdiv">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThroTXm4kovdHyw6NAVJQ3fkGlDfnJaECkmmNTPIuahK7OZ2DmOre_hh4n80RmVj-DjU8&usqp=CAU" alt="" />
        </div>
        <div id="name"><h1>Name: Atharva Tribhuwane</h1></div>
        <div id="age"><h1>Age: 22</h1></div>

        <div id="buttondiv" >
            <button id="increase"onClick={changeage(1)}>Increase Age</button>
            <button id="decrease" onClick={changeage(-1)}>Decrease Age</button>
        </div>

        <div id="showmorediv">
            <button id="show-more">Show More Details</button>
        </div>

        <div id="moredetails">
            <div id="name"><h1>Location: Pune</h1></div>
            <div id="age"><h1>College: Dpcoe</h1></div>
        </div>
    </div>
    <div id="rightside">
        <h1>To do list</h1>
        <div id="tasks">
            
        </div>
    </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


function changeage(num){
  
}