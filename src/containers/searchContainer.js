import {connect} from "react-redux";
import Search from "../components/Search";
import { changeSearch } from "../actionCreaters";

const mapStateToProps = state => {
    return {
        search: state.controlTasks.search
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeSearch: value => dispatch(changeSearch(value))
    }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;