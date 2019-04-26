import React from "react";
import styled from "./style.module.css";

const Tasks = (props) => {

    const tasksElements = props.tasks.map((item)=>{
        return (
            <tr key={item.id}>
                <td><div className="circle"></div></td>
                <td>{item.description}</td>
                <td>{item.deadLine}</td>
                <td></td>
                <td><i class="fas fa-ellipsis-v"></i></td>
            </tr>
        );
    });

    const newTask = (
        <tr>
            <td><div className="circle"></div></td>
            <td><input className={styled.tasks_input} type="text" placeholder="Введите описание ..."/></td>
            <td><input className={styled.tasks_input} type="text" placeholder="Введите время завершения ..."/></td>
            <td></td>
            <td><i class="fas fa-check"></i></td>
        </tr>
    );

    return (
    <section className="tasks">
        <h2 className="tasks-title">Активные задачи</h2>
        <table className={styled.tasks_table}>
            <thead className="tasks-table__header">
            <tr>
                <td><div className="circle"></div></td>
                <td>Описание</td>
                <td>Дедлайн</td>
                <td className={styled.task_add}><i class="fas fa-plus"></i></td>
                <td><i class="fas fa-ellipsis-v"></i></td>
            </tr>
            </thead>
            <tbody>
                {Object.keys(props.newTask).length ? newTask : ""}
                {tasksElements}
            </tbody>
        </table>
    </section>
    );
}

export default Tasks;