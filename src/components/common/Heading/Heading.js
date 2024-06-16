import React from "react";
import classes from "./Heading.module.css";
import clsx from "clsx";
const Heading = ({
  children,
  base,
  sm,
  lg,
  xl,
  xl2,
  xl3,
  xl4,
  primaryDefault,
  warningDefault,
  primaryContent,
  base0,
  base100,
  base200,
  base300,
  base400,
  base500,
  base600,
  base700,
  base800,
  base950,
  semiBold,
  bold,
  font600,
  textCenter,
  textRight,
  className,
}) => {
  return (
    <h2
      className={clsx(
        classes.heading,
        primaryDefault && classes.primaryDefault,
        warningDefault && classes.warningDefault,
        primaryContent && classes.primaryContent,
        base0 && classes.base0,
        base100 && classes.base100,
        base200 && classes.base200,
        base300 && classes.base300,
        base400 && classes.base400,
        base500 && classes.base500,
        base600 && classes.base600,
        base700 && classes.base700,
        base800 && classes.base800,
        base950 && classes.base950,

        sm && classes.sm,
        base && classes.base,
        lg && classes.lg,
        xl && classes.xl,
        xl2 && classes.xl2,
        xl3 && classes.xl3,
        xl4 && classes.xl4,
        bold && classes.bold,
        font600 && classes.font600,
        semiBold && classes.semiBold,
        textCenter && classes.textCenter,
        textRight && classes.textRight,
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Heading;
