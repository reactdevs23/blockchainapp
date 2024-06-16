import React from "react";
import { CiSearch } from "react-icons/ci";

import classes from "./Input.module.css";
import clsx from "clsx";
import { handleKeyDown } from "../../../hooks";

const Input = ({
  value,
  setValue,
  noIcon,
  placeholder,
  onKeyDown,
  type,
  base950,
  className,
}) => {
  return (
    <div
      className={clsx(
        classes.inputContainer,
        base950 && classes.base950,
        className
      )}
    >
      {!noIcon && <CiSearch className={classes.searchIcon} />}
      <input
        type={type ? type : "text"}
        onKeyDown={onKeyDown && onKeyDown}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={classes.input}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
