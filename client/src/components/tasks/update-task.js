import React from "react";
import styled from './style.module.css';

const UpdateTask = props => {
    return (
        <tr className={styled.row}>
            <td className={styled.selector}></td>
            <td className={styled.description}>
                <input 
                    className={styled.updateDescription} 
                    placeholder="Введите название задачи ..." 
                    type="text" 
                    value={props.description}
                    onChange={(e)=>props.changeDescription(props.id ,e.target.value)}
                />
            </td>  
            <td className={styled.deadline}>
                <button className={styled.btn} onClick={() => props.changeDeadline(props.id, false)}><i className="fas fa-minus-square"></i></button>
                <span className={styled.showTime}>{props.deadline.toFormat("HH:mm")}</span>
                <button className={styled.btn} onClick={() => props.changeDeadline(props.id, true)}><i className="fas fa-plus-square"></i></button>
            </td>
            <td className={styled.control}>
            </td>
            <td className={styled.control}>
                <button className={styled.btn} onClick={()=>props.cancelUpdate(props.id)}><i className="fas fa-ban"></i></button>
                <button className={styled.btn} onClick={()=>props.addTask(props.id)}><i className="fas fa-check"></i></button>
            </td>
        </tr>
    )
}

export default UpdateTask;