import React from "react";
import classes from "./Details.module.css";
import { Text } from "../../../components/common";
const Details = () => {
  const stepsByStep = [
    "Visit the Agora Galxe and Zealy Quests pages.",
    "Sign up for the airdrop using your social media accounts or wallet address.",
    " Complete various social tasks to earn free XP.",
    " A total of 1 million AGA is allocated for this airdrop.",
  ];
  return (
    <div className={classes.wrapper}>
      <div className={classes.box}>
        <Text base200 base>
          About Airdrop
        </Text>
        <Text base500 className={classes.info}>
          Agora is building the ultimate arena for opportunities in Web3: a hub
          for authentic & gamified experiences that unites leading projects,
          users, & investors for mutual growth. Incubated by SwissBorg, Agora
          aspires to set the standard in GameFi, leveraging blockchain
          technology to deliver enhanced gaming experiences.
        </Text>
      </div>{" "}
      <div className={classes.box}>
        <Text base200 base>
          Step-by-Step Guide:
        </Text>
        <div className={classes.steps}>
          {stepsByStep.map((step, i) => (
            <div className={classes.step} key={i}>
              <Text base500 className={classes.id}>
                {i + 1}.
              </Text>
              {"  "}
              <Text base500 className={classes.id}>
                {step}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
