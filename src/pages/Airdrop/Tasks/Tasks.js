import React from "react";
import classes from "./Tasks.module.css";
import { Text } from "../../../components/common";

import { FaCircleCheck } from "react-icons/fa6";
import { RiCloseCircleFill } from "react-icons/ri";

const Tasks = ({ tasks }) => {
  return (
    <div className={classes.wrapper}>
      <Text base200 base font600>
        Perform Tasks First
      </Text>

      <div className={classes.tasks}>
        {tasks.map((task, i) => (
          <div className={classes.task} key={i}>
            <div className={classes.header}>
              <Text base200 base semiBold>
                {task.title}
              </Text>

              {task.status.toLowerCase() === "completed" ? (
                <FaCircleCheck className={classes.checkmark} />
              ) : (
                <RiCloseCircleFill className={classes.icon} />
              )}
            </div>{" "}
            <Text base500>{task.info}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
