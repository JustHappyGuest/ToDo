import React from "react";
import styled from './style.module.css';

import {NavLink} from "react-router-dom";

const Aside = (props) => {
    return (
        <aside className={styled.aside}>
            <ul className={styled.menu}>
                <li className={styled.item}>
                    <NavLink to = "/tasks"><i class="fas fa-tasks"></i>Задачи</NavLink>
                    <ul className = {styled.dropdown}>
                        <li className={styled.item}><NavLink to = "/tasks/completed">Завершенные</NavLink></li>
                        <li className={styled.item}><NavLink to = "/tasks/missed">Пропущенные</NavLink></li>
                    </ul>
                </li>
                <li className={styled.item}><NavLink to = "/tasks"><i class="fas fa-cogs"></i>Настройки</NavLink></li>
            </ul>
        </aside>
    );
}

export default Aside;
