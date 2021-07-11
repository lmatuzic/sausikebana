import { FC, useState } from 'react';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

type Data = {
   id: number;
   icon: IconDefinition;
   className?: string;
   route?: string;
}

type ModalItemProps = {
   item: Data[];
   iconContainer?: string;
}

export const ModalItem: FC<ModalItemProps> = (props) => {
   const data: Data[] = props.item;

   return (
      <div>
         {data.map((item) => {
            return (
               <span key={item.id} className={props.iconContainer} >
                  <FontAwesomeIcon icon={item.icon} className={item.className} />
               </span>
            )
         })}

      </div>
   )
}