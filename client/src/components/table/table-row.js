import React from "react";

import TableCell from "./table-cell";
import managerClasses from "../../utils/managerClasses";
import s from "./style.module.css";

const TableRow = ({
    id,
    description,
    deadline,
    dropdown,
    changeDropdown,
    deleteTask,
    showUpdateRow,
    simple
  }) => {
  const isDropdown = dropdown === id;

  return (
    <tr className={s.row}>
      <TableCell className={s.selector} {...{ simple }}></TableCell>
      <TableCell className={s.description}>{description}</TableCell>
      <TableCell className={s.deadline}>{deadline.toFormat("HH:mm")}</TableCell>
      <TableCell className={s.control} {...{ simple }}></TableCell>
      <TableCell className={s.menu} {...{ simple }}>
        <div className="menuContainer">
          <button className={s.btn} onClick={() => changeDropdown(id)}>
            <i className="fas fa-ellipsis-v"></i>
          </button>
          <ul className={managerClasses(s.dropdown)({ [s.show]: isDropdown })}>
            <li className={s.item}>Выполнено</li>
            <li
              className={s.item}
              onClick={() => {
                showUpdateRow(id);
                changeDropdown(id);
              }}
            >
              Изменить
            </li>
            <li
              className={s.item}
              onClick={() => {
                deleteTask(id);
                changeDropdown(id);
              }}
            >
              Удалить
            </li>
          </ul>
        </div>
      </TableCell>
    </tr>
  );
};

TableRow.defaultProps = {
  simple: false
};

export default TableRow;
