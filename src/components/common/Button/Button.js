import React from "react";
import clsx from "clsx";
import classes from "./Button.module.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../../ThemeContext/ThemeContext";

const Button = ({
  children,

  onClick,
  href,
  transparentBase0,
  transparentBase950,
  base0,
  noShadow,
  base950,
  wFull,
  className,
  to,
}) => {
  const { isDarkTheme } = useTheme();
  return (
    <>
      {onClick ? (
        <button
          className={clsx(
            className,
            classes.button,
            transparentBase0 && classes.transparentBase0,
            transparentBase950 && classes.transparentBase950,
            base0 && classes.base0,
            noShadow && classes.noShadow,
            base950 && classes.base950,
            wFull && classes.wFull,
            !isDarkTheme && classes.lightTheme
          )}
          onClick={onClick}
        >
          {children}
        </button>
      ) : href ? (
        <a
          className={clsx(
            className,
            classes.button,
            transparentBase0 && classes.transparentBase0,
            transparentBase950 && classes.transparentBase950,
            noShadow && classes.noShadow,
            base0 && classes.base0,
            base950 && classes.base950,
            wFull && classes.wFull,
            !isDarkTheme && classes.lightTheme
          )}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      ) : to ? (
        <Link
          className={clsx(
            className,
            classes.button,
            transparentBase0 && classes.transparentBase0,
            transparentBase950 && classes.transparentBase950,
            noShadow && classes.noShadow,
            base0 && classes.base0,
            base950 && classes.base950,
            wFull && classes.wFull,
            !isDarkTheme && classes.lightTheme
          )}
          to={to}
        >
          {children}
        </Link>
      ) : (
        <button
          className={clsx(
            className,
            classes.button,
            transparentBase0 && classes.transparentBase0,
            transparentBase950 && classes.transparentBase950,
            noShadow && classes.noShadow,
            base0 && classes.base0,
            base950 && classes.base950,
            wFull && classes.wFull,
            !isDarkTheme && classes.lightTheme
          )}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
