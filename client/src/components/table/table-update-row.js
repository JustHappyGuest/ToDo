import React, { useState } from "react";
import s from "./style.module.css";

const TableUpdateRow = ({
  update,
  changeDescriptonTask,
  changeDeadlineTask,
  cancelUpdateTask,
  confirmUpdateRow,
  show
}) => {
  if (!show) return null;

  const { id, description, deadline } = update;
  return (
    <tr className={s.row}>
      <td className={s.selector}></td>
      <td className={s.description}>
        <input
          className={s.updateDescription}
          placeholder="Введите название задачи ..."
          type="text"
          value={description}
          onChange={e => changeDescriptonTask(e.target.value)}
        />
      </td>
      <td className={s.deadline}>
        <button
          className={s.btn}
          onClick={() => changeDeadlineTask(deadline, -30)}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <span className={s.showTime}>{deadline.toFormat("HH:mm")}</span>
        <button
          className={s.btn}
          onClick={() => changeDeadlineTask(deadline, 30)}
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </td>
      <td className={s.control}></td>
      <td className={s.control}>
        <button className={s.btn} onClick={cancelUpdateTask}>
          <i className="fas fa-ban"></i>
        </button>
        <button className={s.btn} onClick={() => confirmUpdateRow(update)}>
          <i className="fas fa-check"></i>
        </button>
      </td>
    </tr>
  );
};

export default TableUpdateRow;
