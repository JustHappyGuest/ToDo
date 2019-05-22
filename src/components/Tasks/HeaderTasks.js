import React from "react";
import styled from "./style.module.css";

const HeaderTasks = (props) => {
    return(
        <tr className={styled.row}>
            <td className={styled.selector}>
                {
                    !(props.complete || props.missed)
                        ? 
                            <button className={styled.btn} onClick={props.selectAllTasks}>
                                {props.tasks.every(item => item.selected || item.complete || item.missed)
                                    ?<i className="fas fa-circle"></i>
                                    :<i className="far fa-circle"></i>
                                } 
                            </button>
                        : ""
                            
                }
            </td>
            <td className={styled.description}>Описание</td>
            <td className={styled.deadline}>Дедлайн</td>
            <td className={styled.control}>
                    {
                        !(props.complete || props.missed)
                            ? <button className={styled.btn} onClick={props.newTask}><i className="fas fa-plus"></i></button>  
                            : ""
                    }   
                </td>
            <td className={styled.menu}>
                {
                    !(props.complete || props.missed)
                        ? 
                            <div className={styled.containerMenu}>
                                <button className={styled.btn} onClick={props.completeSelectedTasks}><i class="far fa-check-circle"></i></button>
                                <button className={styled.btn} onClick={props.updateSelectedTasks}><i class="fas fa-edit"></i></button>
                                <button className={styled.btn} onClick={props.deleteSelectedTasks}><i class="far fa-times-circle"></i></button>
                            </div>
                        : ""
                }

            </td>
        </tr>
    );
}

export default HeaderTasks;