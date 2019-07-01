import { compose } from 'redux';
import { connect } from 'react-redux';
import React, {useEffect} from 'react';

import { fetchTasksMiss } from '../actions';
import { withTodoService } from '../hocs/with-todo-service';
import Tasks from "../components/table/";

const TasksMissContainer = ({fetchTasksMiss, ...restProps}) => {
  useEffect(()=> {
    fetchTasksMiss()
  }, []);
  return <Tasks {...restProps} simple/>
}

const mapStateToProps = ({search, missTasks}) => {
  return {
    search,
    tasks: missTasks
  };
};

const mapDispatchToProps = (dispatch, { todoService }) => {
  return {
    fetchTasksMiss: dispatch(fetchTasksMiss(todoService))
  };
};

export default compose(
  withTodoService,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(TasksMissContainer);
