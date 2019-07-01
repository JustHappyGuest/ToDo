import React, { Fragment } from "react";

const rowList = View => props => {
  const { data, ...otherProps } = props;
  return (
    <Fragment>
      {data.map(rowData => {
        return <View key={rowData.id} {...rowData} {...otherProps} />;
      })}
    </Fragment>
  );
};

export default rowList;
