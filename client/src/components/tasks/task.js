import React from "react";

import managerClasses from '../../utils/managerClasses';
import s from './style.module.css';

const Task = props => {
    const {id, description, deadline, dropdown, changeDropdown} = props;
    const isDropdown = dropdown === id;

    return (
        <tr className={s.row}>
            <td className={s.selector}>
                {
                    !(props.complete || props.missed)
                        ?
                            <button className={s.btn} onClick={()=>props.selectTask(id)}>
                                {props.selected
                                    ?<i className="fas fa-circle"></i>
                                    :<i className="far fa-circle"></i>
                                }
                            </button>
                        : ""
                }
            </td>
            <td className={s.description}>
                {description}
            </td>
            <td className={s.deadline}>
                {deadline.toFormat("HH:mm")}
            </td>
            <td className={s.control}></td>
            <td className={s.menu}>
                {
                    !(props.complete || props.missed)
                        ?
                            <div className="menuContainer">
                                <button className={s.btn} onClick={()=>changeDropdown(id)}><i className="fas fa-ellipsis-v"></i></button>
                                <ul className={managerClasses(s.dropdown)({[s.show] : isDropdown})}>
                                    <li className={s.item} onClick={() => props.completeTask(id)}>Выполнено</li>
                                    <li className={s.item} onClick={() => props.updateTask(id)}>Изменить</li>
                                    <li className={s.item} onClick={() => props.deleteTask(id)}>Удалить</li>
                                </ul>
                            </div>
                        : ""
                }

            </td>
        </tr>
    )
}

export default Task;
