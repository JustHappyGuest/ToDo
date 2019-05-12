import React from "react";
import styled from "./style.module.css";

const Task = props => {
    return (
        <tr className={styled.row}>
            <td className={styled.selector}>
                {
                    !props.complete
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
                    !props.complete
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

const Tasks = (props) => {
    let taskList = props.tasks.filter(item => !!item.data.description.toLowerCase().indexOf(props.search.toLowerCase())+1 && (props.complete) ? item.complete : !item.complete);
    taskList = taskList.map(item => {
        let {updating, ...task} = item;
        return (
            (!updating)
                ?   
                    <Task 
                        complete = {props.complete}
                        {...task}
                        showDropdown = {props.showDropdown}
                        deleteTask = {props.deleteTask}
                        updateTask = {props.updateTask}
                        selectTask = {props.selectTask}
                        completeTask = {props.completeTask}
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
                    <td className={styled.selector}>
                        {
                            !props.complete
                                ? 
                                    <button className={styled.btn} onClick={props.selectAllTask}>
                                        {props.tasks.every(item => item.selected)
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
                            !props.complete
                                ? <button className={styled.btn} onClick={props.newTask}><i className="fas fa-plus"></i></button>  
                                : ""
                        }   
                    </td>
                   <td className={styled.menu}>
                        {
                            !props.complete
                                ? 
                                    <div className={styled.containerMenu}>
                                        <button className={styled.btn}><i class="far fa-check-circle"></i></button>
                                        <button className={styled.btn}><i class="fas fa-edit"></i></button>
                                        <button className={styled.btn}><i class="far fa-times-circle"></i></button>
                                    </div>
                                : ""
                        }
  
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