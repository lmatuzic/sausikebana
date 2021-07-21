import { FC, useImperativeHandle, useState } from 'react';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useLocation } from 'react-router-dom';

type Data = {
   id: number;
   icon: IconDefinition;
   className?: string;
   route?: string;
}

type RouteItemProps = {
   item: Data[];
   iconContainer?: string;
}

export const RouteItem: FC<RouteItemProps> = (props) => {
   const data: Data[] = props.item;
   const location = useLocation();
   return (
      <div>
         {data.map((item) => {
            const isActive = `${item.route}` === location.pathname
            // console.log('Active route: ', isActive , 'Route: ',item.route, 'LOCATION: ', location.pathname)
            return (
               <NavLink exact to={`${item.route}`} key={item.id}  activeClassName='active'>
                  <span className={isActive ? `active-icon active` : props.iconContainer}>
                     <FontAwesomeIcon icon={item.icon} className={item.className}/>
                  </span>
               </NavLink>
            )
         })}

      </div>
   )
}
