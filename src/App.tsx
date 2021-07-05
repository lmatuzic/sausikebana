import './stylesheets/scss/global.scss';
import Sidebar from './app/components/Sidebar';
import NewsFeed from './app/components/NewsFeed';
import Widgets from './app/components/Widgets';

const App = () => {
  return (
    <div className="App">
      <main className="layout">
        <div className="container">
          <Sidebar />
          <NewsFeed />
          <Widgets />
        </div>
      </main>
    </div>
  );
}

export default App;
