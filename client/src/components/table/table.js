import { Loader, Message } from 'semantic-ui-react';
import React, { useState } from "react";

import TableHeader from "./table-header";
import TableRow from "./table-row";
import TableUpdateRow from "./table-update-row";
import rowList from "./row-list";
import s from "./style.module.css";

const TableListRow = rowList(TableRow);

const Table = ({
  showUpdateRow,
  changeDescriptonTask,
  changeDeadlineTask,
  cancelUpdateTask,
  confirmUpdateRow,
  deleteTask,
  tasks,
  title,
  simple
}) => {
  const [dropdown, setDropdown] = useState(null);

  const changeDropdown = id => {
    if (dropdown) return setDropdown(null);
    setDropdown(id);
  };

  const { data, update, loading } = tasks;
  const updateRowShow = !!update;

  return (

    <section className={s.tasks}>

      <h2 className={s.title}>{title} <Loader active={loading} inline="left" size="small"/></h2>
      <table className={s.table}>
        <thead className={s.thead}>
          <TableHeader {...{ showUpdateRow }} {...{ simple }} />
        </thead>
        <tbody className={s.tbody}>
          <TableUpdateRow
            {...{
              changeDescriptonTask,
              changeDeadlineTask,
              cancelUpdateTask,
              confirmUpdateRow,
              update
            }}
            {...{ show: updateRowShow }}
          />
          <TableListRow
            {...{ data, dropdown, changeDropdown, deleteTask, showUpdateRow }}
            {...{simple}}
          />
        </tbody>

      </table>
  </section>

  );
};

Table.defaultProps = {
  simple: false,
  update: null
};

export default Table;
