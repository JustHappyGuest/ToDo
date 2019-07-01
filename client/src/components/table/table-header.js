import React from "react";

import TableCell from './table-cell';
import styled from './style.module.css';

const TableHeader = ({showUpdateRow, simple}) => {
    return(
        <tr className={styled.row}>
            <TableCell className={styled.selector} {...{simple}}></TableCell>
            <TableCell className={styled.description}>Описание</TableCell>
            <TableCell className={styled.deadline}>Дедлайн</TableCell>
            <TableCell className={styled.control} {...{simple}}>
                <button className={styled.btn} onClick={() => showUpdateRow()}><i className="fas fa-plus"></i></button>
            </TableCell>
            <TableCell className={styled.menu} {...{simple}}>
              <div className={styled.containerMenu}>
                  <button className={styled.btn} ><i className="far fa-check-circle"></i></button>
                  <button className={styled.btn} ><i className="fas fa-edit"></i></button>
                  <button className={styled.btn} ><i className="far fa-times-circle"></i></button>
              </div>
            </TableCell>
        </tr>
    );
}

TableHeader.defaultProps = {
  simple: false
}



export default TableHeader;
