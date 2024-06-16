import React from "react";
import classes from "./ReferList.module.css";
import { Heading, Text } from "../../../components/common";
import clsx from "clsx";
import { darkInvitedUser, invitedUser } from "../../../images";
import { useTheme } from "../../../ThemeContext/ThemeContext";

const ReferList = () => {
  const { isDarkTheme } = useTheme();
  const userInfo = [
    {
      img: invitedUser,
      userName: "Username",
      earned: " 00",
      status: "accepted",
    },
    {
      img: invitedUser,
      userName: "Username",
      earned: " 00",
      status: "invited",
    },
    {
      img: invitedUser,
      userName: "Username",
      earned: " 00",
      status: "accepted",
    },
    {
      img: invitedUser,
      userName: "Username",
      earned: " 00",
      status: "accepted",
    },
    {
      img: invitedUser,
      userName: "Username",
      earned: " 00",
      status: "accepted",
    },
    {
      img: invitedUser,
      userName: "Username",
      earned: " 00",
      status: "invited",
    },
    {
      img: invitedUser,
      userName: "Username",
      earned: " 00",
      status: "accepted",
    },
    {
      img: invitedUser,
      userName: "Username",
      earned: " 00",
      status: "invited",
    },
  ];
  return (
    <div className={classes.wrapper}>
      <Heading xl base0 semiBold>
        Invited Friends
      </Heading>
      <div className={clsx(classes.userInfo, "overflow")}>
        {userInfo.map((el, i) => (
          <React.Fragment key={i}>
            <img
              src={isDarkTheme ? darkInvitedUser : el.img}
              alt="#"
              className={classes.img}
            />
            <div className={classes.nameAndEarned}>
              {" "}
              <Text base0 semiBold className={classes.name}>
                {el.userName}
              </Text>
              <Text sm base500 className={classes.earning}>
                Earned: <span className={classes.amount}>{el.earned} USD</span>
              </Text>
            </div>

            <Text
              className={clsx(
                classes.status,
                el.status.toLowerCase() === "invited" && classes.invited,
                el.status.toLowerCase() === "accepted" && classes.accepted
              )}
            >
              {el.status.toUpperCase()}
            </Text>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ReferList;
