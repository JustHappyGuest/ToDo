import React from "react";
import styled from "./style.module.css";


const Task = props => {
    return (
        <tr className={styled.row}>
            <td className={styled.selector}>
                <button className={styled.btn}><i className="far fa-circle"></i></button>
            </td>
            <td className={styled.description}>
                {props.data.description}
            </td>
            <td className={styled.deadline}>
                {props.data.deadline.toFormat("HH:mm")}
            </td>
            <td className={styled.control}></td>
            <td className={styled.menu}>
                <button className={styled.btn}><i className="fas fa-ellipsis-v"></i></button>
                <ul className={styled.dropdown +" "+(props.dropdown ? styled.show : "")}>
                    <li className={styled.item}>Выполнено</li>
                    <li className={styled.item}>Изменить</li>
                    <li className={styled.item}>Удалить</li>
                </ul>
            </td>
        </tr>
    )
}


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
                <button className={styled.btn} onClick={()=>props.cancelUpdate(props.id)}><i className="fas fa-ban"></i></button>
            </td>
            <td className={styled.control}>
                <button className={styled.btn} onClick={()=>props.addTask(props.id)}><i className="fas fa-check"></i></button>
            </td>
        </tr>
    )
}

const Tasks = (props) => {
    const taskList = props.tasks.map(item => {
        let {updating, ...task} = item;
        return (
            (!updating)
                ?   
                    <Task 
                        {...task} 
                    />
                :
                    <UpdateTask 
                        id = {task.id}
                        {...updating}
                        changeDescription = {props.changeDescription}
                        changeDeadline = {props.changeDeadline}
                        cancelUpdate = {props.cancelUpdate}
                        addTask = {props.addTask}
                    />
        );
    });
    return (
    <section className={styled.tasks}>
        <h2 className={styled.title}>Активные задачи</h2>
        <table className={styled.table}>
            <thead className={styled.thead}>
                <tr className={styled.row}>
                   <td className={styled.selector}><i className="far fa-circle"></i></td>
                   <td className={styled.description}>Описание &#9660;</td>
                   <td className={styled.deadline}>Дедлайн &#9660;</td>
                   <td className={styled.control}>
                        <button className={styled.btn} onClick={props.newTask}><i className="fas fa-plus"></i></button>
                    </td>
                   <td className={styled.menu}>
                        <button className={styled.btn}><i className="fas fa-ellipsis-v"></i></button>
                    </td>
                </tr>
            </thead>
            <tbody className={styled.tbody}>
                {taskList}
            </tbody>
        </table>
    </section>
    );
}

export default Tasks;