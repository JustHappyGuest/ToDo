import React from 'react';
import styled from "./style.module.css";

const Search = (props) => {
    return( 
            <input className={styled.search_input} placeholder="Поиск..." />
    );
}

export default Search;