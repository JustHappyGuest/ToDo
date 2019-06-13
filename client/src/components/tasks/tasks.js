import React from "react";

import HeaderTasks from "./header-tasks";
import Task from "./task";
import UpdateRow from "./update-row";
import rowList from "./row-list";
import styled from "./style.module.css";

const TasksList = rowList(Task);

class Tasks extends React.Component {
  componentDidMount() {
    this.props.fetchTasksSuccess();
    //this.checkTasksInterval = setInterval(this.props.checkTasksDeadline, 1000);
  }
  componentWillUnmount() {
    //clearInterval(this.checkTasksInterval);
  }

  render() {
    const {
      showUpdateRow,
      changeDescriptonTask,
      changeDeadlineTask,
      cancelUpdateTask,
      addTask,
      changeDropdown
    } = this.props;
    const { data, update, dropdown } = this.props.tasks;
    const showUpdate = !!update && (
      <UpdateRow
        {...{
          changeDescriptonTask,
          changeDeadlineTask,
          cancelUpdateTask,
          addTask,
          update
        }}
      />
    );

    return (
      <section className={styled.tasks}>
        <h2 className={styled.title}>{this.props.title}</h2>
        <table className={styled.table}>
          <thead className={styled.thead}>
            <HeaderTasks
              complete={this.props.complete}
              missed={this.props.missed}
              tasks={this.props.tasks}
              selectAllTasks={this.props.selectAllTasks}
              showUpdateRow={showUpdateRow}
              completeSelectedTasks={this.props.completeSelectedTasks}
              updateSelectedTasks={this.props.updateSelectedTasks}
              deleteSelectedTasks={this.props.deleteSelectedTasks}
            />
          </thead>
          <tbody className={styled.tbody}>
            {showUpdate}
            <TasksList {...{data, dropdown, changeDropdown}} />
          </tbody>
        </table>
      </section>
    );
  }
}

export default Tasks;
