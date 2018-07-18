import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//ReactDOM은 1개의 컴포넌트 <App />을 출력하고 
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
