import { Icon } from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';
import React from 'react';

import s from './style.module.css';

const Menu = () => {
  return(
    <ul className={s.menu}>
        <li className={s.item}>
            <NavLink to = "/tasks" activeClassName={s.active}><Icon name="tasks"></Icon>Задачи</NavLink>
            <ul className = {s.dropdown}>
                <li className={s.item}><NavLink to = "/tasks/complete" >Завершенные</NavLink></li>
                <li className={s.item}><NavLink to = "/tasks/miss">Пропущенные</NavLink></li>
            </ul>
        </li>
    </ul>
  );
}

export default Menu;
