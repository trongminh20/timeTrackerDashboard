import React from 'react';
import reactDom from 'react-dom';
import './SCSS/index.scss';

const App = () =>{
  return (
    <div>Time tracker dashboard</div>
  )
}

reactDom.render(<App />, document.getElementById('root'));