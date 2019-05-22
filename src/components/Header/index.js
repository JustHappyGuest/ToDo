import React from "react";
import styled from "./style.module.css";

import SearchContainer from "../../containers/searchContainer";

const Header = (props) => {
    return (
        <header className={styled.header}>
            <SearchContainer />
        </header>
    );
}

export default Header;