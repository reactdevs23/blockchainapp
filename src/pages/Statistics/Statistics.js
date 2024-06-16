import React from "react";
import classes from "./Statistics.module.css";
import { Heading, Text } from "../../components/common";
import clsx from "clsx";
import {
  coin,
  darkInvitedUser,
  invitedUser,
  one,
  three,
  two,
} from "../../images";
import { useTheme } from "../../ThemeContext/ThemeContext";

const Statistics = () => {
  const { isDarkTheme } = useTheme();
  const tappers = [
    {
      img: invitedUser,
      userName: "Username",
      earned: "100k",

      position: 1,
    },
    {
      img: invitedUser,
      userName: "Username",
      earned: "100k",

      position: 2,
    },
    {
      img: invitedUser,
      userName: "Username",
      earned: "100k",

      position: 3,
    },
    {
      img: invitedUser,
      userName: "Username",
      earned: "100k",
      status: "accepted",
      position: 4,
    },
    {
      img: invitedUser,
      userName: "Username",
      earned: "100k",
      status: "accepted",
      position: 5,
    },
    {
      img: invitedUser,
      userName: "Username",
      earned: "100k",
      status: "invited",
      position: 6,
    },
    {
      img: invitedUser,
      userName: "Username",
      earned: "100k",
      status: "accepted",
      position: 7,
    },
    {
      img: invitedUser,
      userName: "Username",
      earned: "100k",
      status: "invited",
      position: 8,
    },
  ];
  return (
    <section className={classes.mainWrapper}>
      <div className={classes.infoContainer}>
        <div className={classes.users}>
          <div className={classes.userBox}>
            <Text base500 textCenter sm>
              Total Users
            </Text>
            <Text base base0 font600>
              536K
            </Text>
          </div>{" "}
          <div className={classes.userBox}>
            <Text base500 textCenter sm>
              Total Tappers
            </Text>
            <Text base base0 font600>
              149K
            </Text>
          </div>{" "}
          <div className={classes.userBox}>
            <Text base500 textCenter sm>
              Online Now
            </Text>
            <Text base base0 font600>
              25K
            </Text>
          </div>
        </div>
        <div className={classes.soldAndEarned}>
          <div className={classes.soldBox}>
            <Text base500 textCenter sm>
              Boosts Sold
            </Text>
            <Text base base0 font600>
              {(10000).toLocaleString()}
            </Text>
          </div>{" "}
          <div className={classes.earnedByTapping}>
            <Text base500 textCenter sm>
              Earned by Tapping
            </Text>
            <div className={classes.amountContainer}>
              <img src={coin} alt="#" className={classes.coin} />
              <Text base base0 font600>
                27.56M
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.wrapper}>
        <Heading xl base0 semiBold>
          Top Tappers
        </Heading>
        <div className={clsx(classes.userInfo, "overflow")}>
          {tappers.map((el, i) => (
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
                  <img src={coin} alt="#" className={classes.coin} />
                  {el.earned}
                </Text>
              </div>

              {el.position > 3 ? (
                <Text base0 className={clsx(classes.positionNumber)}>
                  {el.position}
                </Text>
              ) : (
                <img
                  src={
                    el.position === 1
                      ? one
                      : el.position === 2
                      ? two
                      : el.position === 3
                      ? three
                      : ""
                  }
                  alt=""
                  className={classes.positionImg}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
