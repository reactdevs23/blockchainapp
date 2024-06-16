import React, { useEffect, useState } from "react";
import classes from "./Booster.module.css";
import { placholder } from "../../../images";
import { Heading } from "../../../components/common";
import AddBoosterModal from "../../../Modals/AddBoosterModal/AddBoosterModal";
import AddBoosterSuccessfulModal from "../../../Modals/AddBoosterSuccessfulModal/AddBoosterSuccessfulModal";
import SingleBooster from "./SingleBooster/SingleBooster";

const Boosters = () => {
  const [showAddBoosterModal, setShowAddBoosterModal] = useState(false);
  const [succesFullyAddedModal, setShowSuccessFullyAddedModal] =
    useState(false);
  const boosters = [
    {
      img: placholder,
      title: "GameFi Tokens",
      profitPerHour: 50,
      balance: "10K",
      level: 0,
    },
    {
      img: placholder,
      title: "GameFi Tokens",
      profitPerHour: 50,
      balance: "10K",
      level: 0,
    },
    {
      img: placholder,
      title: "GameFi Tokens",
      profitPerHour: 50,
      balance: "10K",
      level: 0,
    },
    {
      img: placholder,
      title: "GameFi Tokens",
      profitPerHour: 50,
      balance: "10K",
      level: 0,
    },
    {
      img: placholder,
      title: "GameFi Tokens",
      profitPerHour: 50,
      balance: "10K",
      level: 0,
    },
    {
      img: placholder,
      title: "GameFi Tokens",
      profitPerHour: 50,
      balance: "10K",
      level: 0,
    },
  ];
  useEffect(() => {
    if (succesFullyAddedModal) {
      const timer = setTimeout(() => {
        setShowSuccessFullyAddedModal(false);
      }, 2000);
      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [succesFullyAddedModal]);

  return (
    <>
      <div
        className={classes.wrapper}
        onClick={() => {
          if (succesFullyAddedModal) {
            setShowSuccessFullyAddedModal(false);
          }
        }}
      >
        <Heading xl base0 semiBold>
          Tap Bot Booster
        </Heading>
        <div className={classes.items}>
          {boosters.map((el, i) => (
            <SingleBooster
              {...el}
              key={i}
              onClick={() => setShowAddBoosterModal(true)}
            />
          ))}
        </div>
      </div>
      <AddBoosterModal
        isActive={showAddBoosterModal}
        onClose={() => setShowAddBoosterModal(false)}
        setSuccessFullyAdded={setShowSuccessFullyAddedModal}
      />
      <AddBoosterSuccessfulModal
        isActive={succesFullyAddedModal}
        onClose={() => setShowSuccessFullyAddedModal(false)}
      />
    </>
  );
};
export default Boosters;
