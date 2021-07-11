import {
   faFacebook,
   faFacebookMessenger,
} from '@fortawesome/free-brands-svg-icons';
import {
   faArchive,
   faCog,
   faPeopleCarry,
} from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';

export const routeItem = [
   {
      id: 1,
      icon: faFacebook,
      className: 'home',
      route: '/'
   },
   {
      id: 2,
      icon: faPeopleCarry,
      className: 'groups',
      route: '/groups'
   },
   {
      id: 3,
      icon: faArchive,
      className: 'market',
      route: '/market'
   }
]

export const menuRight = [
   {
      id: 1,
      icon: faFacebookMessenger,
      className: 'messages',
   },
   {
      id: 2,
      icon: faNewspaper,
      className: 'notifications',
   },
   {
      id: 3,
      icon: faCog,
      className: 'settings',
   }
]