import './stylesheets/scss/global.scss';
import Sidebar from './app/components/Sidebar';
import NewsFeed from './app/components/NewsFeed';
import Widgets from './app/components/Widgets';

const App = () => {
  return (
    <div className="App">
      <main className="layout container">
        <Sidebar />
        <NewsFeed />
        <Widgets />
      </main>
    </div>
  );
}

export default App;
