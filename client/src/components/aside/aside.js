import React from "react";

import Menu from "./menu";
import UserCardContainer from '../../containers/user-card-container';
import s from "./style.module.css";

const Aside = (props) => {
  return (
    <aside className={s.aside}>
      <UserCardContainer />
      <Menu />
    </aside>
  );
};

export default Aside;
