import React from "react";
import styled from "./style.module.css";

const Aside = (props) => {
    return (
        <aside className={styled.aside}>
            <ul className={styled.menu}>
                <li className={styled.menu_item}><i class="fas fa-tasks"></i>Задачи</li>
                <li className={styled.menu_item}><i class="fas fa-object-group"></i>Группы</li>
                <li className={styled.menu_item}><i class="fas fa-cogs"></i>Настройки</li>
            </ul>
        </aside>
    );
}

export default Aside;