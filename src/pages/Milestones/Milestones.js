import React from "react";
import classes from "./Milestones.module.css";
import { Heading, Text } from "../../components/common";
import clsx from "clsx";
import { FaCheck } from "react-icons/fa6";

const Milestones = () => {
  const data = [
    {
      title: "Milestone title here",
      info: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "Upcoming",
    },
    {
      title: "Milestone title here",
      info: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "Archived",
    },
    {
      title: "Milestone title here",
      info: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "Upcoming",
    },
    {
      title: "Milestone title here",
      info: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "Upcoming",
    },
    {
      title: "Milestone title here",
      info: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "Archived",
    },
  ];
  return (
    <div className={classes.wrapper}>
      {data.map((el, i) => (
        <div className={classes.infoWrapper} key={i}>
          <div className={classes.iconContainer}>
            {el.status.toLowerCase() === "archived" && (
              <div className={classes.archivedIconContainer}>
                <FaCheck className={classes.icon} />
              </div>
            )}
            {el.status.toLowerCase() === "upcoming" && (
              <div className={classes.upcomingContainer}>
                <p className={classes.dot}></p>
              </div>
            )}
          </div>
          <div key={i} className={classes.infoContainer}>
            <Heading lg semiBold base0>
              {el.title}
            </Heading>
            <Text base400 className={classes.info}>
              {el.info}
            </Text>
            <Text
              className={clsx(
                classes.status,
                el.status.toLowerCase() === "archived" && classes.archived,
                el.status.toLowerCase() === "upcoming" && classes.upcoming
              )}
              sm
              semiBold
            >
              {el.status}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Milestones;
