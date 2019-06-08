import { compose } from "redux";
import { connect } from "react-redux";

import { changeSearch } from "../actions";
import Search from "../components/search/";

const mapStateToProps = state => {
  return {
    search: state.controlTasks.search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSearch: value => dispatch(changeSearch(value))
  };
};

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;
