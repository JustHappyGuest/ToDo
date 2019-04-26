import React from "react";
import styled from "./style.module.css";

import Search from "../Search";

const Header = (props) => {
    return (
        <header className={styled.header}>
            <Search />
        </header>
    );
}

export default Header;