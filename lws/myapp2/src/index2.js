// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import ReactDOM from 'react-dom';
import React from 'react';
// function Clock({locale}){
//   return (
//     <h1 className='heading'>
//       <span className='text'>Hello {new Date().toLocaleTimeString(locale)}</span>
//     </h1>
//   );
// }

class Clock extends React.Component{
  render(){
    return (
      <h1 className='heading'>
        <span className='text'>Hello - {this.props.children} {new Date().toLocaleTimeString(this.props.locale)}</span>
      </h1>
    );
  }
}
// const ClockComponent = new Clock();
ReactDOM.render(<Clock locale="bn-BD">Test</Clock>,document.getElementById('root'));