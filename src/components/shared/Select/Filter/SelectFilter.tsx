import React, { FC } from "react";
import styles from "./SelectFilter.module.scss";
import Select from "react-select";

interface Option {
  value: string;
  label: string; // або будь-який інший тип, який вам потрібен
}

interface IFilterSelect {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: Option | null, field: string) => void;
  id: string;
  className: string;
}

const SelectFilter: FC<IFilterSelect> = ({ onChange, value, id, options }) => {
  return (
    <Select
      id={id}
      onChange={(option) => onChange(option, id)}
      defaultValue={options[0]}
      options={options}
    />
    // <div className={styles.boxOneFilter}>
    //   <label htmlFor="type">{label}:</label>
    //   <select
    //     className={styles.selectFilter}
    //     value={value}
    //     onChange={onChange}
    //     id={id}
    //   >
    //     {options.map((option) => (
    //       <option key={option.value} value={option.value}>
    //         {option.label}
    //       </option>
    //     ))}
    //   </select>
    // </div>
  );
};

export default SelectFilter;
