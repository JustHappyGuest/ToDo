import React from "react";
import styled from './style.module.css';

const TableCell = ({className, children, simple}) => {
  if(simple) return <td className={className}></td>;
  return <td className={className}>{children}</td>
}

TableCell.defaultProps = {
  simple: false
}

export default TableCell;
