import React from "react";
import SearchContainer from '../../containers/search-сontainer';
import styled from './style.module.css';

const Header = (props) => {
    return (
        <header className={styled.header}>
            <SearchContainer />
        </header>
    );
}

export default Header;
