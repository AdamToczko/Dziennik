import React from "react";

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

export default Filters;
