import './stylesheets/scss/global.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function App() {
  const element = <FontAwesomeIcon icon={faCoffee} />

  return (
    <div className="App">
      test text
      {element}
      {console.log(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN)}
    </div>
  );
}

export default App;
