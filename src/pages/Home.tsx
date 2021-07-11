import {FC} from 'react';
import { Header } from '../components/header/Header';
import Sidebar from '../app/components/Sidebar';
import NewsFeed from '../app/components/NewsFeed';
import Widgets from '../app/components/Widgets';

export const Home: FC = () => {
   return (
      <div>
         <main className="layout">
            <div className="container">
               <Sidebar />
               <NewsFeed />
               <Widgets />
            </div>
         </main>
      </div>
   )
}