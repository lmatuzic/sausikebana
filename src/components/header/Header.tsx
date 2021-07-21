import { FC, useLayoutEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ModalItem } from '../menuItem/ModalItem';
import { menuRight, routeItem } from '../menuItem/itemData';
import { RouteItem } from '../menuItem/RouteItem';

type HeaderProps = {
   src?: string;
   alt?: string;
}

export const Header: FC<HeaderProps> = (props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  //ovo je za DOM mutatione samo, skoro same shit ko use effect
  useLayoutEffect(() => {
    if (inputRef?.current?.focus) {
      inputRef.current.focus();
    }
  }, []);

   return (
      <div className="header-container">
         <div className='left-side'>
            <div className='logo-container'>
               <FontAwesomeIcon icon={faFacebook} className='logo'/>
            </div>
            <div className='search'>
               <FontAwesomeIcon icon={faSearch} className='search-icon'/>
               <input ref={inputRef} id='searchInput' type='text' className='search-input' placeholder='Search'/>
            </div>
         </div>
         <div className='middle'>
             <RouteItem item={routeItem} iconContainer='route-icons'/>
         </div>
         <div className='right-side'>
            {props.src && (
               <div>
                  <span><img src={props.src} alt={props.alt}/></span>
               </div>
            )}
            <div>
               <ModalItem item={menuRight} iconContainer='modal-icons'/>
            </div>
         </div>
      </div>
   )
}
