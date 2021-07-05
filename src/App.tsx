import './stylesheets/scss/global.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../firebase';
import {useState} from "react";

function App() {
  const element = <FontAwesomeIcon icon={faCoffee} />
  return (
    <div className="App">
      test text
      {element}
    </div>
  );
}

export default App;
