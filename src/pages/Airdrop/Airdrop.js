import React, { useEffect, useState } from "react";
import classes from "./Airdrop.module.css";
import {
  moreParticipant,
  participant,
  participant2,
  participant3,
  participant4,
} from "../../images";
import { Text } from "../../components/common";

import Tabs from "../../components/common/Tabs/Tabs";
import Details from "./Details/Details";
import Tasks from "./Tasks/Tasks";
import ClaimPointSuccessfulModal from "../../Modals/ClaimPointSuccessfulModal/ClaimPointSuccessfulModal";
const Airdrop = ({ status = "Ongoing" }) => {
  const tabs = ["Details", "Airdrop Task"];
  const [selectedTab, setSelectedTab] = useState("Details");
  const [showClaimPointSuccessfullyModal, setShowClaimPointSuccessfullyModal] =
    useState(false);

  const participants = [
    participant,
    participant2,
    participant3,
    participant4,
    moreParticipant,
  ];
  const tasks = [
    {
      title: "Telegram Task",
      info: "Join Drift Telegram group and stay active in the group.",
      status: "Completed",
    },
    {
      title: "Discord Task",
      info: "Join Drift Discord server and stay active in the server.",
      status: "Completed",
    },
    {
      title: "Twitter Task",
      info: "Follow Drift on Twitter and retweet the pinned post.",
      status: "Completed",
    },
  ];
  const allTasksCompleted = tasks.every(
    (task) => task.status.toLowerCase() === "completed"
  );
  useEffect(() => {
    if (showClaimPointSuccessfullyModal) {
      const timer = setTimeout(() => {
        setShowClaimPointSuccessfullyModal(false);
      }, 2000);
      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [showClaimPointSuccessfullyModal]);
  return (
    <>
      <section
        className={classes.wrapper}
        onClick={() => {
          if (showClaimPointSuccessfullyModal) {
            setShowClaimPointSuccessfullyModal(false);
          }
        }}
      >
        <div className={classes.infoContainer}>
          <div className={classes.nameContainer}>
            <Text base0 xl semiBold>
              Current Airdrop title here
            </Text>
          </div>
          <div className={classes.participantContainer}>
            <div className={classes.participants}>
              {participants.map((el, i) => (
                <img
                  src={el}
                  key={i}
                  className={classes.participant}
                  alt="#"
                  style={{ marginLeft: i === 0 ? 0 : `${-12}px` }}
                />
              ))}
            </div>
            <Text base400>1,694 participants</Text>
          </div>
          <Text base400>2024/05/22 03:00 - 2024/06/03 03:00 GMT+06:00</Text>
        </div>
        <div className={classes.box}>
          {" "}
          <Tabs
            tabs={tabs}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            type2
          />
          <div className={classes.detailsContainer}>
            {selectedTab === "Details" && <Details />}{" "}
            {selectedTab === "Airdrop Task" && <Tasks tasks={tasks} />}
          </div>
        </div>
        <div className={classes.rewards}>
          <div className={classes.nameContainer}>
            <Text base500 sm>
              Rewards
            </Text>{" "}
            <Text base0 lg className={classes.point}>
              80 Points
            </Text>
          </div>

          {allTasksCompleted ? (
            <button
              className={classes.claimButton}
              onClick={() => setShowClaimPointSuccessfullyModal(true)}
            >
              Claim Points
            </button>
          ) : (
            <button className={classes.button}>Task Incomplete</button>
          )}
        </div>
      </section>
      <ClaimPointSuccessfulModal
        isActive={showClaimPointSuccessfullyModal}
        onClose={() => setShowClaimPointSuccessfullyModal(false)}
      />
    </>
  );
};

export default Airdrop;
