import React from "react";
import styled from "./style.module.css";

const UpdateRow = ({
  update,
  changeDescriptonTask,
  changeDeadlineTask,
  cancelUpdateTask,
  addTask
}) => {
  const {id, description, deadline} = update;
  return (
    <tr className={styled.row}>
      <td className={styled.selector}></td>
      <td className={styled.description}>
        <input
          className={styled.updateDescription}
          placeholder="Введите название задачи ..."
          type="text"
          value={description}
          onChange={e => changeDescriptonTask(e.target.value)}
        />
      </td>
      <td className={styled.deadline}>
        <button
          className={styled.btn}
          onClick={() => changeDeadlineTask(deadline, -30)}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <span className={styled.showTime}>{deadline.toFormat("HH:mm")}</span>
        <button
          className={styled.btn}
          onClick={() => changeDeadlineTask(deadline, 30)}
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </td>
      <td className={styled.control}></td>
      <td className={styled.control}>
        <button className={styled.btn} onClick={cancelUpdateTask}>
          <i className="fas fa-ban"></i>
        </button>
        <button className={styled.btn} onClick={() => addTask(update)}>
          <i className="fas fa-check"></i>
        </button>
      </td>
    </tr>
  );
};

export default UpdateRow;
