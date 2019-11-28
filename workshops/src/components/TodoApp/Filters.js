import React from "react";
import { connect } from "react-redux";
import styles from "./TodoApp.module.css";

const Filters = props => {
  const filters = ["all", "active", "completed"];

  return (
    <ul className={styles.filters}>
      {filters.map(filter => {
        return (
          <li key={filter} onClick={() => props.onFilterChange(filter)}>
            <a
              href={`#/${filter}`}
              className={props.activeFilter === filter ? styles.selected : null}
            >
              {filter}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    activeFilter: "all"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFilterChange: () => {}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
