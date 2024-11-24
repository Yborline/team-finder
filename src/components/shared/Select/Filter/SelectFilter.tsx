import { FC } from "react";
import styles from "./SelectFilter.module.scss";
import Select from "react-select";

interface Option {
  value: string;
  label: string; // або будь-який інший тип, який вам потрібен
}

interface IFilterSelect {
  label: string;
  value: Option | undefined;
  options: { value: string; label: string }[];
  onChange: (value: Option, field: string) => void;
  id: string;
  className: string;
}

const SelectFilter: FC<IFilterSelect> = ({ onChange, value, id, options }) => {
  const handleChange = (option: Option | null) => {
    if (option) onChange(option, id); // Передаємо значення або null
  };

  return (
    <Select
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          background: "var(--filter-background)",
          cursor: "pointer",
          outline: "none",
          border: "none",
          boxShadow: state.isFocused
            ? "var(--filter-box-shadow-hover)"
            : "none", // Тінь при фокусі
          "&:focus": {
            borderColor: "var(--white)",
            boxShadow: "var(--filter-box-shadow-hover)",
          },
          "&:hover": {
            boxShadow: "var(--filter-box-shadow-hover)",
          },
        }),
      }}
      classNamePrefix="select"
      className={styles.selectFilter}
      classNames={{
        option: (state) =>
          state.isSelected
            ? styles.optionFiFilterSelect
            : state.isFocused
            ? styles.optionFilterHover
            : styles.optionFilter,
      }}
      value={value}
      id={id}
      onChange={handleChange}
      defaultValue={options[0]}
      options={options}
    />
  );
};

export default SelectFilter;
