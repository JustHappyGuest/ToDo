import React from "react";
import styled from "./style.module.css";

const Task = props => {
    return (
        <tr className={styled.row}>
            <td className={styled.selector}>
                {
                    !(props.complete || props.missed)
                        ? 
                            <button className={styled.btn} onClick={()=>props.selectTask(props.id)}>
                                {props.selected
                                    ?<i className="fas fa-circle"></i>
                                    :<i className="far fa-circle"></i>
                                } 
                            </button>
                        : ""         
                }
            </td>
            <td className={styled.description}>
                {props.data.description}
            </td>
            <td className={styled.deadline}>
                {props.data.deadline.toFormat("HH:mm")}
            </td>
            <td className={styled.control}></td>
            <td className={styled.menu}>
                {
                    !(props.complete || props.missed)
                        ? 
                            <div className="menuContainer">
                                <button className={styled.btn} onClick={()=>props.showDropdown(props.id)}><i className="fas fa-ellipsis-v"></i></button>
                                <ul className={styled.dropdown +" "+(props.dropdown ? styled.show : "")}>
                                    <li className={styled.item} onClick={() => props.completeTask(props.id)}>Выполнено</li>
                                    <li className={styled.item} onClick={() => props.updateTask(props.id)}>Изменить</li>
                                    <li className={styled.item} onClick={() => props.deleteTask(props.id)}>Удалить</li>
                                </ul>
                            </div>
                        : ""         
                }

            </td>
        </tr>
    )
}

export default Task;